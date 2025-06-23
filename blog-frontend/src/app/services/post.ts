import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Esto le da superpoderes a nuestro editor para autocompletar y detectar errores.
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // --- ¡¡¡MUY IMPORTANTE!!! ---
  // Esta es la dirección de nuestro backend.
  private apiUrl = 'https://expert-space-happiness-wgv7gvrp6q3965q-3000.app.github.dev/api/posts';

  constructor(private http: HttpClient) { }

  // Este método hace la petición GET a nuestro backend y espera recibir un array de Posts.
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}