import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { Question,DisplayComponentComponent } from '../display-component/display-component.component';
 
@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit,AfterViewInit {
  btnClicked:boolean=false;
  dropdownList:string[] = ['shorttext','mc','longtext'];
  dropdownValue:string='';
  isMultipleChoiceOption:boolean=false;
  mcTextInputArray:string[]=['choice1'];

  @ViewChild(DisplayComponentComponent) dc : DisplayComponentComponent;
  @ViewChildren('textChoice') textChoices : QueryList<ElementRef>

  constructor() { 
  }

  ngAfterViewInit() {
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
    if(e.target.value == "mc"){
      this.isMultipleChoiceOption = true;
    }else{
      this.isMultipleChoiceOption = false;
    }
  }

  /* onEnter(addMultiOption: string) { 
    this.addMultiOption = addMultiOption;
    //console.log(this.addMultiOption);
    let _this = this;
    setTimeout(function(){
   //   _this.dc.child();  
    }, 50);
    
    //this.displayComponent.ngOnInit();
   } */
   addQuestion(){
    var ques= <Question>{};
    ques.questionText = this.value;
    ques.type = this.dropdownValue;
    let choices: string[]=[];
     this.textChoices.toArray().map((element)=>{
        choices.push(element.nativeElement.value)
     })
     ques.choices = choices;
    this.dc.addQues(ques);
   }

   addTextInput(){
     let choiceNumber = this.mcTextInputArray.length+1;
     this.mcTextInputArray.push("choice"+choiceNumber);
   }
  }
