import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    //@ts-ignore
    id: number

    @Column()
    //@ts-ignore
    firstname: string

    @Column()
    //@ts-ignore
    lastname: string

    @Column()
    //@ts-ignore
    age: number

}
