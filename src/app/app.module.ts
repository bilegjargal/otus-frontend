import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StudentsListComponent } from "./students-list/students-list.component";

import { Router, Routes, RouterModule } from "@angular/router";

//Material imports
import { MatTableModule } from "@angular/material/table";

const appRoutes: Routes = [
  { path: "students", component: StudentsListComponent }
];

@NgModule({
  declarations: [AppComponent, StudentsListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
