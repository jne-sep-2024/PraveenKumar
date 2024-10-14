import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UserManagementComponent } from './features/user-management/user-management.component';
import { MainContentModule } from './features/main-content/main-content.module';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationComponent } from './features/user-registration/user-registration.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './features/dashboard/edit-user/edit-user.component';
import { ConfirmDeleteComponent } from './features/confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserManagementComponent,
    UserRegistrationComponent,
    EditUserComponent,
    ConfirmDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,  // Include CoreModule
    MainContentModule,  // Include MainContentModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
