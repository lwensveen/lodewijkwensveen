import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { IntroComponent } from './home/intro/intro.component';
import { LanguagesComponent } from './home/languages/languages.component';
import { ClientsComponent } from './home/clients/clients.component';
import { ContactComponent } from './home/contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        ClientsComponent,
        ContactComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        IntroComponent,
        LanguagesComponent,
        PageNotFoundComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
