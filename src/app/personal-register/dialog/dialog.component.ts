import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as RegisterActions from '../actions/register.actions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, 
              private dialogRef: MatDialogRef<DialogComponent>,
              private store: Store) { }


  deletePerson(id:number) {
    this.store.dispatch(RegisterActions.deletePerson({id}))
    this.dialogRef.close()
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
