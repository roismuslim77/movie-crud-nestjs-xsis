import { InjectRepository } from "@nestjs/typeorm";
import { MovieEntity } from "./entities/movie.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class MovieModel {
  constructor(
    @InjectRepository(MovieEntity) private repoMovie: Repository<MovieEntity>,
  ) {}

  async getMovies(){
    return this.repoMovie.find()
  }

  async getOneMovie(id: number){
    return this.repoMovie.findOne({where: {id: id}})
  }
  
  async createMovie(payload){
    return this.repoMovie.insert(payload)
  }

  async updateMovie(id, paylaod){
    return this.repoMovie.update({id}, paylaod)
  }

  async deleteMovie(id: number) {
    return this.repoMovie.delete({id: id})
  }
}