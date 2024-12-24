import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BloggingComponent } from "./components/blogging/blogging.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BloggingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistemaBloggingAngular';
}
