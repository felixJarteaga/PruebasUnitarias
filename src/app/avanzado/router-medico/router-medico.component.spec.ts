import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigate( params ){}
}

class FakeActivatedRoute {

  // observable = new Observable;
    // params:Observable<any> = this.observable = of();

    private subject = new Subject();

    constructor(){}

    push( valor ){
      this.subject.next( valor );
    }

    get params(){
      return this.subject.asObservable();
    }

}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ], 
      providers:[
        { provide: Router, useClass:FakeRouter },
        { provide: ActivatedRoute, useClass:FakeActivatedRoute },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a medico cuando se guarde', () => {
    
    const router = TestBed.inject(Router);

    const espia = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(espia).toHaveBeenCalledWith( ['medico', '123'] );

  });

  it('Debe de colocar el id = nuevo', () => {
    component = fixture.componentInstance;
    const activatedRoute:any = TestBed.inject(ActivatedRoute);
    activatedRoute.push( {id:'nuevo'} )

    expect( component.id ).toBe('nuevo');
  });
  
  

});
