import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../../services/vacancy.service';
import { Vacancy } from '../../models/vacancy';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css'],
  imports: [CommonModule, FormsModule, RouterModule,]
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    if (companyId) {
      this.vacancyService.getVacancies(+companyId).subscribe({
        next: (data) => this.vacancies = data,
        error: (err) => console.error(err)
      });
    }
  }
}
