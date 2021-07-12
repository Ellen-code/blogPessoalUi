import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdUser(id: number): Observable<User>{
    console.log(this.token)
    return this.http.get<User>(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  putUser(user: User): Observable<User> {
    return this.http.put<User>('http://localhost:8080/usuarios', user, this.token)
  }
}
