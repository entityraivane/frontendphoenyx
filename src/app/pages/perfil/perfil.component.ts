import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public usuario: any;
  formsubmit: boolean = false;
  form: FormGroup = new FormGroup({
    correo: new FormControl(localStorage.getItem('correo') || '', [
      Validators.email,
      Validators.required,
    ]),
    nombre: new FormControl(),
    telefono: new FormControl(),
  });
  constructor(public usuarioService: UsuarioService) {}
  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;
  }
  guardarCambios() {
    console.log(this.form);
  }
}
