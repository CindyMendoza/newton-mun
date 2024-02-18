import { NgModule, CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

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

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
    ScheduleComponent,
    CommitteesComponent,
    GalleryComponent,
    FacilitiesComponent,
    ContactComponent,
    ContadorDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class AppModule {}
