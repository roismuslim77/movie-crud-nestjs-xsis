import { Injectable } from "@nestjs/common";
import { MovieModel } from "./movies.model";
import { SuccessResponseHelper } from "src/common/responses/sucess.response";
import { ErrorResponseHelper } from "src/common/responses/error.response";
import { CreateMovieDto } from "./dto/create_movie.dto";
import { UpdateMovieDto } from "./dto/update_movie.dto";

@Injectable()
export class MovieService {
  constructor(
    private movieModel: MovieModel,
    private successResponseHelper: SuccessResponseHelper,
    private errorResponseHelper: ErrorResponseHelper,
  ){}

  async findAll() {
    const movies = await this.movieModel.getMovies();

    let success_response: any = await this.successResponseHelper.returnSuccessResponse(200, 'success')
    success_response.data = movies
    return success_response
  }

  async findOne(id: number) {
    const movie = await this.movieModel.getOneMovie(id)
    if(!movie) {
        return this.errorResponseHelper.returnErrorResponse(404, 'id not found')
    }

    let success_response: any = await this.successResponseHelper.returnSuccessResponse(200, 'success')
    success_response.data = movie
    return success_response
  }

  async create(createMovieDto: CreateMovieDto) {
    const movie = await this.movieModel.createMovie(createMovieDto)

    let success_response: any = await this.successResponseHelper.returnSuccessResponse(200, 'success created')
    success_response.data = createMovieDto
    return success_response
  }

  async update(id: number, updateMovieDto: UpdateMovieDto){
    const movie = await this.movieModel.updateMovie(id, updateMovieDto)

    const check = await this.movieModel.getOneMovie(id)
    if(!check) {
        return this.errorResponseHelper.returnErrorResponse(404, 'id not found')
    }

    let success_response: any = await this.successResponseHelper.returnSuccessResponse(200, 'success updated')
    success_response.data = updateMovieDto
    return success_response
  }

  async delete(id: number){
    const check = await this.movieModel.getOneMovie(id)
    if(!check) {
        return this.errorResponseHelper.returnErrorResponse(404, 'id not found')
    }

    await this.movieModel.deleteMovie(id)
    
    let success_response: any = await this.successResponseHelper.returnSuccessResponse(200, 'success deleted')
    return success_response
  }

}