/**
 * Controls how a component handles text that exceeds its available space.
 * All values are mutually exclusive, so they belong on a single prop rather
 * than several booleans — this removes any need for precedence rules.
 *
 * - `"truncate-end"` — clip and show an ellipsis at the end (single line).
 * - `"truncate-start"` — clip and show an ellipsis at the start (single line).
 * - `"break-word"` — allow long words to break only when they would overflow.
 * - `"break-all"` — allow breaking between any two characters.
 * - `"no-wrap"` — keep everything on one line (no wrapping, no ellipsis).
 *
 * Note: the `truncate-*` values only take visible effect when the element has
 * a bounded width (and is not a flex container). In a `DataGrid` the column
 * usually supplies the width constraint; for freeform usage it is not automatic.
 */
export type TextContainType = "truncate-end" | "truncate-start" | "break-word" | "break-all" | "no-wrap";
/**
 * Maps each {@link TextContainType} value to its `jn:`-prefixed Tailwind classes.
 * Shared so every text-bearing component applies identical behavior and the
 * value vocabulary cannot drift between components.
 *
 * `jn:truncate` already expands to `overflow: hidden; text-overflow: ellipsis;
 * white-space: nowrap`. `truncate-start` additionally flips the inline
 * direction so the ellipsis falls at the start of the string.
 */
export declare const textContainStyles: Record<TextContainType, string>;
//# sourceMappingURL=textContain.d.ts.map