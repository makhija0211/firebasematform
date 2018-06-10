import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';

//Material design
import { MatTableModule, MatInputModule, MatButtonModule} from '@angular/material';

import { ExpenseService } from './expense.service';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { HeaderComponent } from './header/header.component';
import { ExpensePageComponent } from './expense-page/expense-page.component';
import { FbasedataComponent } from './fbasedata/fbasedata.component';

const appRoutes: Routes = [
  { path: 'home', component: ValidFormComponent },
  { path: 'expenses',component: ExpensePageComponent } ,
  { path: 'fbase',component: FbasedataComponent } ,

];
@NgModule({
  declarations: [
    AppComponent,
    ValidFormComponent,
    HeaderComponent,
    ExpensePageComponent,
    FbasedataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    ExpenseService
  ],
  exports:[MatTableModule, MatInputModule, MatButtonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }