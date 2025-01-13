import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.css']
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
