import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { UserAuthGuard } from './auth-guard/user-auth.guard';
import { TokenInterceptorService } from './auth-guard/token-interceptor.service';
import { CommonModule } from '@angular/common';
import { headerTitleService } from './services/header-dropdown.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [ UserAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    },
    headerTitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
