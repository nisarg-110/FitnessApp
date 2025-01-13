import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-class-schedule',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="container">
      <h2>Class Schedule</h2>
      <table mat-table [dataSource]="classes" class="mat-elevation-z8">
        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">{{element.name}}</td>
        </ng-container>

        <!-- Trainer Column -->
        <ng-container matColumnDef="trainer">
          <th mat-header-cell *matHeaderCellDef>Trainer</th>
          <td mat-cell *matCellDef="let element">{{element.trainer}}</td>
        </ng-container>

        <!-- Category Column -->
        <ng-container matColumnDef="category">
          <th mat-header-cell *matHeaderCellDef>Category</th>
          <td mat-cell *matCellDef="let element">{{element.category}}</td>
        </ng-container>

        <!-- Duration Column -->
        <ng-container matColumnDef="duration">
          <th mat-header-cell *matHeaderCellDef>Duration (mins)</th>
          <td mat-cell *matCellDef="let element">{{element.duration}}</td>
        </ng-container>

        <!-- Capacity Column -->
        <ng-container matColumnDef="capacity">
          <th mat-header-cell *matHeaderCellDef>Capacity</th>
          <td mat-cell *matCellDef="let element">{{element.capacity}}</td>
        </ng-container>

        <!-- Actions Column -->
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef>Actions</th>
          <td mat-cell *matCellDef="let element">
            <button mat-icon-button color="primary" (click)="editClass(element)">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="warn" (click)="deleteClass(element.id)">
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>
  `,
  styles: [`
    .container {
      margin: 20px;
      padding: 20px;
    }
    table {
      width: 100%;
    }
  `]
})
export class ClassScheduleComponent implements OnInit {
  classes: any[] = [];
  displayedColumns: string[] = ['name', 'trainer', 'category', 'duration', 'capacity', 'actions'];

  constructor(private classService: ClassService) {}

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses() {
    this.classService.getClasses().subscribe(data => {
      this.classes = data;
    });
  }

  editClass(classData: any) {
    // Navigate to edit form (modal or separate page)
  }

  deleteClass(classId: string) {
    this.classService.deleteClass(classId).subscribe(() => {
      this.loadClasses();
    });
  }
}