import { Component } from '@angular/core';
import { PyPService } from './api/services';
import { PyP } from './api/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  public pyp: PyP;
  public constructor(private api: PyPService){ this.pyp = {};
  
    /*this.api.apiPyPGet$Json({Id: "1"}).subscribe(res =>{
      this.pyp = res;
    })*/
  }
  public getInputValue(inputValue:string){
    //this.pyp.id = 1;
    if(inputValue == ""){inputValue = "1"}
    console.log(inputValue)
    this.api.apiPyPGet$Json({Id: inputValue}).subscribe(res =>{
      this.pyp = res;
    })
  }

  
  
}
