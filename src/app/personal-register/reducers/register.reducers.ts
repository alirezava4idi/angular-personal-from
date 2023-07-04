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

export const submitPersonReducer = createReducer(
    initialPersons,
    on(RegisterActions.submitForm, (state, {person}) => (addPerson(state, person))),
    on(RegisterActions.deletePerson, (state, {id}) => deletePerson(state, id))
)


// export const tableActionsReducer = createReducer(
//     initialPersons,
// )