import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  { 
    path: '', 
    component: SystemComponent,
    children: [
      { path: 'demo', component: DemoComponent }
    ]       
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
