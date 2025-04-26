import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MamageEmpComponent } from './page/mamage-emp/mamage-emp.component';
import { ViewAllEmployeeeComponent } from './page/view-all-employeee/view-all-employeee.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,MamageEmpComponent,ViewAllEmployeeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emp-app';
}
