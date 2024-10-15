import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content.component';



@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainContentComponent]
})
export class MainContentModule { }
