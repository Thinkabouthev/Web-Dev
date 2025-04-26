import { Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';

export const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyDetailComponent },
];
