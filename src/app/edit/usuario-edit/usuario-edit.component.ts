import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UsuarioService } from 'src/app/service/usuario.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  user: User = new User()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == "") {
      this.router.navigate(["/entrar"])
    }

    let id = this.route.snapshot.params['id']
    this.idUser = id

    this.findByIdUser()
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  findByIdUser() {
    this.usuarioService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
      this.user.senha = ""
    })
  }
}
