import { Component } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import Typed from 'typed.js';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    response: HighlightResult;

    code = `    function myFunction() {
        document.getElementById("demo1").innerHTML = "Hello there!";
        document.getElementById("demo2").innerHTML = "How are you?";
    }`
    typed = {};

    onHighlight(e) {
        this.response = {
            language: e.language,
            r: e.r,
            second_best: '{...}',
            top: '{...}',
            value: '{...}'
        }
      }
    
      ngOnInit() {
        var typed = new Typed('.typed', {
            strings: ['jsThis', 'jsThis', 'jsThis', 'made by Gustavo'],
            typeSpeed: 100,
            backSpeed: 30,
            backDelay: 4000,
            smartBackspace: false,
            loop: true,
            autoInsertCss: true
          });
    }
}
