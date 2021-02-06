import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormDataComponent } from './form-data.component';

describe('FormDataComponent', () => {
  let component: FormDataComponent;
  let fixture: ComponentFixture<FormDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDataComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(FormDataComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.formLogin.valid).toBeFalsy();
  });

  it('submitting a form', () => {
    component.formLogin.patchValue({username: 'afif'});
    component.formLogin.patchValue({password: '12345'});
    component.getDataLogin();


    expect(component.dataLogin[0].username).toBe('afif');
    expect(component.dataLogin[0].password).toBe('12345');
  });
});
