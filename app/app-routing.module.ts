import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'custom-page',
    loadChildren: () => import('./custom-page/custom-page.module').then(m => m.CustomPageModule),
    data: { preload: true }
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {

        enableTracing : false,  // debugging purposes only
    }
    )
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
