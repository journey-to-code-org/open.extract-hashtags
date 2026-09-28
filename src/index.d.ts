export interface ExtractOptions { preservePrefix?: boolean; unique?: boolean; }
export function extractHashtags(value: string, options?: ExtractOptions): string[];
export function extractMentions(value: string, options?: ExtractOptions): string[];
export function extractSocialTags(value: string, options?: ExtractOptions): {hashtags:string[];mentions:string[]};

