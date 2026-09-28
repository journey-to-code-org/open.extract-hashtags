function extract(value,prefix,options={}) {
  if (typeof value !== "string") throw new TypeError("Expected value to be a string");
  const preservePrefix = options.preservePrefix ?? true;
  const dedupe = options.unique ?? true;
  const pattern = prefix === "#"
    ? /(^|[^\p{L}\p{N}_])#([\p{L}\p{N}_]+)/gu
    : /(^|[^\p{L}\p{N}_])@([\p{L}\p{N}_.-]+)/gu;
  const out = Array.from(value.matchAll(pattern),m=>preservePrefix?prefix+m[2]:m[2]);
  return dedupe ? [...new Set(out)] : out;
}
export const extractHashtags=(v,o)=>extract(v,"#",o);
export const extractMentions=(v,o)=>extract(v,"@",o);
export const extractSocialTags=(v,o)=>({hashtags:extractHashtags(v,o),mentions:extractMentions(v,o)});
