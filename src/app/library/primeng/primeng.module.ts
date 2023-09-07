import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [],
  exports:[ButtonModule, InputTextModule, CheckboxModule, RadioButtonModule],
  imports: [
    CommonModule
  ]
})
export class PrimengModule { }
