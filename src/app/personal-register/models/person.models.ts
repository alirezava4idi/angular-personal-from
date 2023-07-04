import { Address } from "./address.models";

export interface Person {
    id?: number,
    fname: string,
    lname: string,
    nationalCode: string,
    dob: string,
    gender?: string,
    address?: Address
}