import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { FeedbackService } from "./feedback.service";
import { FeedbackDto } from "./common/dto/feedback.dto";

@Controller("feedback")
export class FeedbackController {
	constructor(private readonly feedbackService: FeedbackService) {}

	@Get("")
	@HttpCode(200)
	async getAll() {
		const feedbacks = await this.feedbackService.getAll();

		if (!feedbacks || feedbacks.length === 0) {
			throw new NotFoundException("Комментарии не найдены!");
		}

		return feedbacks;
	}

	@Get(":id")
	@HttpCode(200)
	async getById(@Param("id") id: string) {
		const feedback = await this.feedbackService.getById(id);

		if (!feedback) {
			throw new NotFoundException("Комментарий не найден!");
		}

		return feedback;
	}

	@Post("")
	@HttpCode(201)
	async create(@Body() dto: FeedbackDto) {
		await this.feedbackService.create(dto);

		return {
			message: "Комментарий создан!",
		};
	}

	@Put(":id")
	@HttpCode(201)
	async update(@Param("id") id: string, @Body() dto: FeedbackDto) {
		const feedback = await this.feedbackService.getById(id);

		if (!feedback) {
			throw new NotFoundException("Комментарий не найден!");
		}

		await this.feedbackService.update(dto, id);

		return {
			message: "Комментарий обновлен!",
		};
	}

	@Delete(":id")
	@HttpCode(200)
	async delete(@Param("id") id: string) {
		const feedback = await this.feedbackService.getById(id);

		if (!feedback) {
			throw new NotFoundException("Комментарий не найден!");
		}

		await this.feedbackService.delete(id);

		return {
			message: "Комментарий удален!",
		};
	}
}
