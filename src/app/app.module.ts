import {HttpClientModule}  from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.component';
import {StarComponent} from './shared/star.component';
import { ConvertToSpacesPipe } from './shared/string-transform';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { ProductDetailComponent } from './products/product-detail.component';
import {WelcomeComponent} from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { MainMenuComponent } from './shared/mainmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
    WelcomeComponent
    , MainMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
                           {path: 'products', component: ProductListComponent},
                           {path: 'products/:id', component:ProductDetailComponent },
                           {path: 'welcome', component:WelcomeComponent },
                           {path: '', redirectTo:'welcome', pathMatch:'full' },
                           {path: '**', redirectTo:'welcome', pathMatch:'full' }
                          ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
