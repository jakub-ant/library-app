import { Book } from "./book.model";

export class User {
    id!: number;
    email!:string;
    password!: string;
    borrowedBooks!: Book[]
}