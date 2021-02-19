import { Book } from "./book.model";

export class User {
    email!:string;
    password!: string;
    borrowedBooks?: Book[]
}