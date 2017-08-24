import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService:DataService)
  {

  }

  someProperty = "";
  framework = this.dataService.framework;
  ngOnInit() {
    console.log("initial component method call");
    this.someProperty = this.dataService.myData();

  }

  title = 'app';
  myObject = {
    'name' : "Tarun",
    'location': "Delhi" 
  };
  buttonStatus = true; 
  cssStyles = {
    'color': 'red'
  };
  myEvent(event) {
    console.log(event);
    
  }
}
