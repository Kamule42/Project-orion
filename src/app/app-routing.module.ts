import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule)
    },
  { path: '', loadChildren: () => import('./site/site.module').then(m => m.SiteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }