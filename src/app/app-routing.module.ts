import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './components/list-client/list-client.component';
import { CreateClientComponent } from './components/create-client/create-client.component';

const routes: Routes = [
  {path: '', redirectTo: '/listClient', pathMatch: 'full'},
  {path: 'listClient', component: ListClientComponent},
  {path: 'createClient', component: CreateClientComponent},
  {path: '**', redirectTo: '/listClient', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
