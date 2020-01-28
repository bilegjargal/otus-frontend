import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { StudentService } from '../services/student.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: "student-dialog",
  templateUrl: "./student-dialog.component.html",
  styleUrls: ["./student-dialog.component.css"]
})
export class StudentDialogComponent implements OnInit {

  studentDetail: any;
  studentDetailForm: FormGroup;
  firstName: string;
  lastName: string;
  email: string;
  avgGpa: number;
  grades: any;
  displayedColumns: string[] = ["courseName", "grade"];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudentsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.studentDetail = data;
    this.firstName = data.first;
    this.lastName = data.last;
    this.email = data.email;
    this.grades = data.studentClasses;
  }

  ngOnInit() {
    this.studentDetailForm = this.fb.group({
      firstName: this.firstName || '',
      lastName: this.lastName || '',
      email: this.email || '',
      avgGpa: this.avgGpa || '',
      dataSource: this.grades
    });

  }

  onClose(): void {
    this.dialogRef.close();
  }
  //TODO: fetch courses table and fill studentClasses table and calculate avgGPA
  //TODO: add styling for dialog
}
