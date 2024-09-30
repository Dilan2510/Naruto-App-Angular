import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-license',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './license.component.html',
  styleUrl: './license.component.scss',
})
export class LicenseComponent {
  idDataList: any;
  dataSource: any[] = [];
  constructor(
    private service: ApiService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idDataList = this.activatedRoute.snapshot.params['id'];
    this.GetDataIdCharacters();
  }

  public GetDataIdCharacters(): void {
    this.service.getAllCharactersById(this.idDataList).subscribe((res) => {
      this.dataSource = [res];
    });
  }
}
