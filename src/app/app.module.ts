import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { RouterModule } from '@angular/router';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    EmployeeFormComponent,
    AnimalFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'itemList', component: ItemListComponent},
      {path: "employeeForm", component: EmployeeFormComponent},
      {path: "animalForm", component: AnimalFormComponent}
    ]),
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
