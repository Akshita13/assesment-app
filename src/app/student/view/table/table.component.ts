import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() header:any[];
  public table;
// @Input() data:any[];
   private student;

@Input('data')
set data(value: any) {
    this.student = value;
    this.data.forEach(element => {
   
      this.table=Object.keys(element)});
      
  
}

get data()
{
  return this.student;
}
  constructor() { 
   
  }

  ngOnInit() {
    console.log(this.header);
    console.log(this.data);

    
  }

}
