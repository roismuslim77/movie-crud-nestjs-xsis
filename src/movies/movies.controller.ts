import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MovieService } from './movies.service';
import { CreateMovieDto } from './dto/create_movie.dto';
import { UpdateMovieDto } from './dto/update_movie.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
)
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.movieService.findOne(id);
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete(':id')
  getDetailPPOBPriceList(@Param('id') id: number) {
    return this.movieService.delete(id)
  }
}
