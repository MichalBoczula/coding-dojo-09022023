import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTableComponent } from './main-table.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainTableComponent,
    SearchPanelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    MainTableComponent
  ]
})
export class MainTableModule { }
