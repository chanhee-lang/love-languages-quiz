// Layer: Application Port

import type { QuizResult } from '../../domain/entities/QuizResult';

export interface IResultEncoder {
  encode(result: QuizResult): string;
  decode(encoded: string): QuizResult | null;
}
