import {
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";
import { RegisterDto } from "./common/dto/register.dto";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { hash, compare } from "bcrypt";
import { ConfigService } from "@nestjs/config";
import { IPayload } from "./types/jwt.interface";
import { LoginDto } from "./common/dto/login.dto";
import { Request, Response } from "express";
import { isDev } from "src/utils/is-dev.util";

@Injectable()
export class AuthService {
	private readonly JWT_ACCESS_TOKEN_TTL: string;
	private readonly JWT_REFRESH_TOKEN_TTL: string;

	private readonly COOKIE_DOMAIN: string;

	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService,
	) {
		this.JWT_ACCESS_TOKEN_TTL = configService.getOrThrow<string>(
			"JWT_ACCESS_TOKEN_TTL",
		);
		this.JWT_REFRESH_TOKEN_TTL = configService.getOrThrow<string>(
			"JWT_REFRESH_TOKEN_TTL",
		);

		this.COOKIE_DOMAIN = configService.getOrThrow<string>("COOKIE_DOMAIN");
	}

	async register(dto: RegisterDto) {
		const { name, email, password } = dto;
		const user = await this.userService.getByEmail(email);

		if (user) {
			throw new NotFoundException(
				"Пользователь с такой почтой уже существует!",
			);
		}

		await this.userService.create({
			name,
			email,
			password: await hash(password, 10),
		});
	}

  async validate(id: string) {
    const user = this.userService.getById(id);

    if (!user) {
      throw new NotFoundException("пользователь не найден!");
    }

    return user;
  }

	async login(res: Response, dto: LoginDto) {
		const { email, password } = dto;
		const user = await this.userService.getByEmail(email);

		if (!user || !compare(password, user.password)) {
			throw new UnauthorizedException("Неверный логин или пароль!");
		}

		return this.auth(res, user.id);
	}

  async refresh(req: Request, res: Response) {
    const refreshToken = req?.cookies["refresh_token"]

    if (!refreshToken) {
      throw new UnauthorizedException("Недействительный refresh токен!");
    }

    const payload: IPayload = await this.jwtService.verifyAsync(refreshToken);

    if (payload) {
      const user = await this.userService.getById(payload.id);

      if (!user) {
        throw new NotFoundException("пользователь не найден!");
      }

      return this.auth(res, user.id);
    }
  }

  async logout(res: Response) {
    this.setCookie(res, "refresh_token", new Date(0));
  }

	private createTokens(id: string) {
		const payload: IPayload = { id };

		const accessToken = this.jwtService.sign(payload, {
			expiresIn: this.JWT_ACCESS_TOKEN_TTL,
		});

		const refreshToken = this.jwtService.sign(payload, {
			expiresIn: this.JWT_REFRESH_TOKEN_TTL,
		});

		return {
			accessToken,
			refreshToken,
		};
	}

	private setCookie(res: Response, value: string, expires: Date) {
		res.cookie("refresh_token", value, {
			httpOnly: true,
			domain: this.COOKIE_DOMAIN,
			expires,
			secure: !isDev(this.configService),
			sameSite: isDev(this.configService) ? "none" : "lax",
		});
	}

	private auth(res: Response, id: string) {
		const { accessToken, refreshToken } = this.createTokens(id);

		this.setCookie(
			res,
			refreshToken,
			new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
		);

		return accessToken;
	}
}
