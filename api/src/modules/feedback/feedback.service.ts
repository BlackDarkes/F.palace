import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FeedbackEntity } from "./entities/feedback.entity";
import { Repository } from "typeorm";
import { FeedbackDto } from "./common/dto/feedback.dto";

@Injectable()
export class FeedbackService {
	constructor(
		@InjectRepository(FeedbackEntity)
		private readonly feedbackRepository: Repository<FeedbackEntity>,
	) {}

	async getAll(): Promise<FeedbackEntity[] | null | undefined> {
		return this.feedbackRepository
			.createQueryBuilder("feedback")
			.leftJoin("feedback.user", "user")
			.select([
				"feedback.id as id",
				"user.name as name",
				"feedback.message as message"
			])
			.getRawMany();
	}

	async getById(id: string): Promise<FeedbackEntity | null | undefined> {
		return this.feedbackRepository
			.createQueryBuilder("feedback")
			.leftJoin("feedback.user", "user")
			.select([
				"feedback.id as id",
				"user.name as name",
				"feedback.message as message"
			])
			.where("user.id = :userId", { userId: id })
			.getRawOne();
	}

	async getByIdAll(id: string): Promise<FeedbackEntity[] | null | undefined> {
		return this.feedbackRepository
			.createQueryBuilder("feedback")
			.leftJoin("feedback.user", "user")
			.select([
				"feedback.id as id",
				"user.name as name",
				"feedback.message as message"
			])
			.where("user.id = :userId", { userId: id })
			.getRawMany();
	}

	async create(feedback: FeedbackDto): Promise<FeedbackEntity | null> {
		const newFeedback: FeedbackDto = this.feedbackRepository.create(feedback);
		const saveFeedback = await this.feedbackRepository.save(newFeedback);

		return saveFeedback;
	}

	async update(
		feedback: FeedbackDto,
		id: string,
	): Promise<FeedbackEntity | null | undefined> {
		const existing: FeedbackEntity | null | undefined = await this.getById(id);
		if (!existing) {
			return null;
		}
		await this.feedbackRepository.update(id, feedback);
		return this.getById(id);
	}

	async delete(id: string): Promise<FeedbackEntity | null | undefined> {
		const existing: FeedbackEntity | null | undefined = await this.getById(id);
		if (!existing) {
			return null;
		}
		await this.feedbackRepository.delete(id);
		return this.getById(id);
	}
}
