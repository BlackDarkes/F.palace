import { Body, Controller, Get, HttpCode, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./common/dto/register.dto";
import { Request, Response } from "express";
import { LoginDto } from "./common/dto/login.dto";
import { Auth } from "./common/decorators/auth.decorator";
import { Authorize } from "./common/decorators/authorize.decorator";
import { UsersEntity } from "../user/entities/user.entity";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("register")
	@HttpCode(201)
	async register(@Body() dto: RegisterDto) {
		await this.authService.register(dto);

    return {
      message: "Вы успешно создали аккаунт!",
    }
	}

	@Post("login")
	@HttpCode(200)
	async login(@Res({ passthrough: true }) res: Response, @Body() dto: LoginDto) {
		const accessToken = await this.authService.login(res, dto);

    return {
      message: "вы успешно вошли в аккаунт!",
      token: accessToken,
    }
	}

  @Post("refresh")
  @HttpCode(200)
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = await this.authService.refresh(req, res);

    return {
      token: refreshToken,
    }
  }

  @Post("logout")
  @HttpCode(200)
  async logout(@Res({ passthrough: true }) res: Response) {
    await this.authService.logout(res);

    return {
      message: "Вы вышли из аккаунта!",
    }
  }

  @Auth()
  @Get("@me")
  @HttpCode(200)
  async me(@Authorize() user) {
    return user;
  }
}
