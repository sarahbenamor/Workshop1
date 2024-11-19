import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';

const routes: Routes = [
  { path: 'residences', component: ResidencesComponent },
  { path: '', redirectTo: '/residences', pathMatch: 'full' } // Route par défaut vers `residences`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
