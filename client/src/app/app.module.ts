import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CoursesListComponent } from "./course/component/courses-list/courses-list.component";
import { CreateCourseComponent } from "./course/component/create-course/create-course.component";
import { CourseModule } from "./course/course.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { CourseResolver } from './course/course.resolver';

const routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
    resolve: {
      courses: CourseResolver
    }
  },
  { path: 'create-course', component: CreateCourseComponent },
  { path: '**', redirectTo: 'courses' }
];

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot( routes ),
    EffectsModule.forRoot( [] ),
    StoreModule.forRoot( reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    } ),
    !environment.production ? StoreDevtoolsModule.instrument( { maxAge: 25 } ) : []
  ],
  providers: [ CourseResolver ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
