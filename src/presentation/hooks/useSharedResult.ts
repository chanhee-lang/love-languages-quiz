// Layer: Presentation Hook

import { useMemo } from 'react';
import type { QuizResult } from '../../domain/entities/QuizResult';
import { Base64ResultEncoder } from '../../infrastructure/encoders/Base64ResultEncoder';
import { ShareResultUseCase } from '../../application/usecases/ShareResultUseCase';

const encoder = new Base64ResultEncoder();
const shareUseCase = new ShareResultUseCase(encoder);

export function useSharedResult(): QuizResult | null {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get('result');
    if (!param) return null;
    return shareUseCase.decodeFromParam(param);
  }, []);
}

export function useShareUrl(result: QuizResult | null): string | null {
  return useMemo(() => {
    if (!result) return null;
    return shareUseCase.buildShareUrl(result);
  }, [result]);
}
