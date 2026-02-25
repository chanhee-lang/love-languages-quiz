// Layer: Presentation Utility
// Generates a shareable result image using Canvas API (no external dependency)

import type { QuizResult } from '../../domain/entities/QuizResult';
import { LOVE_LANGUAGE_META } from '../../domain/entities/LoveLanguage';

const W = 1200;
const H = 630;

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export async function generateResultImage(result: QuizResult): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  const primary = LOVE_LANGUAGE_META[result.primaryLanguage];

  // Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, '#0f0f1a');
  bgGrad.addColorStop(0.5, '#141428');
  bgGrad.addColorStop(1, '#0a0a18');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Glow blob top-right
  const glowGrad = ctx.createRadialGradient(W * 0.85, H * 0.1, 0, W * 0.85, H * 0.1, 350);
  glowGrad.addColorStop(0, `${primary.color}30`);
  glowGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = glowGrad;
  ctx.fillRect(0, 0, W, H);

  // Glow blob bottom-left
  const glowGrad2 = ctx.createRadialGradient(W * 0.1, H * 0.9, 0, W * 0.1, H * 0.9, 250);
  glowGrad2.addColorStop(0, '#4ECDC420');
  glowGrad2.addColorStop(1, 'transparent');
  ctx.fillStyle = glowGrad2;
  ctx.fillRect(0, 0, W, H);

  // Left panel: primary language hero
  const panelX = 80;
  const panelY = 60;
  const panelW = 460;
  const panelH = H - 120;

  // Panel background
  ctx.fillStyle = '#1a1a2a';
  roundRect(ctx, panelX, panelY, panelW, panelH, 24);
  ctx.fill();

  // Panel top color accent
  const accentGrad = ctx.createLinearGradient(panelX, panelY, panelX, panelY + 200);
  accentGrad.addColorStop(0, `${primary.color}25`);
  accentGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = accentGrad;
  roundRect(ctx, panelX, panelY, panelW, panelH, 24);
  ctx.fill();

  // Panel border
  ctx.strokeStyle = `${primary.color}40`;
  ctx.lineWidth = 1.5;
  roundRect(ctx, panelX, panelY, panelW, panelH, 24);
  ctx.stroke();

  // Emoji
  ctx.font = '96px serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.fillText(primary.emoji, panelX + panelW / 2, panelY + 160);

  // Badge
  const badgeText = '나의 주요 사랑의 언어';
  ctx.font = 'bold 18px sans-serif';
  const badgeW = ctx.measureText(badgeText).width + 32;
  const badgeX = panelX + (panelW - badgeW) / 2;
  const badgeY = panelY + 185;
  ctx.fillStyle = `${primary.color}25`;
  roundRect(ctx, badgeX, badgeY, badgeW, 36, 18);
  ctx.fill();
  ctx.strokeStyle = `${primary.color}50`;
  ctx.lineWidth = 1;
  roundRect(ctx, badgeX, badgeY, badgeW, 36, 18);
  ctx.stroke();
  ctx.fillStyle = primary.color;
  ctx.textAlign = 'center';
  ctx.fillText(badgeText, panelX + panelW / 2, badgeY + 23);

  // Language name
  ctx.font = 'bold 52px sans-serif';
  ctx.fillStyle = '#f0f0f8';
  ctx.textAlign = 'center';
  ctx.fillText(primary.name, panelX + panelW / 2, panelY + 295);

  // Score highlight
  const primaryScore = result.scores.find(s => s.language === result.primaryLanguage)?.score ?? 0;
  ctx.font = 'bold 28px sans-serif';
  ctx.fillStyle = primary.color;
  ctx.textAlign = 'center';
  ctx.fillText(`${primaryScore}점 / 30점`, panelX + panelW / 2, panelY + 345);

  // Description (word-wrap)
  ctx.font = '20px sans-serif';
  ctx.fillStyle = '#8888aa';
  ctx.textAlign = 'center';
  const descWords = primary.description.split('');
  const lineMax = 22;
  let line = '';
  let lineY = panelY + 395;
  for (const char of descWords) {
    if (line.length >= lineMax) {
      ctx.fillText(line, panelX + panelW / 2, lineY);
      lineY += 30;
      line = char;
    } else {
      line += char;
    }
  }
  if (line) ctx.fillText(line, panelX + panelW / 2, lineY);

  // Right panel: score bars
  const rightX = 600;
  const rightY = 60;
  const rightW = W - rightX - 80;

  // Section title
  ctx.font = 'bold 20px sans-serif';
  ctx.fillStyle = '#5a5a7a';
  ctx.textAlign = 'left';
  ctx.fillText('전체 점수', rightX, rightY + 32);

  // Score bars
  const barStartY = rightY + 60;
  const barHeight = 10;
  const barGap = (panelH - 80) / result.scores.length;
  const maxScore = result.scores[0].score;

  result.scores.forEach((score, i) => {
    const meta = LOVE_LANGUAGE_META[score.language];
    const y = barStartY + i * barGap;
    const isPrimary = score.language === result.primaryLanguage;

    // Row background (highlight primary)
    if (isPrimary) {
      ctx.fillStyle = `${meta.color}10`;
      roundRect(ctx, rightX - 12, y - 20, rightW + 12, barGap - 4, 12);
      ctx.fill();
    }

    // Emoji
    ctx.font = '24px serif';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'left';
    ctx.fillText(meta.emoji, rightX, y + 6);

    // Language name
    ctx.font = isPrimary ? 'bold 20px sans-serif' : '20px sans-serif';
    ctx.fillStyle = isPrimary ? '#f0f0f8' : '#9090b0';
    ctx.textAlign = 'left';
    ctx.fillText(meta.name, rightX + 36, y + 6);

    // Score text
    ctx.font = 'bold 20px sans-serif';
    ctx.fillStyle = isPrimary ? meta.color : '#6060808';
    ctx.textAlign = 'right';
    ctx.fillText(`${score.score}점`, rightX + rightW, y + 6);

    // Bar track
    const trackY = y + 18;
    ctx.fillStyle = '#2e2e42';
    roundRect(ctx, rightX, trackY, rightW, barHeight, 5);
    ctx.fill();

    // Bar fill
    const fillW = maxScore > 0 ? (score.score / maxScore) * rightW : 0;
    if (fillW > 0) {
      const fillGrad = ctx.createLinearGradient(rightX, trackY, rightX + fillW, trackY);
      fillGrad.addColorStop(0, meta.color);
      fillGrad.addColorStop(1, isPrimary ? meta.color : `${meta.color}88`);
      ctx.fillStyle = fillGrad;
      roundRect(ctx, rightX, trackY, fillW, barHeight, 5);
      ctx.fill();

      if (isPrimary) {
        ctx.shadowColor = meta.color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = fillGrad;
        roundRect(ctx, rightX, trackY, fillW, barHeight, 5);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
  });

  // App branding (bottom)
  ctx.font = '20px sans-serif';
  ctx.fillStyle = '#3a3a5a';
  ctx.textAlign = 'right';
  ctx.fillText('💕 사랑의 언어 5가지 테스트', W - 80, H - 32);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Canvas toBlob failed'));
      },
      'image/png'
    );
  });
}
