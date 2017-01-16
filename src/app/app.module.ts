import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MarkdownModule} from 'angular2-markdown';

import { AppComponent } from './app.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { BannerComponent } from './banner/banner.component';
import { ContainerComponent } from './container/container.component';
import { ButtonComponent } from './button/button.component';
import { CommunityComponent } from './community/community.component';
import { HeaderComponent } from './header/header.component';
import { LinkComponent } from './link/link.component';
import { LogoComponent } from './logo/logo.component';
import { SectionComponent } from './section/section.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TalksComponent } from './talks/talks.component';
import { TeamsComponent } from './teams/teams.component';
import { TyperComponent } from './typer/typer.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorComponent,
    BannerComponent,
    ContainerComponent,
    ButtonComponent,
    CommunityComponent,
    HeaderComponent,
    LinkComponent,
    LogoComponent,
    SectionComponent,
    SponsorsComponent,
    TalksComponent,
    TeamsComponent,
    TyperComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
