import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ScrollCollapseModule } from '@thisissoon/angular-scroll-collapse';
import { HighlightModule } from 'ngx-highlightjs';
import javascript from 'highlight.js/lib/languages/typescript';

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
    return [
      {name: 'javascript', func: javascript}
    ];
  }
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InViewportModule, 
        ScrollCollapseModule,
        HighlightModule.forRoot({
            languages: hljsLanguages
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
