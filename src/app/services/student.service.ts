import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor(private _httpClient: HttpClient) {}

  getStudents() {
    const requestUrl = "http://localhost:8080/students";
    return this._httpClient.get(requestUrl).toPromise();
  }

  getStudentDetail(id: number){
    const requestUrl = `${"http://localhost:8080/students/" + id }`;
    return this._httpClient.get(requestUrl).toPromise();
  }

  findStudent(searchParam: string){
    const requestUrl = `${"http://localhost:8080/students/search/" + searchParam}`;
    return this._httpClient.get(requestUrl).toPromise();
  }
}
