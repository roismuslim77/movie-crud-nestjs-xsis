import { Column, PrimaryGeneratedColumn, Entity, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('tb_movies')
export class MovieEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar' })
    title: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;

    @Column({ type: 'float' })
    rating: number;

    @Column({ type: 'varchar', length: 255 })
    image: string;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;
}
