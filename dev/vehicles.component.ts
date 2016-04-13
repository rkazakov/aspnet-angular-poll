import { Component } from 'angular2/core';

@Component({
  selector: 'my-vehicles',
  template: `
    <ul>
        <li *ngFor="#vehicle of vehicles">
            {{vehicle.name}}
        </li>
    </ul>
    <div *ngIf="vehicles.length">
        <h3>You have {{vehicles.length}} vehicles</h3>
    </div>
  `
})
export class VehiclesComponent {
  vehicles = [
    { id: 1, name: 'X-Wing Fighter' },
    { id: 2, name: 'Tie Fighter' },
    { id: 3, name: 'Y-Wing Fighter' }
  ];
}
