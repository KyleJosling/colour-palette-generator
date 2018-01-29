import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from  '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

import {MatMenuModule, MatButtonModule,MatListModule, MatIconModule, MatCardModule, MatSidenavModule,MatToolbarModule,MatCheckboxModule,MatFormFieldModule,MatInputModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ColoursComponent } from './components/colours/colours.component';

import {DataService} from './services/data.service';

const appRoutes: Routes=[
	{path:'', component:IntroductionComponent},
	{path:'colours', component:ColoursComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    NavbarComponent,
    IntroductionComponent,
    ColoursComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		HttpClientModule,
		ScrollToModule.forRoot(),
		RouterModule.forRoot(appRoutes),
		MatMenuModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatSidenavModule,
		MatToolbarModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule
	  ],
		providers:[ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
