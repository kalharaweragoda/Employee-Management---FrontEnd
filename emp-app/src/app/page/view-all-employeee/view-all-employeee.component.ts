import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from "../../common/nav/nav.component";

@Component({
  selector: 'app-view-all-employeee',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, NavComponent,NavComponent],
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
  deleteEmployee(employee:any){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.http.delete(`http://localhost:8090/emp-controller/delete-emp/${employee.id}`,{responseType:'text'}).subscribe(res=>{
          this.loadEmployeeTable()
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          console.log(res);
        })
        console.log(employee);

        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }

  public seleccteedEmployee : any ={
    "id": null,
    "firstName": null,
    "lastName": null,
    "email": null,
    "departmentId": null,
    "roleId": null
  };
   

  updateEmployee(employee: any){
     
    if(employee!=null){
      this.seleccteedEmployee = employee;
    }

    console.log(employee);
  }

  saveUpdateEmployee(){
    this.http.put("http://localhost:8090/emp-controller/update-employee",this.seleccteedEmployee).subscribe(res=>{
      console.log("update!");
    })
  }

}
