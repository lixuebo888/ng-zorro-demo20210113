import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { 
    path: '', 
    component: WelcomeComponent,
    children: [
      { path: 'system', loadChildren: () => import('../system/system.module').then(m => m.SystemModule) }
    ]  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
