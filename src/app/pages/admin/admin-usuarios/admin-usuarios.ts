import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1>👤 Gestión de Usuarios</h1>

    <p>
      Aquí el admin podrá:
    </p>

    <ul>
      <li>✔ Listar usuarios</li>
      <li>✔ Activar / Desactivar (eliminación lógica)</li>
      <li>✔ Editar información</li>
      <li>✔ Ver estado activo/inactivo</li>
    </ul>
  `
})
export class AdminUsuarios {}
