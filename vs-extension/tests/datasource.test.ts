import { describe, expect, test } from '@jest/globals';
import { DuckdbDataSource } from "../src/data/duckdb/DuckdbDataSource";


function testCreateDs() {
    let ds = new DuckdbDataSource("myds", {});
    return ds;
}


describe("DataSource", () => {

    test("createDs", () => {
        expect(testCreateDs()).toBeDefined();
    });

});