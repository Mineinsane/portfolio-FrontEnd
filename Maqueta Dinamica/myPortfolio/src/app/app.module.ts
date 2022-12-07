import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { LoginComponent } from './Components/login/login.component';
import { IndexComponent } from './Components/index/index.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { BannerComponent } from './Components/banner/banner.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { AgregarFormacionComponent } from './Components/Modales/agregar-formacion/agregar-formacion.component';
import { AgregarProyectoComponent } from './Components/Modales/agregar-proyecto/agregar-proyecto.component';
import { BannerModalComponent } from './Components/Modales/banner-modal/banner-modal.component';
import { LoginModalComponent } from './Components/Modales/login-modal/login-modal.component';
import { ProfileModalComponent } from './Components/Modales/profile-modal/profile-modal.component';
import { SobreMiModalComponent } from './Components/Modales/sobre-mi-modal/sobre-mi-modal.component';
import { PrimerTarjetaXpModalComponent } from './Components/Modales/TarjetasXp/primer-tarjeta-xp-modal/primer-tarjeta-xp-modal.component';
import { SegundaTarjetaXpModalComponent } from './Components/Modales/TarjetasXp/segunda-tarjeta-xp-modal/segunda-tarjeta-xp-modal.component';
import { TercerTarjetaXpModalComponent } from './Components/Modales/TarjetasXp/tercer-tarjeta-xp-modal/tercer-tarjeta-xp-modal.component';
import { Skill1Component } from './Components/Modales/Skills/skill1/skill1.component';
import { Skill2Component } from './Components/Modales/Skills/skill2/skill2.component';
import { Skill3Component } from './Components/Modales/Skills/skill3/skill3.component';
import { Skill4Component } from './Components/Modales/Skills/skill4/skill4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoutComponent,
    LoginComponent,
    IndexComponent,
    ExperienciaComponent,
    EducacionComponent,
    BannerComponent,
    ProyectosComponent,
    SkillsComponent,
    ContactoComponent,
    AgregarFormacionComponent,
    AgregarProyectoComponent,
    BannerModalComponent,
    LoginModalComponent,
    ProfileModalComponent,
    SobreMiModalComponent,
    PrimerTarjetaXpModalComponent,
    SegundaTarjetaXpModalComponent,
    TercerTarjetaXpModalComponent,
    Skill1Component,
    Skill2Component,
    Skill3Component,
    Skill4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
