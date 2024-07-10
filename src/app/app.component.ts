import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, HomepageComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-website';
}
