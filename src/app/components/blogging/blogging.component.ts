import { Component } from '@angular/core';
import { Blog } from '../../interfaces/blog';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blogging',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './blogging.component.html',
  styleUrl: './blogging.component.css'
})
export class BloggingComponent {
   blogPosts: Blog[] = [
    {
      titulo: 'Angular Standalone Components',
      imagen: 'https://angular.io/assets/images/logos/angular/angular.svg',
      texto: 'Angular es mucho mejor ahora que esta los componentes standalone.',
      fecha: '2024-11-28',
    },
    {
      titulo: 'Últimas noticias sobre TypeScript',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
      texto: 'TypeScript es un lenguaje de verdad que te ayuda a poder programar mejor.',
      fecha: '2024-11-27',
    }
  ];


  nuevaNoticia: Blog = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: '',
  };

  ngOnInit(): void {
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      this.blogPosts = JSON.parse(storedPosts);
    }
  }

  agregarNoticia() {
    if (this.validarCampos()) {
      this.blogPosts.unshift(this.nuevaNoticia);

      localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));

      this.nuevaNoticia = {
        titulo: '',
        imagen: '',
        texto: '',
        fecha: '',
      };
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  
  validarCampos(): boolean {
    const { titulo, imagen, texto, fecha } = this.nuevaNoticia;
    return titulo.trim() !== '' && imagen.trim() !== '' && texto.trim() !== '' && fecha.trim() !== '';
  }
}
