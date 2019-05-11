import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CustomComponentComponent } from './custom-component/custom-component.component';

// import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

// ngx-material component library - https://material.angular.io/guide/getting-started
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatGridListModule,
  MatSnackBarModule,
  MatTableModule,
  MatDialogModule
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountryInfoComponent } from './country-info/country-info.component';
import { RoadmapOverviewComponent } from './roadmap-overview/roadmap-overview.component';

// const config = new AuthServiceConfig([
//   {
//     id: 'Ke9XCD1EWoK7MW3rEGgCmdGe',
//     provider: new GoogleLoginProvider('260121249713-ilvng8rj1bjgfj36k49lclq2th4ecoc4.apps.googleusercontent.com')
//   }
//   ]);

@NgModule({
  declarations: [AppComponent, CountryInfoComponent, RoadmapOverviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatGridListModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule
    // SocialLoginModule.initialize(config)
  ],
  entryComponents: [
    RoadmapOverviewComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatButtonModule, MatCheckboxModule]
})
export class AppModule {

}
