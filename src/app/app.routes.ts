import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ClansComponent } from './components/clans/clans.component';
import { ClansDetailsComponent } from './components/clans-details/clans-details.component';
import { VillagesComponent } from './components/villages/villages.component';
import { VillagesDetailsComponent } from './components/villages-details/villages-details.component';
import { KekkeiGenkaiComponent } from './components/kekkei-genkai/kekkei-genkai.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'clans', component: ClansComponent },
  { path: 'clans/:id', component: ClansDetailsComponent },
  { path: 'villages', component: VillagesComponent },
  { path: 'villages/:id', component: VillagesDetailsComponent },
  { path: 'Kekkei-Genkai', component: KekkeiGenkaiComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
