import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // if binding the data need some values inside the user
  // binding in html with [(ngModule)]
  //template driven forms
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
    // age: null,
    // address: {
    //   street: '',
    //   city: '',
    //   state: ''
    // }

    }
users: User[];
showExtended: boolean = false;
loaded: boolean = false;
enableAdd: boolean = false;
currentClasses = {};
currentStyles = {};
showUserForm: boolean = false;
// this match with html #userForm
@ViewChild('userForm', {static: false}) 
form: any;
data: any;

//This constructor use for dependencies inject services here
  constructor(private dataService: DataService) {}

//Lifecycle method, runs authomataclly
  ngOnInit() {

    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
      //  this dont need anymore after we have observables
      // this.users = this.dataService.getUsers();
      this.dataService.getUsers().subscribe(users => {
        this.users = users;
        
      });
  //  cut all and put in data.service constructor
       this.loaded = true;
    
  
    // this.showExtended = false;

  // this.addUser({
  //   firstName: 'Billy',
  //   lastName: 'Boby',
  
  // });

  // this.setCurrentClasses();
  //   this.setCurentStyles();
  }

  // addUser(user: User)
  // dont need parametres in function, because we have property user: User adn we can get to that with this.user
  // addUser(){
  //   // to get date when joined:
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  // // this.users.push(user);
  // // chaange push to unshift because it the same but get from begining of array
  //   this.users.unshift(this.user);
  
  //   // after register need clear all written things:
  //    this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //     // age: null,
  //     // address: {
  //     //   street: '',
  //     //   city: '',
  //     //   state: ''
  //     // }
  //    }
  //  }
  // fireEvent(e){
  //   // console.log('Button works');

  //   console.log(e);
  //   // this shows on console what we typing in 
  //   console.log(e.type);
  //   // this gives actual value which is type in 
  //   console.log(e.target.value);
  // }
  setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }
  setCurentStyles(){
    this.currentStyles = {
      // 0 for if nothing extended, ":" means else in this syntax
      'padding-top': this.showExtended ? '0' : '400px',
      'font-size': this.setCurrentClasses ? '' : '40px'
    }
  
  }
  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }

// to  work this button, put in brekets parametr and call it
  // onSubmit(e){
  //   // with console when press a button it only flash in console(inspect) 123, but next function gives to stay in console 
  //   // work everytime press sumbit on browser
  //   console.log(123);
  //   e.preventDefault();
  // }
  

  // still for #userForm validation
  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
     console.log('Form is not valid')
    }else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      // this.users.unshift(value);
      this.dataService.addUser(value);

      this.form.reset();
    }

  }
}
