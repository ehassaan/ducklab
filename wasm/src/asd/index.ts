// import { MssqlDataSource } from './data/mssql/MssqlDataSource';
import { ICalculatedColumn, IPlainField } from './language/IExpression';
import { IFetchQuery } from './language/IFetchQuery';
import { ComparisonOp, LogicalOp } from './language/IFilter';
import { IEntity } from './language/IEntity';
import { ISqlConfig } from './translator/sql/ISqlConfig';
import { SqlTranslator } from './translator/sql/SqlTranslator';

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

// const sql = tr.translate(query, 10, 2);

// console.log(sql);

// const source = new MssqlDataSource('MyDs', {
//   server: process.env.MSSQL_HOST,
//   database: 'MachineId',
//   user: 'hassaan',
//   password: process.env.MSSQL_PWD,
// });

// (async () => {
//   console.log('Working: ', await source.test());
//   const datasets = await source.getDatasets();
//   console.log(datasets);
//   console.log('Name: ', datasets[6].name);
//   // console.log(await datasets[6].preview(10, 0));
// })();
