import { Component } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import Typed from 'typed.js';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {

    codes = [
`var test = {
    prop: 42,
    func: function() {
        return this.prop;
    },
};
      
console.log(test.func());
// expected output: 42`,

`// In web browsers, the window object is also the global object:
console.log(this === window); // true
    
a = 37;
console.log(window.a); // 37
    
this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"`,
    
`function f1() {
    return this;
}
      
// In a browser:
f1() === window; // true 
      
// In Node:
f1() === global; // true`,
    
`function f2() {
    'use strict'; // see strict mode
    return this;
}
      
f2() === undefined; // true`];
    typed = {};
    
      ngOnInit() {
        var typed = new Typed('.typed', {
            strings: ['jsThis', 'the different values', 'that "this" can have', 'in JavaScript', 'made by Gustavo', 'jsThis'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            smartBackspace: false,
            loop: false,
            autoInsertCss: true
          });
    }
}
