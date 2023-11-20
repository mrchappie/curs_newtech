import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    Diy1Component,
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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
