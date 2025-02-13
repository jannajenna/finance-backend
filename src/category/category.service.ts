import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
//import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  //findOne(id: number) {
  //return `This action returns a #${id} category`;
  //}

  //update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //return `This action updates a #${id} category`;
  //}

  //remove(id: number) {
  //  return `This action removes a #${id} category`;
  //}
}
