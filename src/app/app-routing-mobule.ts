import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {OverviewComponent} from "./overview/overview.component";
import {AddEditComponent} from "./add-edit/add-edit.component";
import {HomeComponent} from "./home/home.component";
import {EditComponent} from "./edit/edit.component";

const router: Routes = [
  {path: 'table', component: OverviewComponent},
  {path: 'add', component: AddEditComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
