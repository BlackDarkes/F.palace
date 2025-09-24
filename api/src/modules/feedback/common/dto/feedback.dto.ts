import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class FeedbackDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  message: string
}