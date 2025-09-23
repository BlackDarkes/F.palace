import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async getByEmail(email: string): Promise<UsersEntity | null> {
    return this.userRepository.findOne({ where: { email } })
  }

  async getById(id: string): Promise<UsersEntity | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: Partial<UsersEntity>) {
    const newUser = this.userRepository.create(user);
    const saveUser = this.userRepository.save(newUser);

    return saveUser;
  }
}
