// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file google/protobuf/test_messages_edition2023.proto (package protobuf_test_messages.editions, edition 2023)
// option features.message_encoding = DELIMITED;
/* eslint-disable */

import type { GenEnum, GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, extDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/protobuf/test_messages_edition2023.proto.
 */
export const file_google_protobuf_test_messages_edition2023: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvcHJvdG9idWYvdGVzdF9tZXNzYWdlc19lZGl0aW9uMjAyMy5wcm90bxIfcHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucyL/NgoXVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMSFgoOb3B0aW9uYWxfaW50MzIYASABKAUSFgoOb3B0aW9uYWxfaW50NjQYAiABKAMSFwoPb3B0aW9uYWxfdWludDMyGAMgASgNEhcKD29wdGlvbmFsX3VpbnQ2NBgEIAEoBBIXCg9vcHRpb25hbF9zaW50MzIYBSABKBESFwoPb3B0aW9uYWxfc2ludDY0GAYgASgSEhgKEG9wdGlvbmFsX2ZpeGVkMzIYByABKAcSGAoQb3B0aW9uYWxfZml4ZWQ2NBgIIAEoBhIZChFvcHRpb25hbF9zZml4ZWQzMhgJIAEoDxIZChFvcHRpb25hbF9zZml4ZWQ2NBgKIAEoEBIWCg5vcHRpb25hbF9mbG9hdBgLIAEoAhIXCg9vcHRpb25hbF9kb3VibGUYDCABKAESFQoNb3B0aW9uYWxfYm9vbBgNIAEoCBIXCg9vcHRpb25hbF9zdHJpbmcYDiABKAkSFgoOb3B0aW9uYWxfYnl0ZXMYDyABKAwSbgoXb3B0aW9uYWxfbmVzdGVkX21lc3NhZ2UYEiABKAsyRi5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk5lc3RlZE1lc3NhZ2VCBaoBAigBEmMKGG9wdGlvbmFsX2ZvcmVpZ25fbWVzc2FnZRgTIAEoCzI6LnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuRm9yZWlnbk1lc3NhZ2VFZGl0aW9uMjAyM0IFqgECKAESYQoUb3B0aW9uYWxfbmVzdGVkX2VudW0YFSABKA4yQy5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk5lc3RlZEVudW0SVgoVb3B0aW9uYWxfZm9yZWlnbl9lbnVtGBYgASgOMjcucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5Gb3JlaWduRW51bUVkaXRpb24yMDIzEiEKFW9wdGlvbmFsX3N0cmluZ19waWVjZRgYIAEoCUICCAISGQoNb3B0aW9uYWxfY29yZBgZIAEoCUICCAESWgoRcmVjdXJzaXZlX21lc3NhZ2UYGyABKAsyOC5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzQgWqAQIoARIWCg5yZXBlYXRlZF9pbnQzMhgfIAMoBRIWCg5yZXBlYXRlZF9pbnQ2NBggIAMoAxIXCg9yZXBlYXRlZF91aW50MzIYISADKA0SFwoPcmVwZWF0ZWRfdWludDY0GCIgAygEEhcKD3JlcGVhdGVkX3NpbnQzMhgjIAMoERIXCg9yZXBlYXRlZF9zaW50NjQYJCADKBISGAoQcmVwZWF0ZWRfZml4ZWQzMhglIAMoBxIYChByZXBlYXRlZF9maXhlZDY0GCYgAygGEhkKEXJlcGVhdGVkX3NmaXhlZDMyGCcgAygPEhkKEXJlcGVhdGVkX3NmaXhlZDY0GCggAygQEhYKDnJlcGVhdGVkX2Zsb2F0GCkgAygCEhcKD3JlcGVhdGVkX2RvdWJsZRgqIAMoARIVCg1yZXBlYXRlZF9ib29sGCsgAygIEhcKD3JlcGVhdGVkX3N0cmluZxgsIAMoCRIWCg5yZXBlYXRlZF9ieXRlcxgtIAMoDBJuChdyZXBlYXRlZF9uZXN0ZWRfbWVzc2FnZRgwIAMoCzJGLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMuTmVzdGVkTWVzc2FnZUIFqgECKAESYwoYcmVwZWF0ZWRfZm9yZWlnbl9tZXNzYWdlGDEgAygLMjoucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5Gb3JlaWduTWVzc2FnZUVkaXRpb24yMDIzQgWqAQIoARJhChRyZXBlYXRlZF9uZXN0ZWRfZW51bRgzIAMoDjJDLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMuTmVzdGVkRW51bRJWChVyZXBlYXRlZF9mb3JlaWduX2VudW0YNCADKA4yNy5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLkZvcmVpZ25FbnVtRWRpdGlvbjIwMjMSIQoVcmVwZWF0ZWRfc3RyaW5nX3BpZWNlGDYgAygJQgIIAhIZCg1yZXBlYXRlZF9jb3JkGDcgAygJQgIIARIbCgxwYWNrZWRfaW50MzIYSyADKAVCBaoBAhgBEhsKDHBhY2tlZF9pbnQ2NBhMIAMoA0IFqgECGAESHAoNcGFja2VkX3VpbnQzMhhNIAMoDUIFqgECGAESHAoNcGFja2VkX3VpbnQ2NBhOIAMoBEIFqgECGAESHAoNcGFja2VkX3NpbnQzMhhPIAMoEUIFqgECGAESHAoNcGFja2VkX3NpbnQ2NBhQIAMoEkIFqgECGAESHQoOcGFja2VkX2ZpeGVkMzIYUSADKAdCBaoBAhgBEh0KDnBhY2tlZF9maXhlZDY0GFIgAygGQgWqAQIYARIeCg9wYWNrZWRfc2ZpeGVkMzIYUyADKA9CBaoBAhgBEh4KD3BhY2tlZF9zZml4ZWQ2NBhUIAMoEEIFqgECGAESGwoMcGFja2VkX2Zsb2F0GFUgAygCQgWqAQIYARIcCg1wYWNrZWRfZG91YmxlGFYgAygBQgWqAQIYARIaCgtwYWNrZWRfYm9vbBhXIAMoCEIFqgECGAESZgoScGFja2VkX25lc3RlZF9lbnVtGFggAygOMkMucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5UZXN0QWxsVHlwZXNFZGl0aW9uMjAyMy5OZXN0ZWRFbnVtQgWqAQIYARIdCg51bnBhY2tlZF9pbnQzMhhZIAMoBUIFqgECGAISHQoOdW5wYWNrZWRfaW50NjQYWiADKANCBaoBAhgCEh4KD3VucGFja2VkX3VpbnQzMhhbIAMoDUIFqgECGAISHgoPdW5wYWNrZWRfdWludDY0GFwgAygEQgWqAQIYAhIeCg91bnBhY2tlZF9zaW50MzIYXSADKBFCBaoBAhgCEh4KD3VucGFja2VkX3NpbnQ2NBheIAMoEkIFqgECGAISHwoQdW5wYWNrZWRfZml4ZWQzMhhfIAMoB0IFqgECGAISHwoQdW5wYWNrZWRfZml4ZWQ2NBhgIAMoBkIFqgECGAISIAoRdW5wYWNrZWRfc2ZpeGVkMzIYYSADKA9CBaoBAhgCEiAKEXVucGFja2VkX3NmaXhlZDY0GGIgAygQQgWqAQIYAhIdCg51bnBhY2tlZF9mbG9hdBhjIAMoAkIFqgECGAISHgoPdW5wYWNrZWRfZG91YmxlGGQgAygBQgWqAQIYAhIcCg11bnBhY2tlZF9ib29sGGUgAygIQgWqAQIYAhJoChR1bnBhY2tlZF9uZXN0ZWRfZW51bRhmIAMoDjJDLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMuTmVzdGVkRW51bUIFqgECGAISZAoPbWFwX2ludDMyX2ludDMyGDggAygLMksucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5UZXN0QWxsVHlwZXNFZGl0aW9uMjAyMy5NYXBJbnQzMkludDMyRW50cnkSZAoPbWFwX2ludDY0X2ludDY0GDkgAygLMksucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5UZXN0QWxsVHlwZXNFZGl0aW9uMjAyMy5NYXBJbnQ2NEludDY0RW50cnkSaAoRbWFwX3VpbnQzMl91aW50MzIYOiADKAsyTS5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk1hcFVpbnQzMlVpbnQzMkVudHJ5EmgKEW1hcF91aW50NjRfdWludDY0GDsgAygLMk0ucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5UZXN0QWxsVHlwZXNFZGl0aW9uMjAyMy5NYXBVaW50NjRVaW50NjRFbnRyeRJoChFtYXBfc2ludDMyX3NpbnQzMhg8IAMoCzJNLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMuTWFwU2ludDMyU2ludDMyRW50cnkSaAoRbWFwX3NpbnQ2NF9zaW50NjQYPSADKAsyTS5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk1hcFNpbnQ2NFNpbnQ2NEVudHJ5EmwKE21hcF9maXhlZDMyX2ZpeGVkMzIYPiADKAsyTy5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk1hcEZpeGVkMzJGaXhlZDMyRW50cnkSbAoTbWFwX2ZpeGVkNjRfZml4ZWQ2NBg/IAMoCzJPLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMuTWFwRml4ZWQ2NEZpeGVkNjRFbnRyeRJwChVtYXBfc2ZpeGVkMzJfc2ZpeGVkMzIYQCADKAsyUS5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk1hcFNmaXhlZDMyU2ZpeGVkMzJFbnRyeRJwChVtYXBfc2ZpeGVkNjRfc2ZpeGVkNjQYQSADKAsyUS5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk1hcFNmaXhlZDY0U2ZpeGVkNjRFbnRyeRJkCg9tYXBfaW50MzJfZmxvYXQYQiADKAsySy5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk1hcEludDMyRmxvYXRFbnRyeRJmChBtYXBfaW50MzJfZG91YmxlGEMgAygLMkwucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5UZXN0QWxsVHlwZXNFZGl0aW9uMjAyMy5NYXBJbnQzMkRvdWJsZUVudHJ5EmAKDW1hcF9ib29sX2Jvb2wYRCADKAsySS5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk1hcEJvb2xCb29sRW50cnkSaAoRbWFwX3N0cmluZ19zdHJpbmcYRSADKAsyTS5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk1hcFN0cmluZ1N0cmluZ0VudHJ5EmYKEG1hcF9zdHJpbmdfYnl0ZXMYRiADKAsyTC5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk1hcFN0cmluZ0J5dGVzRW50cnkSdwoZbWFwX3N0cmluZ19uZXN0ZWRfbWVzc2FnZRhHIAMoCzJULnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMuTWFwU3RyaW5nTmVzdGVkTWVzc2FnZUVudHJ5EnkKGm1hcF9zdHJpbmdfZm9yZWlnbl9tZXNzYWdlGEggAygLMlUucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5UZXN0QWxsVHlwZXNFZGl0aW9uMjAyMy5NYXBTdHJpbmdGb3JlaWduTWVzc2FnZUVudHJ5EnEKFm1hcF9zdHJpbmdfbmVzdGVkX2VudW0YSSADKAsyUS5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk1hcFN0cmluZ05lc3RlZEVudW1FbnRyeRJzChdtYXBfc3RyaW5nX2ZvcmVpZ25fZW51bRhKIAMoCzJSLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMuTWFwU3RyaW5nRm9yZWlnbkVudW1FbnRyeRIWCgxvbmVvZl91aW50MzIYbyABKA1IABJtChRvbmVvZl9uZXN0ZWRfbWVzc2FnZRhwIAEoCzJGLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMuTmVzdGVkTWVzc2FnZUIFqgECKAFIABIWCgxvbmVvZl9zdHJpbmcYcSABKAlIABIVCgtvbmVvZl9ieXRlcxhyIAEoDEgAEhQKCm9uZW9mX2Jvb2wYcyABKAhIABIWCgxvbmVvZl91aW50NjQYdCABKARIABIVCgtvbmVvZl9mbG9hdBh1IAEoAkgAEhYKDG9uZW9mX2RvdWJsZRh2IAEoAUgAElkKCm9uZW9mX2VudW0YdyABKA4yQy5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLlRlc3RBbGxUeXBlc0VkaXRpb24yMDIzLk5lc3RlZEVudW1IABJeCg1ncm91cGxpa2V0eXBlGMkBIAEoCzJGLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMuR3JvdXBMaWtlVHlwZRJgCg9kZWxpbWl0ZWRfZmllbGQYygEgASgLMkYucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5UZXN0QWxsVHlwZXNFZGl0aW9uMjAyMy5Hcm91cExpa2VUeXBlGnAKDU5lc3RlZE1lc3NhZ2USCQoBYRgBIAEoBRJUCgtjb3JlY3Vyc2l2ZRgCIAEoCzI4LnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjNCBaoBAigBGjQKEk1hcEludDMySW50MzJFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAU6AjgBGjQKEk1hcEludDY0SW50NjRFbnRyeRILCgNrZXkYASABKAMSDQoFdmFsdWUYAiABKAM6AjgBGjYKFE1hcFVpbnQzMlVpbnQzMkVudHJ5EgsKA2tleRgBIAEoDRINCgV2YWx1ZRgCIAEoDToCOAEaNgoUTWFwVWludDY0VWludDY0RW50cnkSCwoDa2V5GAEgASgEEg0KBXZhbHVlGAIgASgEOgI4ARo2ChRNYXBTaW50MzJTaW50MzJFbnRyeRILCgNrZXkYASABKBESDQoFdmFsdWUYAiABKBE6AjgBGjYKFE1hcFNpbnQ2NFNpbnQ2NEVudHJ5EgsKA2tleRgBIAEoEhINCgV2YWx1ZRgCIAEoEjoCOAEaOAoWTWFwRml4ZWQzMkZpeGVkMzJFbnRyeRILCgNrZXkYASABKAcSDQoFdmFsdWUYAiABKAc6AjgBGjgKFk1hcEZpeGVkNjRGaXhlZDY0RW50cnkSCwoDa2V5GAEgASgGEg0KBXZhbHVlGAIgASgGOgI4ARo6ChhNYXBTZml4ZWQzMlNmaXhlZDMyRW50cnkSCwoDa2V5GAEgASgPEg0KBXZhbHVlGAIgASgPOgI4ARo6ChhNYXBTZml4ZWQ2NFNmaXhlZDY0RW50cnkSCwoDa2V5GAEgASgQEg0KBXZhbHVlGAIgASgQOgI4ARo0ChJNYXBJbnQzMkZsb2F0RW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgCOgI4ARo1ChNNYXBJbnQzMkRvdWJsZUVudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoAToCOAEaMgoQTWFwQm9vbEJvb2xFbnRyeRILCgNrZXkYASABKAgSDQoFdmFsdWUYAiABKAg6AjgBGjYKFE1hcFN0cmluZ1N0cmluZ0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEaNQoTTWFwU3RyaW5nQnl0ZXNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAw6AjgBGoUBChtNYXBTdHJpbmdOZXN0ZWRNZXNzYWdlRW50cnkSCwoDa2V5GAEgASgJElUKBXZhbHVlGAIgASgLMkYucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5UZXN0QWxsVHlwZXNFZGl0aW9uMjAyMy5OZXN0ZWRNZXNzYWdlOgI4ARp6ChxNYXBTdHJpbmdGb3JlaWduTWVzc2FnZUVudHJ5EgsKA2tleRgBIAEoCRJJCgV2YWx1ZRgCIAEoCzI6LnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuRm9yZWlnbk1lc3NhZ2VFZGl0aW9uMjAyMzoCOAEafwoYTWFwU3RyaW5nTmVzdGVkRW51bUVudHJ5EgsKA2tleRgBIAEoCRJSCgV2YWx1ZRgCIAEoDjJDLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMuTmVzdGVkRW51bToCOAEadAoZTWFwU3RyaW5nRm9yZWlnbkVudW1FbnRyeRILCgNrZXkYASABKAkSRgoFdmFsdWUYAiABKA4yNy5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLkZvcmVpZ25FbnVtRWRpdGlvbjIwMjM6AjgBGjwKDUdyb3VwTGlrZVR5cGUSFAoLZ3JvdXBfaW50MzIYygEgASgFEhUKDGdyb3VwX3VpbnQzMhjLASABKA0iOQoKTmVzdGVkRW51bRIHCgNGT08QABIHCgNCQVIQARIHCgNCQVoQAhIQCgNORUcQ////////////ASoFCHgQyQFCDQoLb25lb2ZfZmllbGQiJgoZRm9yZWlnbk1lc3NhZ2VFZGl0aW9uMjAyMxIJCgFjGAEgASgFIhoKDUdyb3VwTGlrZVR5cGUSCQoBYxgBIAEoBSpLChZGb3JlaWduRW51bUVkaXRpb24yMDIzEg8KC0ZPUkVJR05fRk9PEAASDwoLRk9SRUlHTl9CQVIQARIPCgtGT1JFSUdOX0JBWhACOmEKD2V4dGVuc2lvbl9pbnQzMhI4LnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMYeCABKAVSDmV4dGVuc2lvbkludDMyOo4BCg1ncm91cGxpa2V0eXBlEjgucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5UZXN0QWxsVHlwZXNFZGl0aW9uMjAyMxh5IAEoCzIuLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuR3JvdXBMaWtlVHlwZVINZ3JvdXBsaWtldHlwZTqNAQoNZGVsaW1pdGVkX2V4dBI4LnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMuVGVzdEFsbFR5cGVzRWRpdGlvbjIwMjMYeiABKAsyLi5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLkdyb3VwTGlrZVR5cGVSDGRlbGltaXRlZEV4dEJBCi1jb20uZ29vZ2xlLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbjIwMjNQAaICCEVkaXRpb25zkgMCKAJiCGVkaXRpb25zcOgH");

/**
 * @generated from message protobuf_test_messages.editions.TestAllTypesEdition2023
 */
export type TestAllTypesEdition2023 = Message<"protobuf_test_messages.editions.TestAllTypesEdition2023"> & {
  /**
   * Singular
   *
   * @generated from field: int32 optional_int32 = 1;
   */
  optionalInt32: number;

  /**
   * @generated from field: int64 optional_int64 = 2;
   */
  optionalInt64: bigint;

  /**
   * @generated from field: uint32 optional_uint32 = 3;
   */
  optionalUint32: number;

  /**
   * @generated from field: uint64 optional_uint64 = 4;
   */
  optionalUint64: bigint;

  /**
   * @generated from field: sint32 optional_sint32 = 5;
   */
  optionalSint32: number;

  /**
   * @generated from field: sint64 optional_sint64 = 6;
   */
  optionalSint64: bigint;

  /**
   * @generated from field: fixed32 optional_fixed32 = 7;
   */
  optionalFixed32: number;

  /**
   * @generated from field: fixed64 optional_fixed64 = 8;
   */
  optionalFixed64: bigint;

  /**
   * @generated from field: sfixed32 optional_sfixed32 = 9;
   */
  optionalSfixed32: number;

  /**
   * @generated from field: sfixed64 optional_sfixed64 = 10;
   */
  optionalSfixed64: bigint;

  /**
   * @generated from field: float optional_float = 11;
   */
  optionalFloat: number;

  /**
   * @generated from field: double optional_double = 12;
   */
  optionalDouble: number;

  /**
   * @generated from field: bool optional_bool = 13;
   */
  optionalBool: boolean;

  /**
   * @generated from field: string optional_string = 14;
   */
  optionalString: string;

  /**
   * @generated from field: bytes optional_bytes = 15;
   */
  optionalBytes: Uint8Array;

  /**
   * @generated from field: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage optional_nested_message = 18 [features.message_encoding = LENGTH_PREFIXED];
   */
  optionalNestedMessage?: TestAllTypesEdition2023_NestedMessage;

  /**
   * @generated from field: protobuf_test_messages.editions.ForeignMessageEdition2023 optional_foreign_message = 19 [features.message_encoding = LENGTH_PREFIXED];
   */
  optionalForeignMessage?: ForeignMessageEdition2023;

  /**
   * @generated from field: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum optional_nested_enum = 21;
   */
  optionalNestedEnum: TestAllTypesEdition2023_NestedEnum;

  /**
   * @generated from field: protobuf_test_messages.editions.ForeignEnumEdition2023 optional_foreign_enum = 22;
   */
  optionalForeignEnum: ForeignEnumEdition2023;

  /**
   * @generated from field: string optional_string_piece = 24;
   */
  optionalStringPiece: string;

  /**
   * @generated from field: string optional_cord = 25;
   */
  optionalCord: string;

  /**
   * @generated from field: protobuf_test_messages.editions.TestAllTypesEdition2023 recursive_message = 27 [features.message_encoding = LENGTH_PREFIXED];
   */
  recursiveMessage?: TestAllTypesEdition2023;

  /**
   * Repeated
   *
   * @generated from field: repeated int32 repeated_int32 = 31;
   */
  repeatedInt32: number[];

  /**
   * @generated from field: repeated int64 repeated_int64 = 32;
   */
  repeatedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 repeated_uint32 = 33;
   */
  repeatedUint32: number[];

  /**
   * @generated from field: repeated uint64 repeated_uint64 = 34;
   */
  repeatedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 repeated_sint32 = 35;
   */
  repeatedSint32: number[];

  /**
   * @generated from field: repeated sint64 repeated_sint64 = 36;
   */
  repeatedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 repeated_fixed32 = 37;
   */
  repeatedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 repeated_fixed64 = 38;
   */
  repeatedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 repeated_sfixed32 = 39;
   */
  repeatedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64 = 40;
   */
  repeatedSfixed64: bigint[];

  /**
   * @generated from field: repeated float repeated_float = 41;
   */
  repeatedFloat: number[];

  /**
   * @generated from field: repeated double repeated_double = 42;
   */
  repeatedDouble: number[];

  /**
   * @generated from field: repeated bool repeated_bool = 43;
   */
  repeatedBool: boolean[];

  /**
   * @generated from field: repeated string repeated_string = 44;
   */
  repeatedString: string[];

  /**
   * @generated from field: repeated bytes repeated_bytes = 45;
   */
  repeatedBytes: Uint8Array[];

  /**
   * @generated from field: repeated protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage repeated_nested_message = 48 [features.message_encoding = LENGTH_PREFIXED];
   */
  repeatedNestedMessage: TestAllTypesEdition2023_NestedMessage[];

  /**
   * @generated from field: repeated protobuf_test_messages.editions.ForeignMessageEdition2023 repeated_foreign_message = 49 [features.message_encoding = LENGTH_PREFIXED];
   */
  repeatedForeignMessage: ForeignMessageEdition2023[];

  /**
   * @generated from field: repeated protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum repeated_nested_enum = 51;
   */
  repeatedNestedEnum: TestAllTypesEdition2023_NestedEnum[];

  /**
   * @generated from field: repeated protobuf_test_messages.editions.ForeignEnumEdition2023 repeated_foreign_enum = 52;
   */
  repeatedForeignEnum: ForeignEnumEdition2023[];

  /**
   * @generated from field: repeated string repeated_string_piece = 54;
   */
  repeatedStringPiece: string[];

  /**
   * @generated from field: repeated string repeated_cord = 55;
   */
  repeatedCord: string[];

  /**
   * Packed
   *
   * @generated from field: repeated int32 packed_int32 = 75 [features.repeated_field_encoding = PACKED];
   */
  packedInt32: number[];

  /**
   * @generated from field: repeated int64 packed_int64 = 76 [features.repeated_field_encoding = PACKED];
   */
  packedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 packed_uint32 = 77 [features.repeated_field_encoding = PACKED];
   */
  packedUint32: number[];

  /**
   * @generated from field: repeated uint64 packed_uint64 = 78 [features.repeated_field_encoding = PACKED];
   */
  packedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 packed_sint32 = 79 [features.repeated_field_encoding = PACKED];
   */
  packedSint32: number[];

  /**
   * @generated from field: repeated sint64 packed_sint64 = 80 [features.repeated_field_encoding = PACKED];
   */
  packedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 packed_fixed32 = 81 [features.repeated_field_encoding = PACKED];
   */
  packedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 packed_fixed64 = 82 [features.repeated_field_encoding = PACKED];
   */
  packedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 packed_sfixed32 = 83 [features.repeated_field_encoding = PACKED];
   */
  packedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 packed_sfixed64 = 84 [features.repeated_field_encoding = PACKED];
   */
  packedSfixed64: bigint[];

  /**
   * @generated from field: repeated float packed_float = 85 [features.repeated_field_encoding = PACKED];
   */
  packedFloat: number[];

  /**
   * @generated from field: repeated double packed_double = 86 [features.repeated_field_encoding = PACKED];
   */
  packedDouble: number[];

  /**
   * @generated from field: repeated bool packed_bool = 87 [features.repeated_field_encoding = PACKED];
   */
  packedBool: boolean[];

  /**
   * @generated from field: repeated protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum packed_nested_enum = 88 [features.repeated_field_encoding = PACKED];
   */
  packedNestedEnum: TestAllTypesEdition2023_NestedEnum[];

  /**
   * Unpacked
   *
   * @generated from field: repeated int32 unpacked_int32 = 89 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedInt32: number[];

  /**
   * @generated from field: repeated int64 unpacked_int64 = 90 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 unpacked_uint32 = 91 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedUint32: number[];

  /**
   * @generated from field: repeated uint64 unpacked_uint64 = 92 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 unpacked_sint32 = 93 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedSint32: number[];

  /**
   * @generated from field: repeated sint64 unpacked_sint64 = 94 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 unpacked_fixed32 = 95 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 unpacked_fixed64 = 96 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 unpacked_sfixed32 = 97 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 unpacked_sfixed64 = 98 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedSfixed64: bigint[];

  /**
   * @generated from field: repeated float unpacked_float = 99 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedFloat: number[];

  /**
   * @generated from field: repeated double unpacked_double = 100 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedDouble: number[];

  /**
   * @generated from field: repeated bool unpacked_bool = 101 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedBool: boolean[];

  /**
   * @generated from field: repeated protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum unpacked_nested_enum = 102 [features.repeated_field_encoding = EXPANDED];
   */
  unpackedNestedEnum: TestAllTypesEdition2023_NestedEnum[];

  /**
   * Map
   *
   * @generated from field: map<int32, int32> map_int32_int32 = 56;
   */
  mapInt32Int32: { [key: number]: number };

  /**
   * @generated from field: map<int64, int64> map_int64_int64 = 57;
   */
  mapInt64Int64: { [key: string]: bigint };

  /**
   * @generated from field: map<uint32, uint32> map_uint32_uint32 = 58;
   */
  mapUint32Uint32: { [key: number]: number };

  /**
   * @generated from field: map<uint64, uint64> map_uint64_uint64 = 59;
   */
  mapUint64Uint64: { [key: string]: bigint };

  /**
   * @generated from field: map<sint32, sint32> map_sint32_sint32 = 60;
   */
  mapSint32Sint32: { [key: number]: number };

  /**
   * @generated from field: map<sint64, sint64> map_sint64_sint64 = 61;
   */
  mapSint64Sint64: { [key: string]: bigint };

  /**
   * @generated from field: map<fixed32, fixed32> map_fixed32_fixed32 = 62;
   */
  mapFixed32Fixed32: { [key: number]: number };

  /**
   * @generated from field: map<fixed64, fixed64> map_fixed64_fixed64 = 63;
   */
  mapFixed64Fixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 64;
   */
  mapSfixed32Sfixed32: { [key: number]: number };

  /**
   * @generated from field: map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 65;
   */
  mapSfixed64Sfixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<int32, float> map_int32_float = 66;
   */
  mapInt32Float: { [key: number]: number };

  /**
   * @generated from field: map<int32, double> map_int32_double = 67;
   */
  mapInt32Double: { [key: number]: number };

  /**
   * @generated from field: map<bool, bool> map_bool_bool = 68;
   */
  mapBoolBool: { [key: string]: boolean };

  /**
   * @generated from field: map<string, string> map_string_string = 69;
   */
  mapStringString: { [key: string]: string };

  /**
   * @generated from field: map<string, bytes> map_string_bytes = 70;
   */
  mapStringBytes: { [key: string]: Uint8Array };

  /**
   * @generated from field: map<string, protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage> map_string_nested_message = 71;
   */
  mapStringNestedMessage: { [key: string]: TestAllTypesEdition2023_NestedMessage };

  /**
   * @generated from field: map<string, protobuf_test_messages.editions.ForeignMessageEdition2023> map_string_foreign_message = 72;
   */
  mapStringForeignMessage: { [key: string]: ForeignMessageEdition2023 };

  /**
   * @generated from field: map<string, protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum> map_string_nested_enum = 73;
   */
  mapStringNestedEnum: { [key: string]: TestAllTypesEdition2023_NestedEnum };

  /**
   * @generated from field: map<string, protobuf_test_messages.editions.ForeignEnumEdition2023> map_string_foreign_enum = 74;
   */
  mapStringForeignEnum: { [key: string]: ForeignEnumEdition2023 };

  /**
   * @generated from oneof protobuf_test_messages.editions.TestAllTypesEdition2023.oneof_field
   */
  oneofField: {
    /**
     * @generated from field: uint32 oneof_uint32 = 111;
     */
    value: number;
    case: "oneofUint32";
  } | {
    /**
     * @generated from field: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage oneof_nested_message = 112 [features.message_encoding = LENGTH_PREFIXED];
     */
    value: TestAllTypesEdition2023_NestedMessage;
    case: "oneofNestedMessage";
  } | {
    /**
     * @generated from field: string oneof_string = 113;
     */
    value: string;
    case: "oneofString";
  } | {
    /**
     * @generated from field: bytes oneof_bytes = 114;
     */
    value: Uint8Array;
    case: "oneofBytes";
  } | {
    /**
     * @generated from field: bool oneof_bool = 115;
     */
    value: boolean;
    case: "oneofBool";
  } | {
    /**
     * @generated from field: uint64 oneof_uint64 = 116;
     */
    value: bigint;
    case: "oneofUint64";
  } | {
    /**
     * @generated from field: float oneof_float = 117;
     */
    value: number;
    case: "oneofFloat";
  } | {
    /**
     * @generated from field: double oneof_double = 118;
     */
    value: number;
    case: "oneofDouble";
  } | {
    /**
     * @generated from field: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum oneof_enum = 119;
     */
    value: TestAllTypesEdition2023_NestedEnum;
    case: "oneofEnum";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType groupliketype = 201;
   */
  groupliketype?: TestAllTypesEdition2023_GroupLikeType;

  /**
   * @generated from field: protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType delimited_field = 202;
   */
  delimitedField?: TestAllTypesEdition2023_GroupLikeType;
};

/**
 * Describes the message protobuf_test_messages.editions.TestAllTypesEdition2023.
 * Use `create(TestAllTypesEdition2023Schema)` to create a new message.
 */
export const TestAllTypesEdition2023Schema: GenMessage<TestAllTypesEdition2023> = /*@__PURE__*/
  messageDesc(file_google_protobuf_test_messages_edition2023, 0);

/**
 * @generated from message protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage
 */
export type TestAllTypesEdition2023_NestedMessage = Message<"protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage"> & {
  /**
   * @generated from field: int32 a = 1;
   */
  a: number;

  /**
   * @generated from field: protobuf_test_messages.editions.TestAllTypesEdition2023 corecursive = 2 [features.message_encoding = LENGTH_PREFIXED];
   */
  corecursive?: TestAllTypesEdition2023;
};

/**
 * Describes the message protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.
 * Use `create(TestAllTypesEdition2023_NestedMessageSchema)` to create a new message.
 */
export const TestAllTypesEdition2023_NestedMessageSchema: GenMessage<TestAllTypesEdition2023_NestedMessage> = /*@__PURE__*/
  messageDesc(file_google_protobuf_test_messages_edition2023, 0, 0);

/**
 * groups
 *
 * @generated from message protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType
 */
export type TestAllTypesEdition2023_GroupLikeType = Message<"protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType"> & {
  /**
   * @generated from field: int32 group_int32 = 202;
   */
  groupInt32: number;

  /**
   * @generated from field: uint32 group_uint32 = 203;
   */
  groupUint32: number;
};

/**
 * Describes the message protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.
 * Use `create(TestAllTypesEdition2023_GroupLikeTypeSchema)` to create a new message.
 */
export const TestAllTypesEdition2023_GroupLikeTypeSchema: GenMessage<TestAllTypesEdition2023_GroupLikeType> = /*@__PURE__*/
  messageDesc(file_google_protobuf_test_messages_edition2023, 0, 1);

/**
 * @generated from enum protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum
 */
export enum TestAllTypesEdition2023_NestedEnum {
  /**
   * @generated from enum value: FOO = 0;
   */
  FOO = 0,

  /**
   * @generated from enum value: BAR = 1;
   */
  BAR = 1,

  /**
   * @generated from enum value: BAZ = 2;
   */
  BAZ = 2,

  /**
   * Intentionally negative.
   *
   * @generated from enum value: NEG = -1;
   */
  NEG = -1,
}

/**
 * Describes the enum protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum.
 */
export const TestAllTypesEdition2023_NestedEnumSchema: GenEnum<TestAllTypesEdition2023_NestedEnum> = /*@__PURE__*/
  enumDesc(file_google_protobuf_test_messages_edition2023, 0, 0);

/**
 * @generated from message protobuf_test_messages.editions.ForeignMessageEdition2023
 */
export type ForeignMessageEdition2023 = Message<"protobuf_test_messages.editions.ForeignMessageEdition2023"> & {
  /**
   * @generated from field: int32 c = 1;
   */
  c: number;
};

/**
 * Describes the message protobuf_test_messages.editions.ForeignMessageEdition2023.
 * Use `create(ForeignMessageEdition2023Schema)` to create a new message.
 */
export const ForeignMessageEdition2023Schema: GenMessage<ForeignMessageEdition2023> = /*@__PURE__*/
  messageDesc(file_google_protobuf_test_messages_edition2023, 1);

/**
 * @generated from message protobuf_test_messages.editions.GroupLikeType
 */
export type GroupLikeType = Message<"protobuf_test_messages.editions.GroupLikeType"> & {
  /**
   * @generated from field: int32 c = 1;
   */
  c: number;
};

/**
 * Describes the message protobuf_test_messages.editions.GroupLikeType.
 * Use `create(GroupLikeTypeSchema)` to create a new message.
 */
export const GroupLikeTypeSchema: GenMessage<GroupLikeType> = /*@__PURE__*/
  messageDesc(file_google_protobuf_test_messages_edition2023, 2);

/**
 * @generated from enum protobuf_test_messages.editions.ForeignEnumEdition2023
 */
export enum ForeignEnumEdition2023 {
  /**
   * @generated from enum value: FOREIGN_FOO = 0;
   */
  FOREIGN_FOO = 0,

  /**
   * @generated from enum value: FOREIGN_BAR = 1;
   */
  FOREIGN_BAR = 1,

  /**
   * @generated from enum value: FOREIGN_BAZ = 2;
   */
  FOREIGN_BAZ = 2,
}

/**
 * Describes the enum protobuf_test_messages.editions.ForeignEnumEdition2023.
 */
export const ForeignEnumEdition2023Schema: GenEnum<ForeignEnumEdition2023> = /*@__PURE__*/
  enumDesc(file_google_protobuf_test_messages_edition2023, 0);

/**
 * @generated from extension: int32 extension_int32 = 120;
 */
export const extension_int32: GenExtension<TestAllTypesEdition2023, number> = /*@__PURE__*/
  extDesc(file_google_protobuf_test_messages_edition2023, 0);

/**
 * @generated from extension: protobuf_test_messages.editions.GroupLikeType groupliketype = 121;
 */
export const groupliketype: GenExtension<TestAllTypesEdition2023, GroupLikeType> = /*@__PURE__*/
  extDesc(file_google_protobuf_test_messages_edition2023, 1);

/**
 * @generated from extension: protobuf_test_messages.editions.GroupLikeType delimited_ext = 122;
 */
export const delimited_ext: GenExtension<TestAllTypesEdition2023, GroupLikeType> = /*@__PURE__*/
  extDesc(file_google_protobuf_test_messages_edition2023, 2);

