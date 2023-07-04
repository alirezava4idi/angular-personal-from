import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from '../models/person.models';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { DialogComponent } from '../dialog/dialog.component';

const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  dataSource$: Observable<Person[]>;

  constructor(private store: Store<{persons: Person[]}>, private dialog: MatDialog) {
    this.dataSource$ = this.store.select(state => state.persons);
  }

  displayedColumns: string[] = ['position', 'fname', 'lname', 'nationalCode', 'dob' ,'gender', 'address', 'ops'];


  deletePerson(id: number) {
    this.dialog.open(DialogComponent, {
      data: {id}
    })
  }
}
