import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'prima-pagina', component: HomeComponent },
  { path: 'myadmin', component: AdminComponent },
  { path: '**', component: HomeComponent },
  // in caz de hakereala sa-l duca inapoi pe pagina de home. Descrierea din path sa nu aiba neaparat legatura cu componenta, dar pentru SEO e recomandat ca descrerile
  // sa fie cat mai prietenoase;
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
