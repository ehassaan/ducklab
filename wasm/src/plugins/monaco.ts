

import { useNotebookStore } from '@/store/notebook';
import * as monaco from 'monaco-editor';

function escape(str: string) {
    return str.replace(/'/g, "''");
}

export async function registerMonaco() {
    const notebook = useNotebookStore();

    async function createDependencyProposals(range: any, word: monaco.editor.IWordAtPosition, input: string) {
        const query = `select suggestion from sql_auto_complete('${escape(input)}')`;
        console.log("suggestion-input: ", input, query);
        const items = await notebook.dataSource?.queryNative(query);
        console.log("suggestion-results: ", items);
        if (!items) return [];
        const suggestions = items.values.map(item => {
            // const kw = word.word.toUpperCase() === word.word ? item.suggestion.toUpperCase() : item.suggestion.toLowerCase();
            return {
                label: item.suggestion,
                kind: monaco.languages.CompletionItemKind.Field,
                insertText: item.suggestion,
                range: range
            };
        });
        return suggestions;
    }

    const provider = monaco.languages.registerCompletionItemProvider("sql", {
        provideCompletionItems: async function (model, position) {
            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn,
            };
            return {
                suggestions: await createDependencyProposals(range, word, model.getValueInRange({
                    startColumn: 0,
                    endColumn: position.column,
                    startLineNumber: position.lineNumber,
                    endLineNumber: position.lineNumber
                })),
            };
        },
    });

    return provider;
}