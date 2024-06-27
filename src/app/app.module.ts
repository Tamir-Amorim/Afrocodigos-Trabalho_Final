import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutosModule } from './produtos/produtos.module';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
    imports: [ 
      BrowserModule,      
      ProdutosModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
    ],
    exports: [],
    declarations: [ 
      AppComponent,
      
      
    
    ],
    providers: [
    
      DataService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
