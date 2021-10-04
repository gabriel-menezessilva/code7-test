import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  get(): Observable<Movie[]> {
    return this.http.get('/assets/movies.JSON') as Observable<Movie[]>;
  }
}
