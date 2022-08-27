import { usuarioLogueado } from "./booleanos";

describe('Pruebas de booleanos', () => {

it( 'Debe retornar true', () => {

const resp = usuarioLogueado();

expect( resp ).toBeTruthy();

} )




});