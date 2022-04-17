import { FormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ConverterComponent } from './converter/converter.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConverterComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
