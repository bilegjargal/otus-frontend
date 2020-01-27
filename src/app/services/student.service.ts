import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Student } from "../model/student.model";
@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor(private _httpClient: HttpClient) {}

  getStudents() {
    const requestUrl = "http:localhost:8080/students";
    return this._httpClient.get<Student>(requestUrl);
  }
}
