import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalRegisterComponent } from './personal-register/personal-register.component';
import { PersonalFormComponent } from './personal-register/personal-form/personal-form.component';
import { PersonalDetailsComponent } from './personal-register/personal-details/personal-details.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';



import { IsEditingPerson, submitPersonReducer } from '../app/personal-register/reducers/register.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DialogComponent } from './personal-register/dialog/dialog.component';
import { EditDialogComponent } from './personal-register/edit-dialog/edit-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalRegisterComponent,
    PersonalFormComponent,
    PersonalDetailsComponent,
    DialogComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({persons: submitPersonReducer, person: IsEditingPerson}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgPersianDatepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
