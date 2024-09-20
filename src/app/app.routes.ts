import { Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ClansDetailsComponent } from './components/clans-details/clans-details.component';
import { ClansComponent } from './components/clans/clans.component';
import { HomeComponent } from './components/home/home.component';
import { KaraComponent } from './components/kara/kara.component';
import { KekkeiGenkaiDetailsComponent } from './components/kekkei-genkai-details/kekkei-genkai-details.component';
import { KekkeiGenkaiComponent } from './components/kekkei-genkai/kekkei-genkai.component';
import { TailedBeastComponent } from './components/tailed-beast/tailed-beast.component';
import { TeamsDetailsComponent } from './components/teams-details/teams-details.component';
import { TeamsComponent } from './components/teams/teams.component';
import { VillagesDetailsComponent } from './components/villages-details/villages-details.component';
import { VillagesComponent } from './components/villages/villages.component';
import { AkatsukiComponent } from './components/akatsuki/akatsuki.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'clans', component: ClansComponent },
  { path: 'clans/:id', component: ClansDetailsComponent },
  { path: 'villages', component: VillagesComponent },
  { path: 'villages/:id', component: VillagesDetailsComponent },
  { path: 'Kekkei-Genkai', component: KekkeiGenkaiComponent },
  { path: 'Kekkei-Genkai/:id', component: KekkeiGenkaiDetailsComponent },
  { path: 'tailed-beast', component: TailedBeastComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:id', component: TeamsDetailsComponent },
  { path: 'kara', component: KaraComponent },
  { path: 'akatsuki', component: AkatsukiComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
