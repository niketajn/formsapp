import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {
  btnClicked:boolean=false;
  dropdownList:string[] = ['Short Text','Multiple Choice'];
  dropdownValue:string='';
  constructor() { }

  ngOnInit(): void {
  }

  value:string = '';

  onKey(event: any) { // without type info
    this.value = event.target.value;
  }
  displayDropdown(){
    this.btnClicked=true;
  }
  changeDropdown(e:any){
    this.dropdownValue = e.target.value;
  }
}
