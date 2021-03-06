import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDataComponent } from './form-data/form-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatWordPipe } from './pipe/format-word.pipe';
import { ColorDirective } from './directive/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormDataComponent,
    FormatWordPipe,
    ColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
