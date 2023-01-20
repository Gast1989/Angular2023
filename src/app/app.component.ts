import { Component, OnInit } from '@angular/core';

interface Tarjeta {
  titulo: string;
  subtitulo: string;
  nro?:number; // el "?" significa que la variable puede ser nula, o sea, que no esté inicializada
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  // "OnInit" es un interface

  title = 'Mi Primer App ANGULAR';
  public ArregloTarjetas: Tarjeta[] = [] //variable/arreglo publico de tipo Tarjeta

  ngOnInit(): void {
    this.ArregloTarjetas = [
      { titulo: 'Video 1', subtitulo: 'Subtitulo Video 1'},
      { titulo: 'Video 2', subtitulo: 'Subtitulo Video 2'},
      { titulo: 'Video 3', subtitulo: 'Subtitulo Video 3'},
    ]
  }
}

