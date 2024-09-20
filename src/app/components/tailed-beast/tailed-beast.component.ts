import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tailed-beast',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  templateUrl: './tailed-beast.component.html',
  styleUrl: './tailed-beast.component.scss',
})
export class TailedBeastComponent {
  public dataSource: any[] = [];
  public params = [] as any;

  constructor(private service: ApiService) {}

  public ngOnInit() {
    this.GetAllBeast();
  }

  public GetAllBeast() {
    this.service.getAllBeast(this.params).subscribe((res) => {
      this.dataSource = res.tailedBeasts;
    });
  }
}
