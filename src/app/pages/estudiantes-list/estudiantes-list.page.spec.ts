import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudiantesListPage } from './estudiantes-list.page';

describe('EstudiantesListPage', () => {
  let component: EstudiantesListPage;
  let fixture: ComponentFixture<EstudiantesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
