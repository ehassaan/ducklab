import { NotebookCell } from '@/main';
import { IsqlSerializer } from '@/notebook/IsqlSerializer';
import { Notebook } from '@/notebook/Notebook';
import { describe, expect, test } from '@jest/globals';


function testParse() {
    let serializer = new IsqlSerializer();

    let result = serializer.parse("-- %% SQL_RAW | mytable \n\nselect * from 'mytable'\n\n");
    return result;
}


function testSerialize() {
    let serializer = new IsqlSerializer();

    let nb = new Notebook();
    nb.cells = [
        new NotebookCell("1", "table1", nb, "select * from \"myfile.csv\""),
        new NotebookCell("2", "table2", nb, "select * from table1")
    ];
    return serializer.serialize(nb);
}

describe("Serializer", () => {
    test("Parse", () => {
        expect(testParse()).toBeInstanceOf(Notebook);
    });
    test("Parse Length", () => {
        expect(testParse().cells).toHaveLength(1);
    });
    test("Serialize", () => {
        expect(testSerialize()).toBe('-- %% SQL_VIEW | table1\nselect * from "myfile.csv"\n-- %% SQL_VIEW | table2\nselect * from table1\n');
    });

});