import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neno',
  templateUrl: './neno.component.html',
  styleUrls: ['./neno.component.css']
})
export class NenoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private beforeUnloadFunc(event){
      // Chrome requires returnValue to be set.    
    event.returnValue = '';
  }

  helloWorld(){

    console.log('fffff');

    console.log(window);

    

    window.addEventListener("beforeunload", this.beforeUnloadFunc);

    console.log(window);

    

    console.log(window);

    setTimeout(()=>{
      console.log("neno");
      window.removeEventListener("beforeunload", this.beforeUnloadFunc);
    }, 5000);
    
  }
}
