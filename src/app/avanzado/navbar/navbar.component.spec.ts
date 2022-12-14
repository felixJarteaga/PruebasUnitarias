import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('Debe de tener un routerLink a la page de médicos', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    // console.log(debugElements);s

    let existe = false;

    for (const elemt of debugElements) {
      if (elemt.attributes['routerLink'] ==='/medicos') {
        existe  =true;
        break;
      }
    }
    
    expect( existe ).toBeTruthy();
  });

});
