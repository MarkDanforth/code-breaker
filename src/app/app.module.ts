import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayFieldComponent } from './components/play-field/play-field.component';

import { MastermindService } from './services/mastermind.service';
import { FruitPickerComponent } from './shared/control/fruit-picker/fruit-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayFieldComponent,
    FruitPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MastermindService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
