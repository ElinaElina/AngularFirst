import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

//after import create decarator
//information about class need selector
@Component({
    //using dash after app is because CLI form is this
selector: 'app-user',
//at the moment not using saparate template put it here
// template: '<h2>John Doe</h2>'
// create saparate template file html
templateUrl: './user.component.html',
styleUrls: ['./user.component.css']
})

//create class, to get acess from outside need put export
export class UserComponent implements OnInit {
//string interpolation put properties inside html
//Properties

// firstName = 'John';
// lastName = 'Doe';
// age = 30;
// address = {
// street: '50 main st',
// city: 'Riga',
// state: 'MA'

// firstName: string;
// lastName: string;
// age: number;
// address;
// //here we say that can be anything number , string, boolean etc
// foo: any;
// hasKids: boolean;
// numberArray: number[];
// stringArray: string[];

// Now use Objects

user: User;



// in constructor things runs first, means all methods printout first after what is before constructor
//Methods
constructor() {
    // console.log('Hello user..');
    //  created method = sayHello and using keyword this. can accses to method
    // this.sayHello();

    // this.firstName = 'John';
    // this.lastName = 'Doe';
    // this.age = 30;
    // this.address = {
    //    street: 'bb',
    //    city: 'boston',
    //    state: 'MM'
    // }

    // this.foo = true;
    // this.hasKids = true;
    // this.numberArray =[ 1,2,3];
    // this.stringArray = ['Hi', 'friend'];

// NOw will use Objects, and this is actual data

//actual inicilazer use is best practise, not leave it in concructor
}
ngOnInit(){
    this.user = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jonh@gmail.com'
        // age: 30,
        // address: {
        //     street: 'Main st',
        //     city: 'Riga',
        //     state: 'MA'
        // }
    }
}
}
// to call firstNAme use keyword this, $ is from JS
// sayHello() {
//     console.log(`Hello ${this.firstName}`);
// }
// hasBirthday() {
//     // shoter fromm this.age = this.age +1;
//     this.age +=1;
// }
// showAge() {
//    return this.age;

