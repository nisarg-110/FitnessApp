import { Component } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent {
  classData = {
    name: '',
    trainer: '',
    category: '',
    duration: 0,
    capacity: 0
  };

  constructor(private classService: ClassService) {}

  onSubmit() {
    this.classService.addClass(this.classData).subscribe(() => {
      alert('Class added successfully!');
    });
  }
}
