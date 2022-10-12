
import { Jugador2 } from './jugador2';

describe('Jugador 2 Emit', () => {

let jugador:Jugador2;

beforeEach( () => jugador = new Jugador2() );

it('Debe de emitir un evento cuando recibe daño', () => {

  let nuevoPuntosVida = 0;

jugador.puntosVidaCambia.subscribe( newPuntosVida => {
nuevoPuntosVida = newPuntosVida;
});

jugador.recibeDanio(1000)

  expect( nuevoPuntosVida ).toBe(0);
})

it('Debe de emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {

  let nuevoPuntosVida = 0;

jugador.puntosVidaCambia.subscribe( newPuntosVida => {
nuevoPuntosVida = newPuntosVida;
});

jugador.recibeDanio(90)

  expect( nuevoPuntosVida ).toBe(10);
})

});