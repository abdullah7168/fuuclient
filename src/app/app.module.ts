import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomcommonModule } from "./customcommon.module";
import { DgvrfComponent } from './dgvrf/dgvrf.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ViewNotificationDialogComponent } from './view-notification-dialog/view-notification-dialog.component';
const appRoutes: Routes = [
  { path: 'request-degree', component: DgvrfComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DgvrfComponent,
    LoginComponent,
    ViewNotificationDialogComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    CustomcommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ViewNotificationDialogComponent]
})
export class AppModule { }
