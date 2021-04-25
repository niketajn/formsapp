import { Component, OnInit } from '@angular/core';
import questionList from '../formSample1.json';


interface Question{
  type:string;
  questionText:string;
  choices:string[];
}

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})



export class DisplayComponentComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    
  }
  questions: Question[] = questionList;  
}
