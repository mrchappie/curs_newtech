import { Component } from '@angular/core';
import { map } from 'rxjs';
import { StateService } from 'src/app/utils/services/state/state.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  items: string[] = ['Vasile', 'Alex', 'Ionel', 'Mircea', 'Maria'];
  currentState$ = this.stateService.state$;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    console.log(this.currentState$);
  }

  receivedChildMod(newItems: string[]) {
    console.log(newItems);
  }
}
