import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudianteCursosPage } from './estudiante-cursos.page';

describe('EstudianteCursosPage', () => {
  let component: EstudianteCursosPage;
  let fixture: ComponentFixture<EstudianteCursosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
