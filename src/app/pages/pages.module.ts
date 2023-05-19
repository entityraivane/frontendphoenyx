import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ChatComponent,
    NotificacionesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    SharedModule,
    
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    ChatComponent,
    NotificacionesComponent
  ]
})
export class PagesModule { }
