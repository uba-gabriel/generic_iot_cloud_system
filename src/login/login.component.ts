// login.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  onSubmit() {
    // Aquí puedes implementar la lógica para enviar los datos del formulario al servidor y manejar la respuesta.
    // Por ejemplo, puedes utilizar un servicio de autenticación para verificar las credenciales.

    // Aquí, simplemente mostraremos un mensaje en la consola con los datos del formulario.
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    // Luego, podrías redirigir al usuario a otra página si el inicio de sesión es exitoso.
  }
}