import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePagePage } from './pages/home-page/home-page.page';
import { SignupPage } from './pages/signup/signup.page';
import { LoginPage } from './pages/login/login.page';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', loadChildren: './pages/home-page/home-page.module#HomePagePageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  // add authGuard to 'personal' route if true navigation excutes
  { path: 'personal', loadChildren: './pages/personal/personal.module#PersonalPageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
