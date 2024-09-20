import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-teams-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatPaginatorModule],
  templateUrl: './teams-details.component.html',
  styleUrl: './teams-details.component.scss',
})
export class TeamsDetailsComponent {
  idTeams: any;
  dataTitle: any[] = [];
  dataSource: any[] = [];

  constructor(
    public service: ApiService,
    public activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idTeams = this.activateRoute.snapshot.params['id'];
    this.GetDataTeamsDetails();
  }

  public GetDataTeamsDetails() {
    this.service.getAllTeamsById(this.idTeams).subscribe((res) => {
      const { name, characters } = res;
      this.dataTitle = [name];
      this.dataSource = characters;
    });
  }
}
