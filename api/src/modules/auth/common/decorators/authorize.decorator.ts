import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { UsersEntity } from "src/modules/user/entities/user.entity";

export const Authorize = createParamDecorator(
  (data: keyof UsersEntity, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest() as Request;

    const user = request.user;

    return data ? user![data] : user;
  }
);