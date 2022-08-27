
// describe('Pruebas de String');
// it('Debe regresar un string');

import { mensaje } from "./string";

describe('Pruebas de Strings', () => {

it( 'Debe de regresar un String', ()=> {

  const respuesta = mensaje('Felix')
  expect(  typeof respuesta ).toBe('string');
});

it( 'Debe de retornar un saludo con el nombre enviado', ()=> {

  const nombre =  'Felix'
  const respuesta = mensaje(nombre)
  expect(  respuesta ).toContain(nombre);
});


});



