import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  params = {} as any;
  page = 0;
  pageSize = 20;
  dataSource: any[] = [];
  constructor(private service: ApiService) {}

  ngOnInit() {
    this.getData();
  }

  public getRequestParams(page: number, pageSize: number): any {
    if (page) {
      this.params[`page`] = page + 1;
    } else {
      this.params[`page`] = page - 0;
    }
    return this.params;
  }

  public getData(): void {
    this.params = this.getRequestParams(this.page, this.pageSize);
    this.service.getAll(this.params).subscribe((res) => {
      const { characters } = res;
      this.dataSource = characters;
    });
  }

  handlePageEvent(event: any) {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getData();
  }
}
