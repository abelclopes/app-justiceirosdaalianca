import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { PangeNotFoundComponent } from '../sharead/pange-not-found/pange-not-found.component';
import { HomeComponent } from '../components/home/home.component';
import { ShareadModule } from '../sharead/sharead.module';

const appRoutes: Routes = [  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    // data: { title: 'Justiceiros da aliança' }
  },
  { path: '**', component: PangeNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule,
    ShareadModule
  ],
  exports: [
    RouterModule,
    HomeComponent,
  ],
  declarations: [
    HomeComponent,
    PangeNotFoundComponent
  ]
})
export class RoutingModule { }
