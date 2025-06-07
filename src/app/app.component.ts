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
//   fruits = ['Apple', 'Banana', 'Mango'];
// }



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
//   name:string='';
//   subject:string='';
//   testScore1:number=0;
//   testScore2:number=0;
//   isClicked=true;

//   toggleSubmit() {
//   if (this.name && this.subject && this.testScore1 && this.testScore2) {
//     this.isClicked = !this.isClicked;
//   } else {
//     alert('Please fill all the fields');
//   }
// }

// }


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

////////////STUDENT DASHBOARD///////////////////////

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
//   username:string='';
//   usergrade:string='';
//   profiles:{name:string,grade:string}[]=[];
//   isClicked=true;
 
//   addProfile(){
//     if (this.username&&this.usergrade){
//       const profile =({
//         name:this.username,
//         grade:this.usergrade.toUpperCase()
//       });
//       this.profiles.push(profile)
//       this.username='';
//       this.usergrade='';
//     }
//   }
// }



import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';
  btnclick=true;
  taskname:string="";
  selecttype:string="";
  datetype:string="";
  statustype:string="";
  check1:string='';
  check2:string='';
  
  tasks:{
status: any;task:string,priority:string,date:string
}[]=[];
   btnclickk() {

    if (this.taskname && this.selecttype && this.datetype){
      const currentDate = new Date ()
      const selectedDate= new Date (this.datetype)

      if (currentDate>selectedDate){
        
      }
      const i= ({ 
        task:this.taskname,
        priority:this.selecttype,
        date:this.datetype,
        status: 'Not Completed',
        // status:this.statustype
      });
      this.tasks.push(i);
    }
    
  }
}