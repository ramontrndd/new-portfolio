import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { TechSkillsComponent } from './pages/tech-skills/tech-skills.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjetosComponent,
    AboutMeComponent,
    TechSkillsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgCircleProgressModule.forRoot({
      "backgroundPadding": -50,
      "radius": 118,
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 5,
      "showSubtitle": false,
      "showUnits": true,
      "showTitle": true,
      "showBackground": false,
      "imageSrc": "assets/images/music.svg",
      "imageHeight": 75,
      "imageWidth": 75,
      "showImage": true,
      "startFromZero": false})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
