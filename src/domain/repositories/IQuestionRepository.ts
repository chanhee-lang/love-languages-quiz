// Layer: Domain Port (Repository Interface)

import type { Question } from '../entities/Question';

export interface IQuestionRepository {
  getAll(): Question[];
  getById(id: number): Question | undefined;
  count(): number;
}
