import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {HttpModule, Response} from '@angular/http';
import {SearchServiceService} from './search-service.service';
import { AppComponent } from './app.component';
import { DestinationRefinementComponent } from './destination-refinement/destination-refinement.component';
import { ChoiceSummaryComponent } from './choice-summary/choice-summary.component';

const routes: Routes = [
  { path: 'home', component: DestinationRefinementComponent },
  { path: 'choice/:id',component: ChoiceSummaryComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    DestinationRefinementComponent,
    ChoiceSummaryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
