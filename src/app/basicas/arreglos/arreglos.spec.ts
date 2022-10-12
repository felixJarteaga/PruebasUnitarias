import { obtenerRobots } from "./arreglos";

xdescribe('Pruebas de arreglos', () => {

it('Debe retornar almenos 3 robots', () => {

  const resp = obtenerRobots();

  expect(resp.length).toBeGreaterThan(3);

});


it('Debe de exisitir MegaMan y Ultorn', () => {

  const resp = obtenerRobots();

  expect(resp).toContain('MegaMan');
  expect(resp).toContain('Ultron');

});

});