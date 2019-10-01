import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  
  nombre = 'Leylin';

  nombre2 = 'leYlin ESQUivel BoLAÑos';

  arregloNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  PI = Math.PI;

  salario = 450000.49;

  video = 'Pg1wgETlGa0';

  activarPass: boolean;

  fecha = new Date();

  heroe = {
    nombre: 'Logan',
    nombreClave: 'Wolverine',
    edad: 400,
    direccion: {
      calle: 'Primera',
      casa: 19
    }
  };

  promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa ejecutada correctamente');
    }, 4000);
  })

}
