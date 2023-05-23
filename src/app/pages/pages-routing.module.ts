import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'chat',component:ChatComponent},
  {path:'notificaciones',component:NotificacionesComponent},
  {path:'perfil',component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
