import { Component, OnInit, ViewChild, Inject, ViewEncapsulation } from "@angular/core";
import { StudentService } from '../services/student.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: "student-dialog",
  templateUrl: "./student-dialog.component.html",
  styleUrls: ["./student-dialog.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class StudentDialogComponent implements OnInit {

  studentDetail: any;
  studentDetailForm: FormGroup;
  firstName: string;
  lastName: string;
  email: string;
  avgGpa: number;
  //i know this is bad, but fix this later
  grades: any[] = new Array();
  displayedColumns: string[] = ["courseName", "grade"];
  dataSource: any[];
  constructor(
    private studentService: StudentService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudentsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.studentDetail = data;
    this.firstName = data.first;
    this.lastName = data.last;
    this.email = data.email;
    this.studentService.getCourses()
      .then((courses: any) => {
        data.studentClasses.map((elem) => {
          //filling the course name with corresponding id
          let courseObj = {
            courseName: courses[elem.id],
            grade: elem.grade
          }
          this.grades.push(courseObj);
        });
        this.dataSource = this.grades;
        let temp = 0;
        this.grades.map((elem) => {
          temp += parseFloat(elem.grade);
        });
        this.avgGpa = temp / this.grades.length;

      })
  }

  ngOnInit() {
    //calc avg GPA

    this.studentDetailForm = this.fb.group({
      firstName: this.firstName || '',
      lastName: this.lastName || '',
      email: this.email || '',
      avgGpa: this.avgGpa || '',
      dataSource: this.grades
    });
    this.studentDetailForm.disable();

  }
  getTotalCost() {
    let avg = this.grades
      .map(t => t.grade)
      .reduce((acc, value) => acc + value, 0) / this.grades.length;
    return avg.toFixed(2);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
