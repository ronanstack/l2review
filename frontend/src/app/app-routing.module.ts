import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { PromptsComponent } from './prompts/prompts.component';

// Define your routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Home
  { path: 'chat', component: ChatWindowComponent }, // Open-ended chat
  { path: 'prompts', component: PromptsComponent }, // Prompts selection
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
