import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-villages-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
    RouterModule,
  ],
  templateUrl: './villages-details.component.html',
  styleUrl: './villages-details.component.scss',
})
export class VillagesDetailsComponent {
  public villagesIdData: any;
  public dataTitle: any;
  public dataSource: any[] = [];

  constructor(
    private service: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.villagesIdData = this.activatedRoute.snapshot.params['id'];
    this.GetDataVillages();
  }

  public GetDataVillages(): void {
    this.service.getAllVillagesById(this.villagesIdData).subscribe((res) => {
      this.dataTitle = [res];
      this.dataSource = res.characters;
    });
  }
}
