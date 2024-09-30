import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-kekkei-genkai-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
    RouterModule,
  ],
  templateUrl: './kekkei-genkai-details.component.html',
  styleUrl: './kekkei-genkai-details.component.scss',
})
export class KekkeiGenkaiDetailsComponent {
  public dataSource: any[] = [];
  public dataTitle: any;
  public idData: any;
  constructor(private service: ApiService, public route: ActivatedRoute) {}

  public ngOnInit() {
    this.idData = this.route.snapshot.params['id'];
    this.GetData();
  }

  public GetData() {
    this.service.getAllGenkaiById(this.idData).subscribe((res) => {
      this.dataTitle = [res];
      this.dataSource = res.characters;
    });
  }
}
