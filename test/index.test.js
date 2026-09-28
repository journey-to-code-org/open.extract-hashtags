import test from "node:test";
import assert from "node:assert/strict";
import { extractHashtags,extractMentions,extractSocialTags } from "../src/index.js";
test("extracts hashtags",()=>assert.deepEqual(extractHashtags("Hi #JavaScript #web"),["#JavaScript","#web"]));
test("extracts mentions",()=>assert.deepEqual(extractMentions("Hi @mnix-dev"),["@mnix-dev"]));
test("returns both",()=>assert.deepEqual(extractSocialTags("@a #b"),{hashtags:["#b"],mentions:["@a"]}));
