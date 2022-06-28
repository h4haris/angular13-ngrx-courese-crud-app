import { Course } from './../model/course.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class CourseService {
    constructor ( private http: HttpClient ) { }

    getAllCourses (): Observable<Course[]> {
        return this.http.get<Course[]>( '/api/courses' );
    }

    createCourse ( course: Course ): Observable<Course> {
        return this.http.post<Course>( '/api/courses', course );
    }

    deleteCourse ( courseId: string ): Observable<any> {
        return this.http.delete( '/api/courses/' + courseId );
    }

    updateCourse ( courseId: string | number, changes: Partial<Course> ): Observable<any> {
        return this.http.put( '/api/courses/' + courseId, changes );
    }
}