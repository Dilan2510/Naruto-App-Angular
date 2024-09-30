import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-clans-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatPaginatorModule, RouterModule],
  templateUrl: './clans-details.component.html',
  styleUrl: './clans-details.component.scss',
})
export class ClansDetailsComponent {
  public dataSource: any[] = [];
  public dataTitle: any[] = [];
  public idDataList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ApiService
  ) {}

  ngOnInit() {
    this.idDataList = this.activatedRoute.snapshot.params['id'];
    this.GetDataFromId();
  }

  public GetDataFromId() {
    this.service.getAllClansById(this.idDataList).subscribe((res) => {
      this.dataTitle = [res];
      this.dataSource = res.characters;
    });
  }
}
