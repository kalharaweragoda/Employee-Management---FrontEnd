import { Routes } from '@angular/router';
import { MamageEmpComponent } from './page/mamage-emp/mamage-emp.component';
import { ViewAllEmployeeeComponent } from './page/view-all-employeee/view-all-employeee.component';
import { UserSigninComponent } from './page/user-signin/user-signin.component';

export const routes: Routes = [
    {
        path:"add-employee",
        component:MamageEmpComponent
    },
    {
        path:"view-all-employee",
        component:ViewAllEmployeeeComponent
    },
    {
        path:"user-signIn",
        component:UserSigninComponent
    }
    
];
