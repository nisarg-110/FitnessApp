import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto">
        <ul class="flex space-x-4">
          <li>
            <a routerLink="/classes" class="text-white hover:text-gray-300">Classes</a>
          </li>
          <li>
            <a routerLink="/add-class" class="text-white hover:text-gray-300">Add Class</a>
          </li>
          <li>
            <a routerLink="/analytics" class="text-white hover:text-gray-300">Analytics</a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="container mx-auto p-4">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  title = 'fitness-scheduler';
}
