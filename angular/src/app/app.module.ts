import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagSegComponent } from './modulos/pag-seg/pag-seg.component';

@NgModule({
  declarations: [
    AppComponent,
    PagSegComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


