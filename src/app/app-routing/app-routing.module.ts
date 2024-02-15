import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutusComponent } from '../components/aboutus/aboutus.component';
import { ScheduleComponent } from '../components/schedule/schedule.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../guards/auth.guard';
import { CommitteesComponent } from '../components/committees/committees.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { FacilitiesComponent } from '../components/facilities/facilities.component';
import { ContactComponent } from '../components/contact/contact.component';
const routes: Routes = [
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'facilities', component: FacilitiesComponent, canActivate: [AuthGuard] },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  { path: 'committees', component: CommitteesComponent, canActivate: [AuthGuard] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },
  { path: 'aboutus', component: AboutusComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
