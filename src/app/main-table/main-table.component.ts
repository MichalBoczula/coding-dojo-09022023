import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import DataRow from './DataRow';
import { MainTableService } from './main-table.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  intialData: DataRow[] = [];
  displayData: DataRow[] = [];
  errorMessage: String = '';
  caseNumber: String = '';
  findBy: String = '';

  constructor(private mainTableService: MainTableService) { }

  ngOnInit(): void {
    this.mainTableService.getData().subscribe({
      next: data => {
        this.intialData = data,
          this.displayData = this.intialData
      },
      error: err => this.errorMessage = err
    })
  }

  onSubmit(form: NgForm): void {
   console.log(this.caseNumber);
    if(this.caseNumber === '')
    {
      this.displayData = this.intialData;
    }
    else {
      if (this.findBy === 'Employee') {
        this.displayData = this.displayData.filter(x => x.executionUser === this.caseNumber);
      }
      else if (this.findBy === 'FullCaseNumber') {
        this.displayData = this.displayData.filter(x => x.fullCaseNumber === this.caseNumber);
      }
      else if (this.findBy === 'CollectionId') {
        this.displayData = this.displayData.filter(x => x.collectionId === this.caseNumber);
      }
      else if (this.findBy === 'Source') {
        this.displayData = this.displayData.filter(x => x.source === this.caseNumber);
      }
      else if (this.findBy === 'Status') {
        this.displayData = this.displayData.filter(x => x.status === this.caseNumber);
      }
    }
  }
}
