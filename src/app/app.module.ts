import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlateModule } from 'slate-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SlateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
