import { colord } from 'colord'

export function hexToRgba(hex: string) {
  if (hex.length === 9) {
    // 获取透明度的十六进制值并转换为 0-1 之间的小数
    const alpha = Number.parseInt(hex.slice(7, 9), 16) / 255;
    // 获取颜色值（不含透明度）
    const color = hex.slice(0, 7);
    // 转换为 rgba
    const rgb = colord(color).toRgb();
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha.toFixed(2)})`;
  }
  return colord(hex).toRgbString()
}

export function rgbaToHex(rgba: string) {
  const color = colord(rgba);
  const { r, g, b, a } = color.toRgb();

  // 如果存在透明度且不为1，返回8位hex（包含透明度）
  if (a && a !== 1) {
    const alpha = Math.round(a * 255);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}${alpha.toString(16)}`.toUpperCase();
  }

  // 否则返回6位hex
  return color.toHex().toUpperCase();
}