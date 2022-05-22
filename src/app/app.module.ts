import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { TableComponent } from './table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing-mobule";
import {SearchFilterPipePipe} from "./pipes/search-filter-pipe";
import { ButtonComponent } from './button/button.component';
import { EditComponent } from './edit/edit.component';
import {AgmCoreModule} from "@agm/core";
import {SortDirective} from "./directives/sorting.directive";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    AddEditComponent,
    TableComponent,
    HeaderComponent,
    ModalComponent,
    SearchFilterPipePipe,
    ButtonComponent,
    EditComponent,
    SortDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpAZUVVy8EGfZZPCwWxwAACuURgazX3hM',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
