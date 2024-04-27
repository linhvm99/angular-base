import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/modules/shared/shared.module';
import { RouterModule } from '@angular/router';

import { COMPONENTS } from './components';
import { DIALOGS } from './dialogs';
import { PAGES } from '../../pages';
import { APIS } from './apis';
import { RESOLVERS } from './resolvers';

@NgModule({
  declarations: [...COMPONENTS, ...DIALOGS, ...PAGES],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  exports: [RouterModule],
  providers: [...APIS, ...RESOLVERS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DashboardModule { }
