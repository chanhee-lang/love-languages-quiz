// Layer: Application UseCase

import type { QuizResult } from '../../domain/entities/QuizResult';
import type { IResultEncoder } from '../ports/IResultEncoder';

export class ShareResultUseCase {
  private readonly encoder: IResultEncoder;

  constructor(encoder: IResultEncoder) {
    this.encoder = encoder;
  }

  buildShareUrl(result: QuizResult): string {
    const encoded = this.encoder.encode(result);
    const url = new URL(window.location.href);
    url.search = '';
    url.searchParams.set('result', encoded);
    return url.toString();
  }

  decodeFromParam(param: string): QuizResult | null {
    return this.encoder.decode(param);
  }
}
