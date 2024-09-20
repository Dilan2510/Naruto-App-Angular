import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
})
export class TeamsComponent {
  public dataSource: any[] = [];
  public params = {} as any;
  public page = 0;
  public pageSize = 20;

  constructor(private service: ApiService) {}

  public ngOnInit() {
    this.GetAllData();
  }

  public getRequestParams(page: number, pageSize: number) {
    if (page) {
      this.params['page'] = this.page + 1;
    } else {
      this.params['page'] = this.page - 0;
    }
    return this.params;
  }

  public GetAllData() {
    this.params = this.getRequestParams(this.page, this.pageSize);
    this.service.getAllTeams(this.params).subscribe((res) => {
      this.dataSource = res.teams;
    });
  }

  public handlePageEvent(event: any) {
    this.page = event.currentPage;
    this.pageSize = event.pageSize;
  }
}
