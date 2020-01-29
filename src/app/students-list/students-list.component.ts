import { Component, OnInit, ViewChild } from "@angular/core";
import { Student } from "../model/student.model";
import { StudentService } from '../services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: "students-list",
  templateUrl: "./students-list.component.html",
  styleUrls: ["./students-list.component.css"]
})
export class StudentsListComponent implements OnInit {

  displayedColumns: string[] = ["firstName", "lastName", "email"];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private studentService: StudentService, private dialog: MatDialog) {
    this.studentService.getStudents().then((data:any) => {
      this.dataSource.data = data
    });
  }

  ngOnInit(){
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  onClick(id){
    this.studentService.getStudentDetail(id)
      .then((data) => {

        console.log(data);
      })
      .catch(e => {
        console.log(e)
      });
  }

  onEnter($event){
    let searchValue = $event.target.value;
    //if search string is empty, show all students

    if(!searchValue){
      this.studentService.getStudents().then((data:any) => {
        this.dataSource.data = data
      });
    }else{
      this.studentService.findStudent(searchValue)
      .then((data:any) => {
        this.dataSource.data = data;
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  openDetailDialog(data): void{
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '50%',
      data: data
    });
  }

}
