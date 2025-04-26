import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MamageEmpComponent } from './page/mamage-emp/mamage-emp.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,MamageEmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emp-app';
}
