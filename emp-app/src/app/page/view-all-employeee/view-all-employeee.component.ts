import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-employeee',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-all-employeee.component.html',
  styleUrl: './view-all-employeee.component.css'
})
export class ViewAllEmployeeeComponent {

  public employeeList: any;

  constructor(private http: HttpClient) {
    this.loadEmployeeTable();
  }

  loadEmployeeTable() {
    this.http.get("http://localhost:8090/emp-controller/get-all").subscribe(res => {
      this.employeeList = res;
      console.log(res);
    })
  }
}
