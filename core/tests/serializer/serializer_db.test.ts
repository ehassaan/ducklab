import { DatabricksSerializer } from '@/notebook/DatabricksSerializer';
import { Notebook } from '@/notebook/Notebook';
import { describe, expect, test } from '@jest/globals';
import fs from "fs";
import path from "path";


function parse(content: string) {
    let serializer = new DatabricksSerializer();
    let nb = serializer.parse(content, "testnb");
    return nb;
}

function serialize(notebook: Notebook) {
    const serializer = new DatabricksSerializer();
    const content = serializer.serialize(notebook);
    return content;
}

describe("Serializer", () => {

    test("DatabricksSerializer1 - notebook_db1.py", () => {
        let content = fs.readFileSync(path.join(__dirname, "data/notebook_db1.py"), { encoding: 'utf-8' });
        expect(serialize(parse(content.trimEnd()))).toEqual(content.trimEnd());
    });

    test("DatabricksSerializer1 - notebook_db2.py", () => {
        let content = fs.readFileSync(path.join(__dirname, "data/notebook_db2.py"), { encoding: 'utf-8' });
        expect(serialize(parse(content.trimEnd()))).toEqual(content.trimEnd());
    });
});
