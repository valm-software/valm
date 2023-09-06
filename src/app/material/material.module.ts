import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  exports:[MatIconModule,MatButtonModule],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
