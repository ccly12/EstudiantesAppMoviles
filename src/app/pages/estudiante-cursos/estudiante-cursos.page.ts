import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudiantesService } from '../../services/estudiantes.service';

interface Estudiante {
  id: number;
  primerNombre: string;
  cursosMatriculados: any[];
}

@Component({
  selector: 'app-estudiante-cursos',
  templateUrl: './estudiante-cursos.page.html',
  styleUrls: ['./estudiante-cursos.page.scss'],
})
export class EstudianteCursosPage implements OnInit {
  estudiante: Estudiante | undefined;
  cursos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private estudiantesService: EstudiantesService
  ) {}

  ngOnInit() {
    const estudianteId = this.route.snapshot.paramMap.get('id');
    if (estudianteId) {
      this.estudiantesService.obtenerEstudiantes().subscribe((data: Estudiante[]) => {
        this.estudiante = data.find((e: Estudiante) => e.id === +estudianteId);
        this.cursos = this.estudiante?.cursosMatriculados || [];
      });
    } else {
      console.error('ID de estudiante no se encuentra');
    }
  }
}
