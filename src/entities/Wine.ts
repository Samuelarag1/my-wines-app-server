import { Column, Entity,CreateDateColumn,UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Wine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    store?: string;

    @Column()
    year: number;

    @Column()
    grape?: string;

    @Column()
    rating: number;

    @Column()
    picture: string;

    @CreateDateColumn()
    createdAt: Date;


    @UpdateDateColumn()
    updatedAt: Date;


    // @ManyToOne(() => User, user => user.wines)
    // user: User;
}
