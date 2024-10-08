import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kekkei-genkai',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './kekkei-genkai.component.html',
  styleUrl: './kekkei-genkai.component.scss',
})
export class KekkeiGenkaiComponent {
  dataSource: any[] = [];
  params = {} as any;
  constructor(private service: ApiService) {}

  public ngOnInit() {
    this.GetAllKekkei();
  }

  public GetAllKekkei() {
    this.service.getAllGenkai(this.params).subscribe((res) => {
      this.dataSource = res.kekkeigenkai;      
    });
  }
}
