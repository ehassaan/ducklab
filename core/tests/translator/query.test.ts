// import { MssqlDataSource } from './data/mssql/MssqlDataSource';
import { describe, expect, test } from '@jest/globals';
import {
  ComparisonOp,
  ICalculatedColumn,
  IEntity,
  IFetchQuery,
  IPlainField,
  LogicalOp,
  SqlTranslator
} from '@/main';

// const tr = new SqlTranslator({ IS_LMT_SKP: false } as ISqlConfig);

const query: IFetchQuery = {
  fields: [
    {
      name: 'MyCol',
      entity: 'MyTable',
    } as IPlainField,
    {
      name: 'Col2',
      entity: 'MyTable',
      alias: 'Alias2',
    } as IPlainField,
  ],
  filters: {
    op: LogicalOp.Or,
    groups: [
      {
        condition: ComparisonOp.GreaterEqual,
        left: {
          entity: '',
          name: 'MyCol2',
        } as IPlainField,
        right: {
          expression: '10',
        } as ICalculatedColumn,
      },
      {
        condition: ComparisonOp.Equal,
        left: {
          entity: '',
          name: 'MyCol5',
        } as IPlainField,
        right: {
          expression: "'Hello'",
        } as ICalculatedColumn,
      },
    ],
  },
  from: {
    name: 'MyTable',
  } as IEntity,
};


function translateQuery(query: IFetchQuery) {
  let translator = new SqlTranslator();

  let sql = translator.translate(query);
  console.log(sql);

  return sql;
}

describe("Translator", () => {

  test("TranslateQuery1", () => {

    expect(translateQuery(query)).toEqual(`SELECT "MyCol","Col2"\nFROM "MyTable"\nWHERE ("MyCol2" >= 10) OR ("MyCol5" = 'Hello')`);
  });

});
// const sql = tr.translate(query, 10, 2);

// console.log(sql);
