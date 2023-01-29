export class animal {
    id: number;
    name: string;
    lifespan: number
    email: string


    constructor (id: number, name: string, lifespan: number, email: string) {
        this.id = id
        this.name = name
        this.lifespan = lifespan
        this.email = email
    }
}