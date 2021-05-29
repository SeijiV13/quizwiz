import { HomeRoutes } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ActionComponent } from './components/action/action.component';
import { FeatureItemComponent } from './components/feature-item/feature-item.component';
import { FeatureComponent } from './components/feature/feature.component';
import { QuoteComponent } from './components/quote/quote.component';
import { BasicFeatureComponent } from './components/basic-feature/basic-feature.component';



@NgModule({
  declarations: [
    HomeContainerComponent,
    //Web Page Sections
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    BadgeComponent,
    ActionComponent,
    FeatureItemComponent,
    FeatureComponent,
    QuoteComponent,
    BasicFeatureComponent
  ],
  imports: [
    CommonModule,
    //Routes
    HomeRoutes
  ]
})
export class HomeModule { }
