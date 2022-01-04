import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = 'api/courses';
  constructor(private httpClient: HttpClient) { } //isso eh a injecao de dependencia por modo ajax que eh de forma asincrona

  list()//: Course[] se eu deixar com essa tipagem vou ter erro de compilação pois esse metodo eh um observable
  {
    return this.httpClient.get<Course[]>(this.API)//eu usei o generics <> depois do get justo para tipar e dizer que o observable retorna um array de courses
      .pipe(
        first(),
        delay(2000),//isso eh removido antes de ir para producao serve so para testar o carregamento da pagina e animacoes etc
        tap(courses => console.log(courses))
      );
  }
}
