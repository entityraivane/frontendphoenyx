import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { SearchComponent } from './search/search.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { ChathelpComponent } from './chathelp/chathelp.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    SidebarComponent,
    NavbartopComponent,
    SearchComponent,
    OffcanvasComponent,
    ChathelpComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    SidebarComponent,
    NavbartopComponent,
    SearchComponent,
    OffcanvasComponent,
    ChathelpComponent
  ]
})
export class SharedModule { }
