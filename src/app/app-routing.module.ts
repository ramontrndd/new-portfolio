import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TechSkillsComponent } from './pages/tech-skills/tech-skills.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'projetos',
    component: ProjetosComponent,
  },
  {
    path: 'tech-skills',
    component: TechSkillsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
