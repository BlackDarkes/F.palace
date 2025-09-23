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

	async getAll(): Promise<FeedbackEntity[] | null> {
		return this.feedbackRepository.find();
	}

	async getById(id: string): Promise<FeedbackEntity | null> {
		return this.feedbackRepository.findOne({ where: { id } });
	}

	async create(feedback: FeedbackDto): Promise<FeedbackEntity | null> {
		const newFeedback: FeedbackDto = this.feedbackRepository.create(feedback);
		const saveFeedback = await this.feedbackRepository.save(newFeedback);

		return saveFeedback;
	}

	async update(
		feedback: FeedbackDto,
		id: string,
	): Promise<FeedbackEntity | null> {
		const existing: FeedbackEntity | null = await this.getById(id);
		if (!existing) {
			return null;
		}
		await this.feedbackRepository.update(id, feedback);
		return this.getById(id);
	}

	async delete(id: string): Promise<FeedbackEntity | null> {
		const existing: FeedbackEntity | null = await this.getById(id);
		if (!existing) {
			return null;
		}
		await this.feedbackRepository.delete(id);
		return this.getById(id);
	}
}
