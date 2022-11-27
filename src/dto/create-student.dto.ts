import { IsEnum, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";
import { GenderTypesEnum } from "../enum";


export class CreateStudentDto {
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(45)
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly roleNumber: number;
    
    @IsNumber()
    @IsNotEmpty()
    readonly class: number;
    
    @IsEnum(GenderTypesEnum)
    @IsNotEmpty()
    readonly gender: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    @Max(20)
    readonly marks: number;
}