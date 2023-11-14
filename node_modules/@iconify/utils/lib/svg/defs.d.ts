interface SplitSVGDefsResult {
    defs: string;
    content: string;
}
/**
 * Extract definitions from SVG
 */
declare function splitSVGDefs(content: string): SplitSVGDefsResult;
/**
 * Merge defs and content
 */
declare function mergeDefsAndContent(defs: string, content: string): string;
/**
 * Wrap SVG content, without wrapping definitions
 */
declare function wrapSVGContent(body: string, start: string, end: string): string;

export { mergeDefsAndContent, splitSVGDefs, wrapSVGContent };
