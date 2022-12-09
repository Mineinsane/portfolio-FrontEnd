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
import { EditSobreMiComponent } from './Components/Botones/edit-sobre-mi/edit-sobre-mi.component';
import { EditBannerComponent } from './Components/Botones/edit-banner/edit-banner.component';
import { EditProfileComponent } from './Components/Botones/edit-profile/edit-profile.component';
import { BotonesBannerComponent } from './Components/botones-banner/botones-banner.component';
import { Tarjeta1Component } from './Components/Experiencia/tarjeta1/tarjeta1.component';
import { Tarjeta2Component } from './Components/Experiencia/tarjeta2/tarjeta2.component';
import { Tarjeta3Component } from './Components/Experiencia/tarjeta3/tarjeta3.component';
import { BotonesExperienciaComponent } from './Components/Experiencia/botones-experiencia/botones-experiencia.component';
import { EditarTarjetaXp1Component } from './Components/Botones/editar-tarjeta-xp1/editar-tarjeta-xp1.component';
import { EditarTarjetaXp2Component } from './Components/Botones/editar-tarjeta-xp2/editar-tarjeta-xp2.component';
import { EditarTarjetaXp3Component } from './Components/Botones/editar-tarjeta-xp3/editar-tarjeta-xp3.component';

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
    Skill4Component,
    EditSobreMiComponent,
    EditBannerComponent,
    EditProfileComponent,
    BotonesBannerComponent,
    Tarjeta1Component,
    Tarjeta2Component,
    Tarjeta3Component,
    BotonesExperienciaComponent,
    EditarTarjetaXp1Component,
    EditarTarjetaXp2Component,
    EditarTarjetaXp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
