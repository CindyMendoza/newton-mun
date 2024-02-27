import { NgModule, CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CommitteesComponent } from './components/committees/committees.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContadorDirective } from './directives/contador.directive';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ModalComponent } from './components/gallery/modal/modal.component';
import { ApplyComponent } from './components/apply/apply.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    ScheduleComponent,
    CommitteesComponent,
    GalleryComponent,
    FacilitiesComponent,
    ContactComponent,
    ContadorDirective,
    AboutusComponent,
    ModalComponent,
    ApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    CommonModule,
    SlickCarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class AppModule {}
