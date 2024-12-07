import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../services/estudiantes.service';


@Component({
  selector: 'app-estudiantes-list',
  templateUrl: './estudiantes-list.page.html',
  styleUrls: ['./estudiantes-list.page.scss'],
})
export class EstudiantesListPage implements OnInit {
  estudiantes: any[] = [];

  constructor(private estudiantesService: EstudiantesService) {}

  ngOnInit() {
    this.estudiantesService.obtenerEstudiantes().subscribe((data) => {
      this.estudiantes = data;
    });
  }
}
