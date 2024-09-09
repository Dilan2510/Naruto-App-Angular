import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-villages-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatPaginatorModule],
  templateUrl: './villages-details.component.html',
  styleUrl: './villages-details.component.scss',
})
export class VillagesDetailsComponent {
  public villagesIdData: any;
  public dataTitle: any;
   dataSource:any[] =[];

  constructor(
    private service: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.villagesIdData = this.activatedRoute.snapshot.params['id'];
    console.log(this.villagesIdData);

    this.GetDataVillages();
  }

  public GetDataVillages() {
    this.service.getAllVillagesById(this.villagesIdData).subscribe((res) => {
      this.dataTitle = [res]
      this.dataSource = res.characters;
      console.log('res.data', res);
    });
  }
}
