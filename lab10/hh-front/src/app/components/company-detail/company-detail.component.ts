import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { VacancyService } from '../../services/vacancy.service';
import { Company } from '../../models/company';
import { Vacancy } from '../../models/vacancy';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CompanyDetailComponent implements OnInit {
  company: Company | null = null;
  vacancies: Vacancy[] = [];
  newVacancy: Vacancy = {
    name: '',
    description: '',
    salary: 0,
    company: 0
  };


  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompany(id).subscribe(company => {
      this.company = company;
      if (company.id != null) {
        this.newVacancy.company = company.id;
      }
    });

    this.companyService.getVacanciesByCompany(id).subscribe(vacancies => {
  this.vacancies = vacancies;
});
  }

  createVacancy(): void {
  if (!this.company) return;

  const vacancyData = {
    name: this.newVacancy.name,
    description: this.newVacancy.description,
    salary: this.newVacancy.salary,
    company: this.company.id
  };

  this.vacancyService.createVacancy(vacancyData).subscribe(vacancy => {
    this.vacancies.push(vacancy);
    this.newVacancy = { name: '',description: '', salary: 0, company: vacancy.id! };

  });
}

  deleteVacancy(id: number): void {
    this.vacancyService.deleteVacancy(id).subscribe(() => {
      this.vacancies = this.vacancies.filter(v => v.id !== id);
    });
  }
}
