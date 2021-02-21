import { Book } from "./book.model";
import { Reservation } from "./reservation.model";


export class User {
    id!: number;
    email!:string;
    password!: string;
    borrowedBooks!: Reservation[]
}