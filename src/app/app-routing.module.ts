import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  {
    path: 'questions',
    loadChildren: () =>
      import('./pages/questions-page/questions-page.module').then(
        (m) => m.QuestionsPageModule
      ),
  },
  {
    path: 'result',
    loadChildren: () =>
      import('./pages/result-page/result-page.module').then(
        (m) => m.ResultPageModule
      ),
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
