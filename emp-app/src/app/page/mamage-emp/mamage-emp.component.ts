import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mamage-emp',
  standalone:true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './mamage-emp.component.html',
  styleUrl: './mamage-emp.component.css'
})
export class MamageEmpComponent {

  public employeeObj ={
    firstName:"",
    lastName:"",
    email:"",
    departmentId:"",
    roleId:""
  }

  constructor(private http:HttpClient){}
  
  addEmployee(){
    this.http.post("http://localhost:8090/emp-controller/add-employee",this.employeeObj).subscribe(
      (data) =>{
        console.log(data);
      }
    )
  }


}
