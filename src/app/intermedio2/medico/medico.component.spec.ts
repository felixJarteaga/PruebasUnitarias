import { MedicoComponent } from "./medico.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from "./medico.service";
import { HttpClientModule } from '@angular/common/http';


describe('Médico Component pruebas integración', () => {

  let componente: MedicoComponent
  let fixture: ComponentFixture<MedicoComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[ MedicoComponent ],
      providers:[ MedicoService ],
      imports:[ HttpClientModule ]
    });
    fixture = TestBed.createComponent( MedicoComponent );
    componente = fixture.componentInstance;
  });
  

  it('Debe de crearse el componente', () => {
    expect( componente ).toBeTruthy();
  });

    it('Debe de retornar el saludo al médico', () => {
      const nombre = 'Felix';
      const res = componente.saludarMedico(nombre);
      expect(res).toContain( nombre ); 
  });




});