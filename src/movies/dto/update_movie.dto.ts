import { Transform, Type } from "class-transformer"
import { IsNotEmpty, IsString, Min, ValidateIf } from "class-validator"

export class UpdateMovieDto {
    @IsString()
    @ValidateIf(val => val == null)
    title : string

    @IsString()
    @ValidateIf(val => val == null)
    description : string

    @Type(() => Number)
    @ValidateIf(val => val == null)
    @Min(0)
    rating: number

    @IsString()
    @ValidateIf(val => val == null)
    image : string
}