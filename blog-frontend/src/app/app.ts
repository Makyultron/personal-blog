// Archivo a modificar: src/app/app.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header"; // <-- NOMBRE CORREGIDO
import { Footer } from "./components/footer/footer"; // <-- NOMBRE CORREGIDO
import { Home } from "./pages/home/home";       // <-- NOMBRE CORREGIDO

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    styleUrl: './app.css',
    // Nombres corregidos en el array de imports
    imports: [ RouterOutlet, Header, Footer, Home ]
})
// Nombre de la clase principal corregido para coincidir con main.ts
export class App {
  title = 'blog-frontend';
}