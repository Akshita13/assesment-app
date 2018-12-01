import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { StudentService } from './student.service';
import {ReactiveFormsModule} from '@angular/forms';
import { TableComponent } from './view/table/table.component';
import { StudentRouting } from './student-routing.module';


@NgModule({
  imports: [
    CommonModule,
    StudentRouting,
    ReactiveFormsModule
  ],
  providers:[StudentService],
  declarations: [AddComponent, ViewComponent, EditComponent, TableComponent],
  exports:[ViewComponent]
})
export class StudentModule { }
