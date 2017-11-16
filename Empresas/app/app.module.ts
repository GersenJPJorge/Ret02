import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { EmpresasModule } from './empresas/empresas.module';
import { DialogConfirmService } from './dialogconfirm.service';
import { HttpModule } from '@angular/http';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


@NgModule({
    imports : [AppRoutingModule, 
               BrowserModule, 
               EmpresasModule, 
               HttpModule, 
               InMemoryWebApiModule.forRoot(InMemoryDataService) 
               ],
               declarations :[AppComponent],
               providers : [
                   DialogConfirmService
               ],
               bootstrap: [AppComponent]
           })
           export class AppModule {}