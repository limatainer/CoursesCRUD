import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>// a lista fica vazia mas so para testar vou dar seed na mao para testar o front
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    //this.courses = [];
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list()//isso ficaria sendo iniciado no ngoninit mas devido ao strict do angular devo iniciar aqui
      .pipe(
        catchError(error => {
          //console.log(error);
          this.onError('Erro ao carregar os dados dos cursos');
          return of([])//quando der erro 404 ele vai retornar um array vazio para sair do erro
        })
      );
  }
  onError(errorMsg: string) {

    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {
  }

}
