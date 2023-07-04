import { createAction, props } from '@ngrx/store';
import { Person } from '../models/person.models';



export const enterRegister = createAction(
    '[Personel Register] Enter'
)


export const submitForm = createAction(
    '[Personel Register] Submit Form',
    props<{person: Person}>()
)

export const deletePerson = createAction(
    '[Personel Delete] Delete Person',
    props<{id: number}>()
)