import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaitModule } from '@plait/core'
import { MindmapModule } from '@plait/mindmap'
import { RichtextModule } from '@plait/richtext'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicBoardComponent } from './board-basic/board-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichtextModule,
    MindmapModule,
    PlaitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
