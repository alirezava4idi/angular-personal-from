import { createReducer, on} from '@ngrx/store';
import { Person } from '../models/person.models';
import * as RegisterActions from '../actions/register.actions';

const initialPersons: Person[] = [];


function addPerson(state: Person[], person: Person) {
    person = {...person, id: state.length + 1}
    return [...state, person]
}



function deletePerson(state: Person[], id: number) {
    console.log(`delete person id ${id}`)
    const newPersons = state.filter(person => person.id !== id);
    return [...newPersons]
}

function editPerson(state: Person[], person: Person){
    console.log(person)

    const newState = state.map(p => p.id === person.id ? person : p)

    console.log(newState)

    return newState
}

export const submitPersonReducer = createReducer(
    initialPersons,
    on(RegisterActions.submitForm, (state, {person}) => (addPerson(state, person))),
    on(RegisterActions.deletePerson, (state, {id}) => deletePerson(state, id)),
    on(RegisterActions.editPerson, (state, {person}) => editPerson(state, person))
)

const initialPerson: Person = {fname: '', lname: '', nationalCode: '', dob: ''}

export const IsEditingPerson = createReducer (
    initialPerson,
    on(RegisterActions.isEditingPerson, (_state, {person}) => person),
    on(RegisterActions.cancelEditPerson, (state) => initialPerson)
)


// export const tableActionsReducer = createReducer(
//     initialPersons,
// )