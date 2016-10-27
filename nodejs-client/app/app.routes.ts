import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PersonListComponent } from './person/person-list.component'
import { PersonRegisterComponent } from './person/person-register.component'
import { PersonViewComponent } from './person/person-view.component'

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'persons', component: PersonListComponent},
    {path: 'persons-register', component: PersonRegisterComponent},
    {path: 'persons/:id', component: PersonViewComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

