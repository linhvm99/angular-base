import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { routes } from './main.routing';
import { APIS } from './apis';
import { COMPONENTS } from './components';
import { PAGES } from './pages';
import { DIALOGS } from './dialogs';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';
import { RESOLVERS } from './resolvers';

@NgModule({
  declarations: [...COMPONENTS, ...PAGES, ...DIALOGS, ...PIPES, ...DIRECTIVES],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [...APIS, ...RESOLVERS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MainModule {}