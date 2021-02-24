import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
color: string;
  

setColor(color: string) {
  this.color = color;
}

onClick() {
  console.log('click');
}

}
