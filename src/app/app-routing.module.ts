import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "../app/user/user.component";
import { HomeComponent } from "../app/home/home.component";


const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
