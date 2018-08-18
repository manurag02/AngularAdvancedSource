import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { RouterModule, Routes } from '@angular/router';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {GoogleChart} from './angular2-google-chart.directive';
import { ModalModule } from 'ngx-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    SingleCountryComponent,
    GoogleChart
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule,
    HttpModule,ModalModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'*', component:HomeComponent},
      {path:'home', component:HomeComponent},
      {path:'parm/:parm/regionalbloc/:regionalbloc',component:AllCountriesComponent},
       {path:'home/parm/:parm/regionalbloc/:regionalbloc',component:AllCountriesComponent},
       {path:'parm/:parm/language/:language',component:AllCountriesComponent},
        {path:'parm/:parm/currency/:currency',component:AllCountriesComponent},
      {path:'name/:name',component:SingleCountryComponent},
      {path:'name/:name/parm/:parm/language/:language',component:AllCountriesComponent},
      {path:'name/:name/parm/:parm/currency/:currency',component:AllCountriesComponent},
      //{path:'book/:url',component:BookViewComponent},
      {path:'SingleCountry', component:SingleCountryComponent}
    ])
  ],
  providers: [RestService,HttpModule{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
}
