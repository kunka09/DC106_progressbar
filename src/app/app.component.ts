import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progressbar';

  label = 'Loading';
  max = 100;
  value = 50;

  onChange(progressValue:any) {
    console.log("Progress is " + progressValue +"%")
  }
  onClick(progressValue:any) {
    console.log("Progress is " + progressValue +"%")
  }
}
