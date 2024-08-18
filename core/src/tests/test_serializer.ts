import { IsqlSerializer } from '@/main';


let serializer = new IsqlSerializer();

let result = serializer.parse("-- %% SQL_RAW | mytable \n\nselect * from 'mytable'\n\n");
console.log(result);