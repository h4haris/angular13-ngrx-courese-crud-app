import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from "./services/course.service";
import { FormsModule } from "@angular/forms";
import { courseReducer } from "./store/course.reducers";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CourseEffects } from "./store/course.effects";
import { CreateCourseComponent } from "./component/create-course/create-course.component";
import { CoursesListComponent } from "./component/courses-list/courses-list.component";

@NgModule( {
  declarations: [
    CoursesListComponent,
    CreateCourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature( 'courses', courseReducer ),
    EffectsModule.forFeature( [ CourseEffects ] )
  ],
  providers: [ CourseService ],
  bootstrap: [],
  // exports: [ CoursesListComponent, CreateCourseComponent ]
} )
export class CourseModule { }
