import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessageListComponent } from './message-list/message-list.component';
import { HomeComponent } from './home/home.component';
import { PromptsComponent } from './prompts/prompts.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatInputComponent,
    ChatWindowComponent,
    MessageListComponent,
    HomeComponent,
    PromptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
