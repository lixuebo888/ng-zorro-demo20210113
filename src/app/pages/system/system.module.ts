import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SystemRoutingModule } from './system-routing.module';
import { DemoComponent } from './demo/demo.component';
import { SystemComponent } from './system/system.component';




@NgModule({
  imports: [SystemRoutingModule,NgZorroAntdModule],
  declarations: [DemoComponent, SystemComponent],
  exports: []
})
export class SystemModule { }
