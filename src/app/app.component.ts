// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,CommonModule,FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {

//   title = 'new-app';
//   isVisible=true;
//   isActive=false;
//   items=["cars","mobile","bikes"];
//   role="guest";
// admin: any;
// guest: any;
//   onToggle(){
//     this.isVisible =!this.isVisible
//   }
// }



//home work//

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'new-app';
  name:string='';
  subject:string='';
  testScore1:string='';
  testScore2:string='';
  isClicked=true;

  toggleSubmit() {
  if (this.name && this.subject && this.testScore1 && this.testScore2) {
    this.isClicked = !this.isClicked;
  } else {
    alert('Please fill all the fields');
  }
}

}


// 









// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,CommonModule,FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {

//   title = 'new-app';
//   count:number=0;
//   onDec(){
//     this.count--
//   }
//   onInc(){
//     this.count++
//   }
//   onReset(){
//     this.count=0
//   }
// }
