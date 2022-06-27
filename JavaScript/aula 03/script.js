// o que são vetores ou arrays

// como declarar um arrays
/*let array = ['string' ,1 ,true];
console.log(array);*/

//pode guardar varios tipos de dados
let array = ['string' , 1 , true,['array1'],['array2'],['array3']['array4']];
console.log(array);

/*//forEach
array.forEach(function(ClipboardItem, index),{console.log(item, index)});*/

/* array.push([]);
console.log(array)*/

/*array.pop();
console.log(array);*/

/*array.shift();
console.log(array);*/

/*array.unshift();
console.log(array);*/

/*console.log(array.indexOf(true))*/

/*array.splice(0, 3);
console.log(array);*/

/*let novoArray= array.slice(0, 3);
console.log(novoArrat);*/

let object = {string: 'atring',number: 1,boolean:true,array:['array'],Objctinterno:{objecInterno:'objeto interno'}}
/*console.log(object);

var string = object.string;
console.log(string);

var arrayInterno = object;
console.log(array);*/

var {string,boolean,objecInterno} = object;
console.log(string,boolean,objecInterno);