import { Component, OnInit } from "@angular/core";
import { Student } from "../model/student.model";

@Component({
  selector: "students-list",
  templateUrl: "./students-list.component.html",
  styleUrls: ["./students-list.component.css"]
})
export class StudentsListComponent implements OnInit {
  displayedColumns: string[] = ["firstName", "lastName", "avgGpa"];
  data: Student[] = [];
  constructor() {}

  ngOnInit() {}
}
