import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  framework = ['angular', 'react', 'vue'];

  myData(){
    return "This is Service function calling...";
  }
}