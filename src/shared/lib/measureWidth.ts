import { createCanvas } from "canvas";

export default function measureTextWidth(text: string) {
  const canvas = createCanvas(1, 1);
  const ctx = canvas.getContext("2d");

  const metrics = ctx.measureText(text);

  return metrics.width;
}
