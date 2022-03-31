import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {canActivate,redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/auth-guard';

const redirectToLogin=()=>redirectUnauthorizedTo(['cards']);
const redirectToHome=()=>redirectLoggedInTo(['home'])

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    ...canActivate(redirectToHome)
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent,
    ...canActivate(redirectToHome)

  },
  { path: 'cards', loadChildren: () => import('./info/info.module').then(m => m.InfoModule),
      ...canActivate(redirectToLogin)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
