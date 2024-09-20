import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-akatsuki',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './akatsuki.component.html',
  styleUrl: './akatsuki.component.scss',
})
export class AkatsukiComponent {
  params = {} as any;
  dataSource: any[] = [];
  page = 0;
  pageSize = 20;
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
    this.service.getAllAkatsuki(this.params).subscribe((res) => {
      const { akatsuki } = res;
      this.dataSource = akatsuki;
    });
  }
  handlePageEvent(event: any) {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getData();
  }
}
