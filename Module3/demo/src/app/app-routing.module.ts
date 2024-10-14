import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UserManagementComponent } from './features/user-management/user-management.component';
import { UserRegistrationComponent } from './features/user-registration/user-registration.component';
import { EditUserComponent } from './features/dashboard/edit-user/edit-user.component';
import { ConfirmDeleteComponent } from './features/confirm-delete/confirm-delete.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'user-registration', component: UserRegistrationComponent }, // <-- Add route for User Registration
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'confirm-delete/:id', component: ConfirmDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
