import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoService } from '../../../services/todo.service';
import { StatusPipe } from '../../../pipes/status.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [StatusPipe, NgIf],
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})

export class TodoDetailComponent implements OnInit {
  todo: Todo | null = null;
  error: string | null = null;

  constructor(private route: ActivatedRoute,
    private todoService: TodoService) {}

    ngOnInit(): void {
      const todoId = Number(this.route.snapshot.paramMap.get('id')); // Получаем ID из URL
  
      this.todoService.getTodoById(todoId).subscribe({
        next: (data) => {
          this.todo = data;
        },
        error: (err) => {
          this.error = 'Ошибка загрузки данных';
        }
      });
    }
}
