import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import province from '../../../assets/province.json';
import city from '../../../assets/city.json';
import { City } from '../models/city.models';
import { Person } from '../models/person.models';
import * as RegisterActions from '../actions/register.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {

  @Input() person: any;

  
  form = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    nationalCode: new FormControl('', Validators.required),
    dob: new FormControl(),
    gender: new FormControl(),
    province: new FormControl(),
    city: new FormControl(),
  });

  province = province
  cities: City[] | undefined = undefined 

  persons$: Observable<Person[]>;

  person$: Observable<Person>;

  constructor(private store: Store<{persons: Person[], IsEditingPerson: Person}>) {
    this.store.dispatch(RegisterActions.enterRegister());
    this.persons$ = this.store.select(state => state.persons);
    this.person$ = this.store.select(state => state.IsEditingPerson)
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
      if (fname && lname && nationalCode) {
        const person: Person = {
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
        this.store.dispatch(RegisterActions.submitForm({person}))
        this.form.reset()
      }
    }

    


  }

  ngOnInit(): void {
    this.person$.subscribe(value => console.log(value))
  }

}
