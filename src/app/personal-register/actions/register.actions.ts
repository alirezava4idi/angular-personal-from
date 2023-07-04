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
    '[Personel Register] Delete Person',
    props<{id: number}>()
)

export const isEditingPerson = createAction(
    '[Personel Register] Is Editing a Person',
    props<{person: Person}>()
)

export const cancelEditPerson = createAction(
    '[Personel Register] Cancel Edit'
)

export const editPerson = createAction(
    '[Personel Register] Edit Person',
    props<{person: Person}>()
)