import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clans',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  templateUrl: './clans.component.html',
  styleUrl: './clans.component.scss',
})
export class ClansComponent {
  params = {} as any;
  page = 0;
  dataSource: any[] = [];

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.getData();
  }

  public getRequestParams(page: number): any {
    if (page) {
      this.params[`page`] = page + 1;
    } else {
      this.params[`page`] = page - 0;
    }
    return this.params;
  }

  public getData(): void {
    this.params = this.getRequestParams(this.page);
    this.service.getAllClans(this.params).subscribe((res) => {
      const { clans } = res;
      this, (this.dataSource = clans);
    });
  }

  public HandlePgeEvent(event: any) {
    this.page = event.pageIndex;
    this.getData();
  }
}
