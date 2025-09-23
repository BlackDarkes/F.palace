import { IsString, MinLength } from "class-validator";

export class FeedbackDto {
  @IsString()
  @MinLength(5)
  message: string
}