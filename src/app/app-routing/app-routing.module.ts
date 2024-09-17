import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutusComponent } from '../components/aboutus/aboutus.component';
import { ScheduleComponent } from '../components/schedule/schedule.component';
import { CommitteesComponent } from '../components/committees/committees.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { FacilitiesComponent } from '../components/facilities/facilities.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ApplyComponent } from '../components/apply/apply.component';

const routes: Routes = [
  { path: 'apply', component: ApplyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'committees', component: CommitteesComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
