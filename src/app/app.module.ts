import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmHomeComponent } from './sm-home/sm-home.component';
import { SmWorksComponent } from './sm-works/sm-works.component';
import { SmSkillsComponent } from './sm-skills/sm-skills.component';
import { SmTechnologiesComponent } from './sm-technologies/sm-technologies.component';
import { SmSoftSkillsComponent } from './sm-soft-skills/sm-soft-skills.component';
import { SmRepositoriesComponent } from './sm-repositories/sm-repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    SmHomeComponent,
    SmWorksComponent,
    SmSkillsComponent,
    SmTechnologiesComponent,
    SmSoftSkillsComponent,
    SmRepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
