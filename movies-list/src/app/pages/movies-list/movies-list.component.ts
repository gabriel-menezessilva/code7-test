import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.service.get().subscribe(data => {
      this.movies = data;
    });
  }

}
