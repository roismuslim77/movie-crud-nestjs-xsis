import { Transform, Type } from "class-transformer"
import { IsNotEmpty, IsString, Min, ValidateIf } from "class-validator"

export class CreateMovieDto {
    @IsNotEmpty()
    @IsString()
    title : string

    @IsNotEmpty()
    @IsString()
    description : string

    @IsNotEmpty()
    @Type(() => Number)
    @Min(0)
    @Transform(({ value }) => Math.round(value))
    rating: number

    @IsString()
    image : string
}