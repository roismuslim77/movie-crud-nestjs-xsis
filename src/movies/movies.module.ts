import { SuccessResponseHelper } from "src/common/responses/sucess.response";
import { MovieEntity } from "./entities/movie.entity";
import { MovieController } from "./movies.controller";
import { MovieService } from "./movies.service";
import { ErrorResponseHelper } from "src/common/responses/error.response";
import { MovieModel } from "./movies.model";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieEntity]),
  ],
  controllers: [MovieController],
  providers: [
    MovieService,
    MovieModel,
    SuccessResponseHelper,
    ErrorResponseHelper,
  ],
})
export class MovieModule {}
