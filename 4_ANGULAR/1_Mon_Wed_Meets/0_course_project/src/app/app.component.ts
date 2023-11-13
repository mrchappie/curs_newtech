import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<ul>
  //   <li>Item1</li>
  // </ul>`,
  styleUrls: ['./app.component.css'],
  // styles: [
  //   `
  //     li {
  //       color: green;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  name = 'Johnny';
  enabled = true;
  // DATA BINDING
  interpolatedString = 'This string was interpolated';
  propertyBoundDisabled = true;
  propertyBoundPlaceholder = 'Disabled...';
  attributeBoundColspan = false;
  twoWayDataBoundString = 'two-way';
  twoWayDataBoundString2 = 'two-way2';
  getPlaceholder() {
    return this.propertyBoundPlaceholder;
  }
  displayAlert(event: Event, inputValue: string) {
    alert(`Button was clicked
    ${inputValue}`);
    console.log(event);
  }
  onFocus() {
    console.log('Focused');
  }
  onBlur() {
    console.log('Blurred');
  }
  onNewLine(event: any) {
    alert('New line');
    console.log(event);
  }
  // Class binding
  classString = 'bg-blue';
  classObject: Record<string, boolean> = {
    'color-red': true,
    'bg-blue': true,
    'border-green': true,
  };
  // Style binding
  styleString = 'color: red; background-color: blue;';
  styleObject /*: Record<string, string>*/ = {
    color: 'red',
    backgroundColor: 'blue',
    border: '5px solid green',
  };
  padding = 10;
  constructor() {
    setTimeout(() => {
      this.name = 'Matei';
      this.enabled = false;
      this.interpolatedString = 'This was changed via interpolation';
      this.propertyBoundDisabled = false;
      this.propertyBoundPlaceholder = 'Enabled :D';
      this.attributeBoundColspan = true;
      this.twoWayDataBoundString = 'Modified';
      this.classString += ' border-green';
      this.classObject['color-red'] = false;
      this.classObject['bg-blue'] = false;
      this.classObject['border-green'] = false;
      // this.classObject = {
      //   'color-red': false,
      //   'bg-blue': false,
      //   'border-green': false,
      // };
      this.styleString += ' border: 5px solid green;';
      this.styleObject.color = 'blue';
      this.styleObject.backgroundColor = 'green';
      this.styleObject.border = '1em dotted red';
    }, 3000);
  }
}
