import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DIY1Component } from './DIY/diy1/diy1.component';
import { Diy2Component } from './DIY/diy2/diy2.component';
import { Diy3Component } from './DIY/diy3/diy3.component';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';
import { Diy4TodoComponent } from './DIY/diy4-todo/diy4-todo.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ChildComponent } from './component-interaction/child/child.component';
import { ParentComponent } from './component-interaction/parent/parent.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DisplayCounterComponent } from './input-output/display-counter/display-counter.component';
import { IncreaseCounterComponent } from './input-output/increase-counter/increase-counter.component';
import { DecreaseCounterComponent } from './input-output/decrease-counter/decrease-counter.component';

@NgModule({
  declarations: [AppComponent, DIY1Component, Diy2Component, Diy3Component, StructuralDirComponent, Diy4TodoComponent, ComponentInteractionComponent, ChildComponent, ParentComponent, InputOutputComponent, DisplayCounterComponent, IncreaseCounterComponent, DecreaseCounterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
