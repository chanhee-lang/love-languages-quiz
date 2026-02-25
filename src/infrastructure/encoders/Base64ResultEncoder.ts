// Layer: Infrastructure Encoder

import type { IResultEncoder } from '../../application/ports/IResultEncoder';
import type { QuizResult } from '../../domain/entities/QuizResult';

export class Base64ResultEncoder implements IResultEncoder {
  encode(result: QuizResult): string {
    const json = JSON.stringify(result);
    return btoa(encodeURIComponent(json))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  decode(encoded: string): QuizResult | null {
    try {
      const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
      const json = decodeURIComponent(atob(base64));
      return JSON.parse(json) as QuizResult;
    } catch {
      return null;
    }
  }
}
