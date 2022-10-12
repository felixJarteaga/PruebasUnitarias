import { Observable,from, of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio  = new MedicosService( null );

    beforeEach( () => {
      componente = new MedicosComponent( servicio );
    });


    it('Init debe de cargar los médicos', () => {

      let observable = new Observable();
      const medicos = ['medio1','medico2','medico3']

      spyOn( servicio, 'getMedicos').and.callFake( () => {
        return observable = from( [ medicos ] )
      } );

      componente.ngOnInit();

      expect( componente.medicos.length ).toBeGreaterThan(0);
    });

      it('Debe de llamar al servidor para agregar un médico', () => {

        let observable = new Observable();

        const espia = spyOn(servicio, 'agregarMedico').and.callFake( medico => {
          return observable = of();
        } )

        componente.agregarMedico();

        expect( espia ).toHaveBeenCalled();
    });

      it('Debe de agregar un nuevo médico al arreglo de médicos ', () => {

        let observable = new Observable();
        const medico = { id:1, nombre:'Juan' };

        spyOn(servicio, 'agregarMedico').and.returnValue( observable = from([ medico ]) );
        
        componente.agregarMedico();

        expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {

        let observable = new Observable();
      

      const miError = 'no se pudo agregar al médico';
        spyOn(servicio, 'agregarMedico').and.returnValue( observable = throwError(miError) );

        componente.agregarMedico();

      expect( componente.mensajeError ).toBe( miError );
    });

     it('Debe de llamar al servidor para borrar un médico', () => {

        let observable = new Observable();

      spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico').and.callFake( ()=> {
          return observable = of();
        } )

        componente.borrarMedico('1');

        expect( espia ).toHaveBeenCalledWith('1');
    });


       it('NO debe de llamar al servidor para borrar un médico', () => {

        let observable = new Observable();

      spyOn(window, 'confirm').and.returnValue(false);

        const espia = spyOn(servicio, 'borrarMedico').and.callFake( ()=> {
          return observable = of();
        } )

        componente.borrarMedico('1');

        expect( espia ).not.toHaveBeenCalledWith('1');
    });




});
