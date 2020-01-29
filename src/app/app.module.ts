import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StudentsListComponent } from "./students-list/students-list.component";
import { StudentDialogComponent } from "./student-dialog/student-dialog.component";

import { Router, Routes, RouterModule } from "@angular/router";

//Material imports
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule, MatInputModule, MAT_DIALOG_DATA } from "@angular/material";

const appRoutes: Routes = [
  { path: "", redirectTo: 'students', pathMatch: 'full' },
  { path: "students", component: StudentsListComponent },
  { path: "", component: StudentDialogComponent}
];

@NgModule({
  declarations: [AppComponent, StudentsListComponent, StudentDialogComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [
    {provide:MAT_DIALOG_DATA,useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
