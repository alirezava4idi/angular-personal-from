import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Person } from '../models/person.models';
import * as RegisterActions from '../actions/register.actions';
import { Store } from '@ngrx/store';


import province from '../../../assets/province.json';
import city  from '../../../assets/city.json';

import { City } from '../models/city.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {

  form = new FormGroup({
    fname: new FormControl(this.data.person.fname, Validators.required),
    lname: new FormControl(this.data.person.lname, Validators.required),
    nationalCode: new FormControl(this.data.person.nationalCode, Validators.required),
    dob: new FormControl(this.data.person.dob),
    gender: new FormControl(this.data.person.gender ? this.data.person.gender : undefined),
    province: new FormControl(this.data.person.address?.province),
    city: new FormControl(this.data.person.address?.city),
  });

  
  province = province
  cities: City[] | undefined = undefined


  constructor(@Inject(MAT_DIALOG_DATA) private data: {person: Person},
              private dialogRef: MatDialogRef<EditDialogComponent>,
              private store: Store) { 


                dialogRef.afterClosed().subscribe(data => {
                  this.store.dispatch(RegisterActions.cancelEditPerson())
                })
                

                if(this.data.person.address?.province) {
                  const pCode = this.province.find(p => p.Name === this.data.person.address?.province && p.Country_Code === 1);
                  this.cities = city.filter(c => c.Province_Code === pCode?.Code  && c.Country_Code === 1)
                }
              }

              
              proviceSelect(id: number) {
                this.cities = city.filter(c => c.Province_Code === id && c.Country_Code === 1)
              }
            
              citySelect(id: number) {
                console.log(`city ${id}`)
              }

              submit() {
    
                const fname = this.form.value.fname?.trim();
                const lname = this.form.value.lname?.trim();
                const nationalCode = this.form.value.nationalCode
                const dob = this.form.value.dob?.trim();
                const gender = this.form.value.gender?.trim();
                const province = this.form.value.province?.trim();
                const userCity = this.form.value.city?.trim();
            
                if (fname === '' || lname === '' || nationalCode === '')
                {
                  return
                } else {
                  if (fname && lname && nationalCode && dob) {
                    const person: Person = {
                      id: this.data.person.id,
                      fname: fname,
                      lname: lname,
                      nationalCode: nationalCode,
                      dob: dob,
                      gender: gender,
                      address: {
                        city: userCity,
                        province: province
                      }
                      
                    }
                    this.store.dispatch(RegisterActions.editPerson({person}))
                    this.store.dispatch(RegisterActions.cancelEditPerson())
                    this.dialogRef.close()
                  }
                }
            
                
            
            
              }

}
