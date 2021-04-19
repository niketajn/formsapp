import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {

  @Input() value:string='';
  @Input() dropdownValue:string='';
  enableText:boolean=false;
  multipleChoice:boolean=false;
  @Input() addMultiOption:string = '';
  multipleChoiceOptArray:string[]=['option1'];
  constructor() { }

  ngOnInit(): void {
  }
  child(){
    //alert("child component");
    console.log(this.addMultiOption);
    this.multipleChoiceOptArray.push(this.addMultiOption);
    console.log(this.multipleChoiceOptArray);
  }

  ngOnChanges() {
    if (this.dropdownValue) {
        switch(this.dropdownValue) {
            case 'Short Text':
              this.multipleChoice=false;
              this.enableText=true;
              break;
            
              case 'Multiple Choice':
                this.enableText=false;
                this.multipleChoice=true;
                break;
        }
      }
    }
  

}
