import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { PIPES } from './pipes';
import { DIALOGS } from './dialogs';
import { TOOLTIPS } from './tool-tip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIMENG_MODULES } from './primeng.module';
import { RESOLVERS } from './resolvers';
import { MATERIAL_MODULES } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
    ...PRIMENG_MODULES,
  ],
  exports: [CommonModule, ...COMPONENTS, ...PIPES, ...DIALOGS, ...TOOLTIPS, ...PRIMENG_MODULES],
  providers: [...RESOLVERS],
  declarations: [...COMPONENTS, ...PIPES, ...DIALOGS, ...TOOLTIPS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule { }
