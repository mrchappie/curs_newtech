import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Diy1Component } from './Day66-01Nov/diy1/diy1.component';
import { StructuralDirectivesComponent } from './Day67-06Nov/structural-directives/structural-directives.component';
import { PlusMinusGameComponent } from './Day67-06Nov/plus-minus-game/plus-minus-game.component';
import { TodoExComponent } from './Day68-08Nov/todo-ex/todo-ex.component';
import { ComponentInteractionComponent } from './Day68-08Nov/component-interaction/component-interaction.component';
import { ParentComponent } from './Day68-08Nov/component-interaction/parent/parent.component';
import { ChildComponent } from './Day68-08Nov/component-interaction/child/child.component';
import { LifecycleComponent } from './Day68-08Nov/lifecycle/lifecycle.component';
import { FrameComponent } from './Day68-08Nov/lifecycle/frame/frame.component';
import { InputOutputComponent } from './Day68-08Nov/input-output/input-output.component';
import { DisplayComponent } from './Day68-08Nov/input-output/display/display.component';
import { PlusComponent } from './Day68-08Nov/input-output/plus/plus.component';
import { MinusComponent } from './Day68-08Nov/input-output/minus/minus.component';
import { DataBindingComponent } from './Day66-01Nov/data-binding/data-binding.component';
import { TodoInteractionComponent } from './Day69-13Nov/todo-interaction/todo-interaction.component';
import { CreateTaskComponent } from './Day69-13Nov/todo-interaction/create-task/create-task.component';
import { TaskListComponent } from './Day69-13Nov/todo-interaction/task-list/task-list.component';
import { TaskItemComponent } from './Day69-13Nov/todo-interaction/task-list/task-item/task-item.component';
import { CounterWithServicesComponent } from './Day69-13Nov/counter-with-services/counter-with-services.component';
import { IncrementComponent } from './Day69-13Nov/counter-with-services/increment/increment.component';
import { DecrementComponent } from './Day69-13Nov/counter-with-services/decrement/decrement.component';
import { CountDisplay } from './Day69-13Nov/counter-with-services/countDisplay/count-display.component';
import { TodoWithServicesComponent } from './Day70-15Nov23/todo-with-services/todo-with-services.component';
import { TaskListServicesComponent } from './Day70-15Nov23/todo-with-services/task-list-services/task-list-services.component';
import { TaskItemServicesComponent } from './Day70-15Nov23/todo-with-services/task-list-services/task-item-services/task-item-services.component';
import { CreateTaskServicesComponent } from './Day70-15Nov23/todo-with-services/create-task-services/create-task-services.component';
import { ObservablesComponent } from './Day70-15Nov23/observables/observables.component';
import { RxExampleComponent } from './Day70-15Nov23/rx-example/rx-example.component';
import { PlusMinusServiceComponent } from './Day70-15Nov23/plus-minus-service/plus-minus-service.component';
import { MinusSComponent } from './Day70-15Nov23/plus-minus-service/minus-s/minus-s.component';
import { PlusSComponent } from './Day70-15Nov23/plus-minus-service/plus-s/plus-s.component';
import { DisplaySComponent } from './Day70-15Nov23/plus-minus-service/display-s/display-s.component';
import { RoutingComponent } from './Day71-20Nov23/routing/routing.component';
import { Routes } from '@angular/router';
import { Diy2Component } from './DIY/diy2/diy2.component';
import { Diy3Component } from './DIY/diy3/diy3.component';
import { Diy4TodoComponent } from './DIY/diy4-todo/diy4-todo.component';
import { AppRoutingModule } from './Day71-20Nov23/app-routing/app-routing.module';
import { NotFoundPageComponent } from './Day71-20Nov23/not-found-page/not-found-page.component';
import { ParametrisedComponent } from './Day71-20Nov23/parametrised/parametrised.component';
import { MoreRoutingComponent } from './Day72-22Nov23/more-routing/more-routing.component';
import { ExerciseMenuComponent } from './Day72-22Nov23/more-routing/exercise-menu/exercise-menu.component';
import { ExerciseOrdersComponent } from './Day72-22Nov23/more-routing/exercise-orders/exercise-orders.component';
import { ExerciseServerComponent } from './Day72-22Nov23/more-routing/exercise-server/exercise-server.component';
import { MenuItemComponent } from './Day72-22Nov23/more-routing/exercise-menu/menu-item/menu-item.component';
import { PipesComponent } from './Day73-27Nov23/pipes/pipes.component';
import { NamePipe } from './Day73-27Nov23/pipes/name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Diy1Component,
    Diy2Component,
    Diy3Component,
    Diy4TodoComponent,
    StructuralDirectivesComponent,
    PlusMinusGameComponent,
    TodoExComponent,
    ComponentInteractionComponent,
    ParentComponent,
    ChildComponent,
    LifecycleComponent,
    FrameComponent,
    InputOutputComponent,
    DisplayComponent,
    PlusComponent,
    MinusComponent,
    DataBindingComponent,
    TodoInteractionComponent,
    CreateTaskComponent,
    TaskListComponent,
    TaskItemComponent,
    CounterWithServicesComponent,
    IncrementComponent,
    DecrementComponent,
    CountDisplay,
    TodoWithServicesComponent,
    TaskListServicesComponent,
    TaskItemServicesComponent,
    CreateTaskServicesComponent,
    ObservablesComponent,
    RxExampleComponent,
    PlusMinusServiceComponent,
    MinusSComponent,
    PlusSComponent,
    DisplaySComponent,
    RoutingComponent,
    NotFoundPageComponent,
    ParametrisedComponent,
    MoreRoutingComponent,
    ExerciseMenuComponent,
    ExerciseOrdersComponent,
    ExerciseServerComponent,
    MenuItemComponent,
    PipesComponent,
    NamePipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
