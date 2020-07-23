import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import {UsersModule} from "./users/users.module";
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UsersModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
