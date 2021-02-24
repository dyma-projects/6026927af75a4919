import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  @Input() color: string;
  @Output() private changeColor: EventEmitter<string> = new EventEmitter();
  attribut: string = 'Je suis une interpollation {{}}'

  constructor() { }

  ngOnInit(): void {
  }

  colorize(color: string){
    this.changeColor.emit(color);
  
  }

}
