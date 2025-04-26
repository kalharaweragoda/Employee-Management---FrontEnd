import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-mamage-emp',
  standalone:true,
  imports: [FormsModule,HttpClientModule,CommonModule,NavComponent],
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
        Swal.fire({
          title: "Employee add!",
          text: "You clicked the button!",
          icon: "success"
        });
        
      }
    )
  }


}
