import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignTestComponent } from './assigntest/assign-test/assign-test.component';

const routes: Routes = [
  {
    path:'' , loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'dashboard', component: DashboardComponent // Add route for DashboardComponent 
  },
  { path: 'Assigntest', component: AssignTestComponent // Add route for DashboardComponent 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
