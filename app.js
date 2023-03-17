let nombrecompleto = prompt("ingresa tu nombre completo :");
let numeroid = prompt("ingrese numero de identificacion :");
let ingreso = prompt("ingrese su edad por favor :");

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {

    if (ingreso>= 18){
      resolve(` \n Nombre ${nombrecompleto} \n id:, ${numeroid} \n ingreso autorizado edad: ${ingreso} \n  `);
  
    }if (ingreso< 18){
      reject('menor de edad ingreso no autorizado');
    }

      
    else {
      reject('No');
    }
  }, 00);
});

miPromesa.then((valor) => {
  console.log(valor)
}).catch((err) => {
  console.log(err)

});
