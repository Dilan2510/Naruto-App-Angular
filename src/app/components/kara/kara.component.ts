import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kara',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './kara.component.html',
  styleUrl: './kara.component.scss',
})
export class KaraComponent {
  params = {} as any;
  page = 0;
  pageSize = 20;
  dataSource: any[] = [];
  constructor(private service: ApiService) {}

  ngOnInit() {
    this.getData();
  }

  public getData(): void {
    this.service.getAllKara(this.params).subscribe((res) => {
      const { kara } = res;
      this.dataSource = kara;
    });
  }
}
