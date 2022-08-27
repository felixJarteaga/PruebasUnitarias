import { incrementar } from "./numeros";


describe('Pruebas de numeros',  () => {

  it('Debe retornar 100 si el numero ingresado es mayor a 100', () => {
    const resp = incrementar(300);

    expect( resp ).toBe(100);
  });

  it('Debe retornar el numero + 1,  si el numero ingresado es menor a 100', () => {
    const resp = incrementar(80);

    expect( resp ).toBe(81);
  });

});