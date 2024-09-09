import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-villages',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  templateUrl: './villages.component.html',
  styleUrl: './villages.component.scss',
})
export class VillagesComponent {
  public dataSource: any[] = [];
  public params = {} as any;

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.GetDataVillages();
  }

  public GetDataVillages() {
    this.service.GetAllVillages(this.params).subscribe((res) => {
      this.dataSource = res.villages;
      // console.log(this.dataSource);
    });
  }
}
