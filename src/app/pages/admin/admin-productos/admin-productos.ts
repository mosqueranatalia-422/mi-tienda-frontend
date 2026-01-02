import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1>📦 Administración de Productos</h1>

    <ul>
      <li>✔ Crear productos</li>
      <li>✔ Editar productos</li>
      <li>✔ Gestionar stock</li>
      <li>✔ Desactivar sin eliminar</li>
    </ul>
  `
})
export class AdminProductos {}
