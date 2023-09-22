
// Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
let listaContactos = [{
    id :1,
    nombre: "Alejandra",
    apellido: "Lopez",
    telefono: "3168067141",
    ubicaciones: {
      ciudad: "Pasto",
      direccion:"mz c casa 10",}
  },
  {
    id :2,
    nombre: "Maria",
    apellido: "Muñoz",
    telefono: "3122677787",
    ubicaciones: {
      ciudad: "Nariño",
      direccion:"mz c casa 11",}
  }
  ]
  
  // // Crea una función para añadir un nuevo contacto a una lista
  function agregarContacto (nuevoContacto){
    listaContactos.push(nuevoContacto)
  }
  // // // Crea una función para borrar un contacto existente de la lista
  function borrarContacto(iDcontactoABorrar){
    let nuevaLista = listaContactos.filter(
    (contacto) => contacto.id !==iDcontactoABorrar)
    listaContactos = nuevaLista;
    console.log(iDcontactoABorrar)
  }
  
  // // // Crea una función para imprimir en consola los contactos presentes en la lista
  
  function imprimirContactos (){
    return listaContactos
  }

  module.exports = {agregarContacto,borrarContacto,imprimirContactos}

//   console.log(imprimirContactos())
//   borrarContacto(2)
//   console.log(imprimirContactos())
  
//   function editarContacto(idBuscado, nuevosDatos) {
//     let contactoIndex = listaContactos.findIndex(contacto => contacto.id === idBuscado);
  
//     if (contactoIndex !== -1) {
//       Object.assign(listaContactos[contactoIndex], nuevosDatos);
//       console.log(`Contacto con ID '${idBuscado}' editado exitosamente.`);
//     } else {
//       console.log(`No se encontró el contacto con ID '${idBuscado}'.`);
//     }
//   } 
  
