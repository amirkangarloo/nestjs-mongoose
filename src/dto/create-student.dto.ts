import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";
import { GenderTypesEnum } from "../enum";


export class CreateStudentDto {
    
    @ApiProperty({
        type: 'string',
        required: true,
        maxLength: 45,
        example: 'Amir Kangarloo',
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(45)
    readonly name: string;

    @ApiProperty({
        type: 'number',
        required: true,
        example: 1,
    })
    @IsNumber()
    @IsNotEmpty()
    readonly roleNumber: number;
    
    @ApiProperty({
        type: 'number',
        required: true,
        example: 101,
    })
    @IsNumber()
    @IsNotEmpty()
    readonly class: number;
    
    @ApiProperty({
        enum: GenderTypesEnum,
        required: true,
        example: 'mail',
    })
    @IsEnum(GenderTypesEnum)
    @IsNotEmpty()
    readonly gender: string;

    @ApiProperty({
        type: 'number',
        required: true,
        maximum: 20,
        minimum: 0,
        example: 18,
    })
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    @Max(20)
    readonly marks: number;
}