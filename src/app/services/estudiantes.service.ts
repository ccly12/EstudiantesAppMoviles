import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstudiantesService {
  private url = 'https://landscapes-room-duncan-provide.trycloudflare.com/estudiantes';

  constructor(private http: HttpClient) {}

  obtenerEstudiantes(): Observable<any> {
    return this.http.get(this.url);
  }
}