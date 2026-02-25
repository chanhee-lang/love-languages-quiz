// Layer: Infrastructure Repository

import type { IQuestionRepository } from '../../domain/repositories/IQuestionRepository';
import type { Question } from '../../domain/entities/Question';
import { QUESTIONS } from '../data/questions';

export class StaticQuestionRepository implements IQuestionRepository {
  getAll(): Question[] {
    return QUESTIONS;
  }

  getById(id: number): Question | undefined {
    return QUESTIONS.find((q) => q.id === id);
  }

  count(): number {
    return QUESTIONS.length;
  }
}
