import { Component } from '@angular/core';
import { RegisterFormComponent } from "../../register-form/register-form.component";

@Component({
  selector: 'app-home',
  imports: [RegisterFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
