import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ClassService, Class } from '../class.service';

@Component({
  selector: 'app-add-class',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  template: `
    <div class="container">
      <h2>Add New Class</h2>
      <form (ngSubmit)="onSubmit()" #classForm="ngForm">
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput [(ngModel)]="newClass.name" name="name" required>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Trainer</mat-label>
          <input matInput [(ngModel)]="newClass.trainer" name="trainer" required>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Category</mat-label>
          <mat-select [(ngModel)]="newClass.category" name="category" required>
            <mat-option value="Yoga">Yoga</mat-option>
            <mat-option value="Cardio">Cardio</mat-option>
            <mat-option value="Strength Training">Strength Training</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Duration (minutes)</mat-label>
          <input matInput type="number" [(ngModel)]="newClass.duration" name="duration" required min="1">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Capacity</mat-label>
          <input matInput type="number" [(ngModel)]="newClass.capacity" name="capacity" required min="1">
        </mat-form-field>

        <button mat-raised-button color="primary" type="submit">Add Class</button>
      </form>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    mat-form-field {
      width: 100%;
    }
  `]
})
export class AddClassComponent {
  newClass: Class = {
    name: '',
    trainer: '',
    category: '',
    duration: 0,
    capacity: 0
  };

  constructor(private classService: ClassService) {}

  onSubmit() {
    this.classService.addClass(this.newClass).subscribe({
      next: () => {
        console.log('Class added successfully');
        // Reset form
        this.newClass = {
          name: '',
          trainer: '',
          category: '',
          duration: 0,
          capacity: 0
        };
      },
      error: (error) => {
        console.error('Error adding class:', error);
      }
    });
  }
}