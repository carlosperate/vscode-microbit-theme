export function alpha(hex: string, a: number): string {
  const base = hex.length === 7 ? hex : hex.slice(0, 7);
  const ai = Math.round(a * 255);
  return base + ai.toString(16).padStart(2, "0");
}

export type Theme = {
  $schema: "vscode://schemas/color-theme";
  name: string;
  type: "light" | "dark";
  semanticHighlighting: true;
  colors: Record<string, string>;
  tokenColors: Array<{
    name: string;
    scope: string[];
    settings: { foreground?: string; background?: string; fontStyle?: string };
  }>;
  semanticTokenColors: Record<string, { foreground?: string; italic?: boolean }>;
};
