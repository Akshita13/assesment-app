import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
//-----------------------------------------------------//
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { StudentService } from './student.service';
import {ListModule} from 'student-package'
import { StudentRouting } from './student-routing.module';



@NgModule({
  imports: [
    CommonModule,
    StudentRouting,
    ReactiveFormsModule,
    ListModule
  ],
  providers:[StudentService],
  declarations: [AddComponent, ViewComponent, EditComponent],
  exports:[ViewComponent]
})
export class StudentModule { }
