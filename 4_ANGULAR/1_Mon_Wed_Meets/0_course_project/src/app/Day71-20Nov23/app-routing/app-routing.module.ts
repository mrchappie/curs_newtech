import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Diy1Component } from 'src/app/Day66-01Nov/diy1/diy1.component';
import { Diy2Component } from 'src/app/DIY/diy2/diy2.component';
import { Diy3Component } from 'src/app/DIY/diy3/diy3.component';
import { Diy4TodoComponent } from 'src/app/DIY/diy4-todo/diy4-todo.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';
import { ParametrisedComponent } from '../parametrised/parametrised.component';
import { ExerciseMenuComponent } from 'src/app/Day72-22Nov23/more-routing/exercise-menu/exercise-menu.component';
import { ExerciseOrdersComponent } from 'src/app/Day72-22Nov23/more-routing/exercise-orders/exercise-orders.component';
import { ExerciseServerComponent } from 'src/app/Day72-22Nov23/more-routing/exercise-server/exercise-server.component';
import { MenuItemComponent } from 'src/app/Day72-22Nov23/more-routing/exercise-menu/menu-item/menu-item.component';

const routes: Routes = [
  // { path: '', redirectTo: 'diy1', pathMatch: 'full' },
  { path: 'diy1', component: Diy1Component },
  { path: 'diy2', component: Diy2Component },
  { path: 'diy3', component: Diy3Component },
  { path: 'diy4', component: Diy4TodoComponent },
  { path: 'product/:productId/:productName', component: ParametrisedComponent },

  /**
   * ROUTES FOR ORDER SYSTEM
   */

  {
    path: 'menu',
    component: ExerciseMenuComponent,
    children: [
      {
        path: ':dishId',
        component: MenuItemComponent,
      },
    ],
  },
  { path: 'orders', component: ExerciseOrdersComponent },
  { path: 'server', component: ExerciseServerComponent },
  /** ---------------------------------------- */

  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
