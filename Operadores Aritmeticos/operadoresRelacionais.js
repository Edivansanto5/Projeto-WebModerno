console.log('(01)','1'== 1);//pelo valor
console.log('(02)','2'=== 2);//pelo tipo
console.log('(03)','1' != 1);// diferente por valor
console.log('(04)','1' !== 1);// diferente por tipo

console.log('(05)',2>3); // maior que
console.log('(06)',2<3);// menor que
console.log('(07)',2>=3); // maior ou igual ha
console.log('(08)',2<3);// menor ou igual ha

const data1 = new Date(0)
const data2 = new Date(0)
console.log('(09)',data1 == data2)
console.log('(10)',data1 === data2);
console.log('(11)',data1.getTime() == data2.getTime());
console.log('(12)',data1.getTime() === data2.getTime());
