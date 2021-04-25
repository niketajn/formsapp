import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { Question } from '../display-component/display-component.component';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css'],
  //directives: [DisplayComponentComponent]
})
export class InputComponentComponent implements OnInit,AfterViewInit {
  btnClicked:boolean=false;
  dropdownList:string[] = ['Short Text','Multiple Choice'];
  dropdownValue:string='';
  multipleChoiceOption:boolean=false;

  //@ViewChild(DisplayComponentComponent) dc : DisplayComponentComponent;

  constructor() { 
  }

  ngAfterViewInit() {
    //this.someInput.nativeElement.value = 'Whale!';
    //this.dc.child();
  }

  ngOnInit(): void {
    
  }

  value:string = '';
  addMultiOption:string = '';

  onKey(event: any) { // without type info
    this.value = event.target.value;
  }
  displayDropdown(){
    this.btnClicked=true;
  }
  changeDropdown(e:any){
    this.dropdownValue = e.target.value;
    if(e.target.value == "Multiple Choice"){
      this.multipleChoiceOption = true;
    }else{
      this.multipleChoiceOption = false;
    }
  }

  onEnter(addMultiOption: string) { 
    this.addMultiOption = addMultiOption;
    console.log(this.addMultiOption);
    let _this = this;
    setTimeout(function(){
   //   _this.dc.child();  
    }, 50);
    
    //this.displayComponent.ngOnInit();
   }
   addQuestion(){

   }
}
