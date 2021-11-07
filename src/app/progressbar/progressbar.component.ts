import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  normalPB: boolean = false;    
 
  showProgressBar(value: number){      
    this.normalPB=false;    
   
    
    value ==1 ? this.normalPB=true : value ==2
      
  }    

  @Input() value: any;
  @Input() label: any;
  @Input() max: any;
  @Output() progressClick = new EventEmitter();

  onClick() {
    this.progressClick.emit(this.value);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
