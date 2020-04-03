import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent {
  userName = "DefaultUserName";
  state = '';
  onInput(ev){
    // console.log(ev.target.value);
    this.userName=ev.target.value
    
  }

  onClick(ev){
    // console.log("event binding");
    if(this.userName!=""){
      this.userName = "";
      this.state="disabled"    }
  }

  checkUserName(en){
    this.userName ? this.state = '' : this.state="disabled"
  }

  constructor() { }


}
