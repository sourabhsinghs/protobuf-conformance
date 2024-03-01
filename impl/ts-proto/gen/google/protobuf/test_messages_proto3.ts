/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "./any";
import { Duration } from "./duration";
import { FieldMask } from "./field_mask";
import { ListValue, NullValue, nullValueFromJSON, nullValueToJSON, Struct, Value } from "./struct";
import { Timestamp } from "./timestamp";
import {
  BoolValue,
  BytesValue,
  DoubleValue,
  FloatValue,
  Int32Value,
  Int64Value,
  StringValue,
  UInt32Value,
  UInt64Value,
} from "./wrappers";

export const protobufPackage = "protobuf_test_messages.proto3";

export enum ForeignEnum {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export function foreignEnumFromJSON(object: any): ForeignEnum {
  switch (object) {
    case 0:
    case "FOREIGN_FOO":
      return ForeignEnum.FOREIGN_FOO;
    case 1:
    case "FOREIGN_BAR":
      return ForeignEnum.FOREIGN_BAR;
    case 2:
    case "FOREIGN_BAZ":
      return ForeignEnum.FOREIGN_BAZ;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ForeignEnum");
  }
}

export function foreignEnumToJSON(object: ForeignEnum): string {
  switch (object) {
    case ForeignEnum.FOREIGN_FOO:
      return "FOREIGN_FOO";
    case ForeignEnum.FOREIGN_BAR:
      return "FOREIGN_BAR";
    case ForeignEnum.FOREIGN_BAZ:
      return "FOREIGN_BAZ";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ForeignEnum");
  }
}

/**
 * This proto includes every type of field in both singular and repeated
 * forms.
 *
 * Also, crucially, all messages and enums in this file are eventually
 * submessages of this message.  So for example, a fuzz test of TestAllTypes
 * could trigger bugs that occur in any message type in this file.  We verify
 * this stays true in a unit test.
 */
export interface TestAllTypesProto3 {
  /** Singular */
  optionalInt32: number;
  optionalInt64: number;
  optionalUint32: number;
  optionalUint64: number;
  optionalSint32: number;
  optionalSint64: number;
  optionalFixed32: number;
  optionalFixed64: number;
  optionalSfixed32: number;
  optionalSfixed64: number;
  optionalFloat: number;
  optionalDouble: number;
  optionalBool: boolean;
  optionalString: string;
  optionalBytes: Uint8Array;
  optionalNestedMessage: TestAllTypesProto3_NestedMessage | undefined;
  optionalForeignMessage: ForeignMessage | undefined;
  optionalNestedEnum: TestAllTypesProto3_NestedEnum;
  optionalForeignEnum: ForeignEnum;
  optionalAliasedEnum: TestAllTypesProto3_AliasedEnum;
  optionalStringPiece: string;
  optionalCord: string;
  recursiveMessage:
    | TestAllTypesProto3
    | undefined;
  /** Repeated */
  repeatedInt32: number[];
  repeatedInt64: number[];
  repeatedUint32: number[];
  repeatedUint64: number[];
  repeatedSint32: number[];
  repeatedSint64: number[];
  repeatedFixed32: number[];
  repeatedFixed64: number[];
  repeatedSfixed32: number[];
  repeatedSfixed64: number[];
  repeatedFloat: number[];
  repeatedDouble: number[];
  repeatedBool: boolean[];
  repeatedString: string[];
  repeatedBytes: Uint8Array[];
  repeatedNestedMessage: TestAllTypesProto3_NestedMessage[];
  repeatedForeignMessage: ForeignMessage[];
  repeatedNestedEnum: TestAllTypesProto3_NestedEnum[];
  repeatedForeignEnum: ForeignEnum[];
  repeatedStringPiece: string[];
  repeatedCord: string[];
  /** Packed */
  packedInt32: number[];
  packedInt64: number[];
  packedUint32: number[];
  packedUint64: number[];
  packedSint32: number[];
  packedSint64: number[];
  packedFixed32: number[];
  packedFixed64: number[];
  packedSfixed32: number[];
  packedSfixed64: number[];
  packedFloat: number[];
  packedDouble: number[];
  packedBool: boolean[];
  packedNestedEnum: TestAllTypesProto3_NestedEnum[];
  /** Unpacked */
  unpackedInt32: number[];
  unpackedInt64: number[];
  unpackedUint32: number[];
  unpackedUint64: number[];
  unpackedSint32: number[];
  unpackedSint64: number[];
  unpackedFixed32: number[];
  unpackedFixed64: number[];
  unpackedSfixed32: number[];
  unpackedSfixed64: number[];
  unpackedFloat: number[];
  unpackedDouble: number[];
  unpackedBool: boolean[];
  unpackedNestedEnum: TestAllTypesProto3_NestedEnum[];
  /** Map */
  mapInt32Int32: Map<number, number>;
  mapInt64Int64: Map<number, number>;
  mapUint32Uint32: Map<number, number>;
  mapUint64Uint64: Map<number, number>;
  mapSint32Sint32: Map<number, number>;
  mapSint64Sint64: Map<number, number>;
  mapFixed32Fixed32: Map<number, number>;
  mapFixed64Fixed64: Map<number, number>;
  mapSfixed32Sfixed32: Map<number, number>;
  mapSfixed64Sfixed64: Map<number, number>;
  mapInt32Float: Map<number, number>;
  mapInt32Double: Map<number, number>;
  mapBoolBool: Map<boolean, boolean>;
  mapStringString: Map<string, string>;
  mapStringBytes: Map<string, Uint8Array>;
  mapStringNestedMessage: Map<string, TestAllTypesProto3_NestedMessage>;
  mapStringForeignMessage: Map<string, ForeignMessage>;
  mapStringNestedEnum: Map<string, TestAllTypesProto3_NestedEnum>;
  mapStringForeignEnum: Map<string, ForeignEnum>;
  oneofField?:
    | { $case: "oneofUint32"; oneofUint32: number }
    | { $case: "oneofNestedMessage"; oneofNestedMessage: TestAllTypesProto3_NestedMessage }
    | { $case: "oneofString"; oneofString: string }
    | { $case: "oneofBytes"; oneofBytes: Uint8Array }
    | { $case: "oneofBool"; oneofBool: boolean }
    | { $case: "oneofUint64"; oneofUint64: number }
    | { $case: "oneofFloat"; oneofFloat: number }
    | { $case: "oneofDouble"; oneofDouble: number }
    | { $case: "oneofEnum"; oneofEnum: TestAllTypesProto3_NestedEnum }
    | { $case: "oneofNullValue"; oneofNullValue: NullValue }
    | undefined;
  /** Well-known types */
  optionalBoolWrapper: boolean | undefined;
  optionalInt32Wrapper: number | undefined;
  optionalInt64Wrapper: number | undefined;
  optionalUint32Wrapper: number | undefined;
  optionalUint64Wrapper: number | undefined;
  optionalFloatWrapper: number | undefined;
  optionalDoubleWrapper: number | undefined;
  optionalStringWrapper: string | undefined;
  optionalBytesWrapper: Uint8Array | undefined;
  repeatedBoolWrapper: boolean[];
  repeatedInt32Wrapper: number[];
  repeatedInt64Wrapper: number[];
  repeatedUint32Wrapper: number[];
  repeatedUint64Wrapper: number[];
  repeatedFloatWrapper: number[];
  repeatedDoubleWrapper: number[];
  repeatedStringWrapper: string[];
  repeatedBytesWrapper: Uint8Array[];
  optionalDuration: Duration | undefined;
  optionalTimestamp: Date | undefined;
  optionalFieldMask: string[] | undefined;
  optionalStruct: { [key: string]: any } | undefined;
  optionalAny: Any | undefined;
  optionalValue: any | undefined;
  optionalNullValue: NullValue;
  repeatedDuration: Duration[];
  repeatedTimestamp: Date[];
  repeatedFieldmask: string[][];
  repeatedStruct: { [key: string]: any }[];
  repeatedAny: Any[];
  repeatedValue: any[];
  repeatedListValue: Array<any>[];
  /**
   * Test field-name-to-JSON-name convention.
   * (protobuf says names can be any valid C/C++ identifier.)
   */
  fieldname1: number;
  fieldName2: number;
  FieldName3: number;
  fieldName4: number;
  field0name5: number;
  field0Name6: number;
  fieldName7: number;
  FieldName8: number;
  fieldName9: number;
  FieldName10: number;
  fieldName11: number;
  FIELDName12: number;
  FieldName13: number;
  FieldName14: number;
  fieldName15: number;
  fieldName16: number;
  fieldName17: number;
  FieldName18: number;
}

export enum TestAllTypesProto3_NestedEnum {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
  /** NEG - Intentionally negative. */
  NEG = -1,
}

export function testAllTypesProto3_NestedEnumFromJSON(object: any): TestAllTypesProto3_NestedEnum {
  switch (object) {
    case 0:
    case "FOO":
      return TestAllTypesProto3_NestedEnum.FOO;
    case 1:
    case "BAR":
      return TestAllTypesProto3_NestedEnum.BAR;
    case 2:
    case "BAZ":
      return TestAllTypesProto3_NestedEnum.BAZ;
    case -1:
    case "NEG":
      return TestAllTypesProto3_NestedEnum.NEG;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum TestAllTypesProto3_NestedEnum");
  }
}

export function testAllTypesProto3_NestedEnumToJSON(object: TestAllTypesProto3_NestedEnum): string {
  switch (object) {
    case TestAllTypesProto3_NestedEnum.FOO:
      return "FOO";
    case TestAllTypesProto3_NestedEnum.BAR:
      return "BAR";
    case TestAllTypesProto3_NestedEnum.BAZ:
      return "BAZ";
    case TestAllTypesProto3_NestedEnum.NEG:
      return "NEG";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum TestAllTypesProto3_NestedEnum");
  }
}

export enum TestAllTypesProto3_AliasedEnum {
  ALIAS_FOO = 0,
  ALIAS_BAR = 1,
  ALIAS_BAZ = 2,
  MOO = 2,
  moo = 2,
  bAz = 2,
}

export function testAllTypesProto3_AliasedEnumFromJSON(object: any): TestAllTypesProto3_AliasedEnum {
  switch (object) {
    case 0:
    case "ALIAS_FOO":
      return TestAllTypesProto3_AliasedEnum.ALIAS_FOO;
    case 1:
    case "ALIAS_BAR":
      return TestAllTypesProto3_AliasedEnum.ALIAS_BAR;
    case 2:
    case "ALIAS_BAZ":
      return TestAllTypesProto3_AliasedEnum.ALIAS_BAZ;
    case 2:
    case "MOO":
      return TestAllTypesProto3_AliasedEnum.MOO;
    case 2:
    case "moo":
      return TestAllTypesProto3_AliasedEnum.moo;
    case 2:
    case "bAz":
      return TestAllTypesProto3_AliasedEnum.bAz;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum TestAllTypesProto3_AliasedEnum");
  }
}

export function testAllTypesProto3_AliasedEnumToJSON(object: TestAllTypesProto3_AliasedEnum): string {
  switch (object) {
    case TestAllTypesProto3_AliasedEnum.ALIAS_FOO:
      return "ALIAS_FOO";
    case TestAllTypesProto3_AliasedEnum.ALIAS_BAR:
      return "ALIAS_BAR";
    case TestAllTypesProto3_AliasedEnum.ALIAS_BAZ:
      return "ALIAS_BAZ";
    case TestAllTypesProto3_AliasedEnum.MOO:
      return "MOO";
    case TestAllTypesProto3_AliasedEnum.moo:
      return "moo";
    case TestAllTypesProto3_AliasedEnum.bAz:
      return "bAz";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum TestAllTypesProto3_AliasedEnum");
  }
}

export interface TestAllTypesProto3_NestedMessage {
  a: number;
  corecursive: TestAllTypesProto3 | undefined;
}

export interface TestAllTypesProto3_MapInt32Int32Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapInt64Int64Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapUint32Uint32Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapUint64Uint64Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapSint32Sint32Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapSint64Sint64Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapFixed32Fixed32Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapFixed64Fixed64Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapSfixed32Sfixed32Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapSfixed64Sfixed64Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapInt32FloatEntry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapInt32DoubleEntry {
  key: number;
  value: number;
}

export interface TestAllTypesProto3_MapBoolBoolEntry {
  key: boolean;
  value: boolean;
}

export interface TestAllTypesProto3_MapStringStringEntry {
  key: string;
  value: string;
}

export interface TestAllTypesProto3_MapStringBytesEntry {
  key: string;
  value: Uint8Array;
}

export interface TestAllTypesProto3_MapStringNestedMessageEntry {
  key: string;
  value: TestAllTypesProto3_NestedMessage | undefined;
}

export interface TestAllTypesProto3_MapStringForeignMessageEntry {
  key: string;
  value: ForeignMessage | undefined;
}

export interface TestAllTypesProto3_MapStringNestedEnumEntry {
  key: string;
  value: TestAllTypesProto3_NestedEnum;
}

export interface TestAllTypesProto3_MapStringForeignEnumEntry {
  key: string;
  value: ForeignEnum;
}

export interface ForeignMessage {
  c: number;
}

export interface NullHypothesisProto3 {
}

export interface EnumOnlyProto3 {
}

export enum EnumOnlyProto3_Bool {
  kFalse = 0,
  kTrue = 1,
}

export function enumOnlyProto3_BoolFromJSON(object: any): EnumOnlyProto3_Bool {
  switch (object) {
    case 0:
    case "kFalse":
      return EnumOnlyProto3_Bool.kFalse;
    case 1:
    case "kTrue":
      return EnumOnlyProto3_Bool.kTrue;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum EnumOnlyProto3_Bool");
  }
}

export function enumOnlyProto3_BoolToJSON(object: EnumOnlyProto3_Bool): string {
  switch (object) {
    case EnumOnlyProto3_Bool.kFalse:
      return "kFalse";
    case EnumOnlyProto3_Bool.kTrue:
      return "kTrue";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum EnumOnlyProto3_Bool");
  }
}

function createBaseTestAllTypesProto3(): TestAllTypesProto3 {
  return {
    optionalInt32: 0,
    optionalInt64: 0,
    optionalUint32: 0,
    optionalUint64: 0,
    optionalSint32: 0,
    optionalSint64: 0,
    optionalFixed32: 0,
    optionalFixed64: 0,
    optionalSfixed32: 0,
    optionalSfixed64: 0,
    optionalFloat: 0,
    optionalDouble: 0,
    optionalBool: false,
    optionalString: "",
    optionalBytes: new Uint8Array(0),
    optionalNestedMessage: undefined,
    optionalForeignMessage: undefined,
    optionalNestedEnum: 0,
    optionalForeignEnum: 0,
    optionalAliasedEnum: 0,
    optionalStringPiece: "",
    optionalCord: "",
    recursiveMessage: undefined,
    repeatedInt32: [],
    repeatedInt64: [],
    repeatedUint32: [],
    repeatedUint64: [],
    repeatedSint32: [],
    repeatedSint64: [],
    repeatedFixed32: [],
    repeatedFixed64: [],
    repeatedSfixed32: [],
    repeatedSfixed64: [],
    repeatedFloat: [],
    repeatedDouble: [],
    repeatedBool: [],
    repeatedString: [],
    repeatedBytes: [],
    repeatedNestedMessage: [],
    repeatedForeignMessage: [],
    repeatedNestedEnum: [],
    repeatedForeignEnum: [],
    repeatedStringPiece: [],
    repeatedCord: [],
    packedInt32: [],
    packedInt64: [],
    packedUint32: [],
    packedUint64: [],
    packedSint32: [],
    packedSint64: [],
    packedFixed32: [],
    packedFixed64: [],
    packedSfixed32: [],
    packedSfixed64: [],
    packedFloat: [],
    packedDouble: [],
    packedBool: [],
    packedNestedEnum: [],
    unpackedInt32: [],
    unpackedInt64: [],
    unpackedUint32: [],
    unpackedUint64: [],
    unpackedSint32: [],
    unpackedSint64: [],
    unpackedFixed32: [],
    unpackedFixed64: [],
    unpackedSfixed32: [],
    unpackedSfixed64: [],
    unpackedFloat: [],
    unpackedDouble: [],
    unpackedBool: [],
    unpackedNestedEnum: [],
    mapInt32Int32: new Map(),
    mapInt64Int64: new Map(),
    mapUint32Uint32: new Map(),
    mapUint64Uint64: new Map(),
    mapSint32Sint32: new Map(),
    mapSint64Sint64: new Map(),
    mapFixed32Fixed32: new Map(),
    mapFixed64Fixed64: new Map(),
    mapSfixed32Sfixed32: new Map(),
    mapSfixed64Sfixed64: new Map(),
    mapInt32Float: new Map(),
    mapInt32Double: new Map(),
    mapBoolBool: new Map(),
    mapStringString: new Map(),
    mapStringBytes: new Map(),
    mapStringNestedMessage: new Map(),
    mapStringForeignMessage: new Map(),
    mapStringNestedEnum: new Map(),
    mapStringForeignEnum: new Map(),
    oneofField: undefined,
    optionalBoolWrapper: undefined,
    optionalInt32Wrapper: undefined,
    optionalInt64Wrapper: undefined,
    optionalUint32Wrapper: undefined,
    optionalUint64Wrapper: undefined,
    optionalFloatWrapper: undefined,
    optionalDoubleWrapper: undefined,
    optionalStringWrapper: undefined,
    optionalBytesWrapper: undefined,
    repeatedBoolWrapper: [],
    repeatedInt32Wrapper: [],
    repeatedInt64Wrapper: [],
    repeatedUint32Wrapper: [],
    repeatedUint64Wrapper: [],
    repeatedFloatWrapper: [],
    repeatedDoubleWrapper: [],
    repeatedStringWrapper: [],
    repeatedBytesWrapper: [],
    optionalDuration: undefined,
    optionalTimestamp: undefined,
    optionalFieldMask: undefined,
    optionalStruct: undefined,
    optionalAny: undefined,
    optionalValue: undefined,
    optionalNullValue: 0,
    repeatedDuration: [],
    repeatedTimestamp: [],
    repeatedFieldmask: [],
    repeatedStruct: [],
    repeatedAny: [],
    repeatedValue: [],
    repeatedListValue: [],
    fieldname1: 0,
    fieldName2: 0,
    FieldName3: 0,
    fieldName4: 0,
    field0name5: 0,
    field0Name6: 0,
    fieldName7: 0,
    FieldName8: 0,
    fieldName9: 0,
    FieldName10: 0,
    fieldName11: 0,
    FIELDName12: 0,
    FieldName13: 0,
    FieldName14: 0,
    fieldName15: 0,
    fieldName16: 0,
    fieldName17: 0,
    FieldName18: 0,
  };
}

export const TestAllTypesProto3 = {
  encode(message: TestAllTypesProto3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.optionalInt32 !== 0) {
      writer.uint32(8).int32(message.optionalInt32);
    }
    if (message.optionalInt64 !== 0) {
      writer.uint32(16).int64(message.optionalInt64);
    }
    if (message.optionalUint32 !== 0) {
      writer.uint32(24).uint32(message.optionalUint32);
    }
    if (message.optionalUint64 !== 0) {
      writer.uint32(32).uint64(message.optionalUint64);
    }
    if (message.optionalSint32 !== 0) {
      writer.uint32(40).sint32(message.optionalSint32);
    }
    if (message.optionalSint64 !== 0) {
      writer.uint32(48).sint64(message.optionalSint64);
    }
    if (message.optionalFixed32 !== 0) {
      writer.uint32(61).fixed32(message.optionalFixed32);
    }
    if (message.optionalFixed64 !== 0) {
      writer.uint32(65).fixed64(message.optionalFixed64);
    }
    if (message.optionalSfixed32 !== 0) {
      writer.uint32(77).sfixed32(message.optionalSfixed32);
    }
    if (message.optionalSfixed64 !== 0) {
      writer.uint32(81).sfixed64(message.optionalSfixed64);
    }
    if (message.optionalFloat !== 0) {
      writer.uint32(93).float(message.optionalFloat);
    }
    if (message.optionalDouble !== 0) {
      writer.uint32(97).double(message.optionalDouble);
    }
    if (message.optionalBool === true) {
      writer.uint32(104).bool(message.optionalBool);
    }
    if (message.optionalString !== "") {
      writer.uint32(114).string(message.optionalString);
    }
    if (message.optionalBytes.length !== 0) {
      writer.uint32(122).bytes(message.optionalBytes);
    }
    if (message.optionalNestedMessage !== undefined) {
      TestAllTypesProto3_NestedMessage.encode(message.optionalNestedMessage, writer.uint32(146).fork()).ldelim();
    }
    if (message.optionalForeignMessage !== undefined) {
      ForeignMessage.encode(message.optionalForeignMessage, writer.uint32(154).fork()).ldelim();
    }
    if (message.optionalNestedEnum !== 0) {
      writer.uint32(168).int32(message.optionalNestedEnum);
    }
    if (message.optionalForeignEnum !== 0) {
      writer.uint32(176).int32(message.optionalForeignEnum);
    }
    if (message.optionalAliasedEnum !== 0) {
      writer.uint32(184).int32(message.optionalAliasedEnum);
    }
    if (message.optionalStringPiece !== "") {
      writer.uint32(194).string(message.optionalStringPiece);
    }
    if (message.optionalCord !== "") {
      writer.uint32(202).string(message.optionalCord);
    }
    if (message.recursiveMessage !== undefined) {
      TestAllTypesProto3.encode(message.recursiveMessage, writer.uint32(218).fork()).ldelim();
    }
    writer.uint32(250).fork();
    for (const v of message.repeatedInt32) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(258).fork();
    for (const v of message.repeatedInt64) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(266).fork();
    for (const v of message.repeatedUint32) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(274).fork();
    for (const v of message.repeatedUint64) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(282).fork();
    for (const v of message.repeatedSint32) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(290).fork();
    for (const v of message.repeatedSint64) {
      writer.sint64(v);
    }
    writer.ldelim();
    writer.uint32(298).fork();
    for (const v of message.repeatedFixed32) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(306).fork();
    for (const v of message.repeatedFixed64) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(314).fork();
    for (const v of message.repeatedSfixed32) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    writer.uint32(322).fork();
    for (const v of message.repeatedSfixed64) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    writer.uint32(330).fork();
    for (const v of message.repeatedFloat) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(338).fork();
    for (const v of message.repeatedDouble) {
      writer.double(v);
    }
    writer.ldelim();
    writer.uint32(346).fork();
    for (const v of message.repeatedBool) {
      writer.bool(v);
    }
    writer.ldelim();
    for (const v of message.repeatedString) {
      writer.uint32(354).string(v!);
    }
    for (const v of message.repeatedBytes) {
      writer.uint32(362).bytes(v!);
    }
    for (const v of message.repeatedNestedMessage) {
      TestAllTypesProto3_NestedMessage.encode(v!, writer.uint32(386).fork()).ldelim();
    }
    for (const v of message.repeatedForeignMessage) {
      ForeignMessage.encode(v!, writer.uint32(394).fork()).ldelim();
    }
    writer.uint32(410).fork();
    for (const v of message.repeatedNestedEnum) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(418).fork();
    for (const v of message.repeatedForeignEnum) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.repeatedStringPiece) {
      writer.uint32(434).string(v!);
    }
    for (const v of message.repeatedCord) {
      writer.uint32(442).string(v!);
    }
    writer.uint32(602).fork();
    for (const v of message.packedInt32) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(610).fork();
    for (const v of message.packedInt64) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(618).fork();
    for (const v of message.packedUint32) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(626).fork();
    for (const v of message.packedUint64) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(634).fork();
    for (const v of message.packedSint32) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(642).fork();
    for (const v of message.packedSint64) {
      writer.sint64(v);
    }
    writer.ldelim();
    writer.uint32(650).fork();
    for (const v of message.packedFixed32) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(658).fork();
    for (const v of message.packedFixed64) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(666).fork();
    for (const v of message.packedSfixed32) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    writer.uint32(674).fork();
    for (const v of message.packedSfixed64) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    writer.uint32(682).fork();
    for (const v of message.packedFloat) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(690).fork();
    for (const v of message.packedDouble) {
      writer.double(v);
    }
    writer.ldelim();
    writer.uint32(698).fork();
    for (const v of message.packedBool) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(706).fork();
    for (const v of message.packedNestedEnum) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(714).fork();
    for (const v of message.unpackedInt32) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(722).fork();
    for (const v of message.unpackedInt64) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(730).fork();
    for (const v of message.unpackedUint32) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(738).fork();
    for (const v of message.unpackedUint64) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(746).fork();
    for (const v of message.unpackedSint32) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(754).fork();
    for (const v of message.unpackedSint64) {
      writer.sint64(v);
    }
    writer.ldelim();
    writer.uint32(762).fork();
    for (const v of message.unpackedFixed32) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(770).fork();
    for (const v of message.unpackedFixed64) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(778).fork();
    for (const v of message.unpackedSfixed32) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    writer.uint32(786).fork();
    for (const v of message.unpackedSfixed64) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    writer.uint32(794).fork();
    for (const v of message.unpackedFloat) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(802).fork();
    for (const v of message.unpackedDouble) {
      writer.double(v);
    }
    writer.ldelim();
    writer.uint32(810).fork();
    for (const v of message.unpackedBool) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(818).fork();
    for (const v of message.unpackedNestedEnum) {
      writer.int32(v);
    }
    writer.ldelim();
    message.mapInt32Int32.forEach((value, key) => {
      TestAllTypesProto3_MapInt32Int32Entry.encode({ key: key as any, value }, writer.uint32(450).fork()).ldelim();
    });
    message.mapInt64Int64.forEach((value, key) => {
      TestAllTypesProto3_MapInt64Int64Entry.encode({ key: key as any, value }, writer.uint32(458).fork()).ldelim();
    });
    message.mapUint32Uint32.forEach((value, key) => {
      TestAllTypesProto3_MapUint32Uint32Entry.encode({ key: key as any, value }, writer.uint32(466).fork()).ldelim();
    });
    message.mapUint64Uint64.forEach((value, key) => {
      TestAllTypesProto3_MapUint64Uint64Entry.encode({ key: key as any, value }, writer.uint32(474).fork()).ldelim();
    });
    message.mapSint32Sint32.forEach((value, key) => {
      TestAllTypesProto3_MapSint32Sint32Entry.encode({ key: key as any, value }, writer.uint32(482).fork()).ldelim();
    });
    message.mapSint64Sint64.forEach((value, key) => {
      TestAllTypesProto3_MapSint64Sint64Entry.encode({ key: key as any, value }, writer.uint32(490).fork()).ldelim();
    });
    message.mapFixed32Fixed32.forEach((value, key) => {
      TestAllTypesProto3_MapFixed32Fixed32Entry.encode({ key: key as any, value }, writer.uint32(498).fork()).ldelim();
    });
    message.mapFixed64Fixed64.forEach((value, key) => {
      TestAllTypesProto3_MapFixed64Fixed64Entry.encode({ key: key as any, value }, writer.uint32(506).fork()).ldelim();
    });
    message.mapSfixed32Sfixed32.forEach((value, key) => {
      TestAllTypesProto3_MapSfixed32Sfixed32Entry.encode({ key: key as any, value }, writer.uint32(514).fork())
        .ldelim();
    });
    message.mapSfixed64Sfixed64.forEach((value, key) => {
      TestAllTypesProto3_MapSfixed64Sfixed64Entry.encode({ key: key as any, value }, writer.uint32(522).fork())
        .ldelim();
    });
    message.mapInt32Float.forEach((value, key) => {
      TestAllTypesProto3_MapInt32FloatEntry.encode({ key: key as any, value }, writer.uint32(530).fork()).ldelim();
    });
    message.mapInt32Double.forEach((value, key) => {
      TestAllTypesProto3_MapInt32DoubleEntry.encode({ key: key as any, value }, writer.uint32(538).fork()).ldelim();
    });
    message.mapBoolBool.forEach((value, key) => {
      TestAllTypesProto3_MapBoolBoolEntry.encode({ key: key as any, value }, writer.uint32(546).fork()).ldelim();
    });
    message.mapStringString.forEach((value, key) => {
      TestAllTypesProto3_MapStringStringEntry.encode({ key: key as any, value }, writer.uint32(554).fork()).ldelim();
    });
    message.mapStringBytes.forEach((value, key) => {
      TestAllTypesProto3_MapStringBytesEntry.encode({ key: key as any, value }, writer.uint32(562).fork()).ldelim();
    });
    message.mapStringNestedMessage.forEach((value, key) => {
      TestAllTypesProto3_MapStringNestedMessageEntry.encode({ key: key as any, value }, writer.uint32(570).fork())
        .ldelim();
    });
    message.mapStringForeignMessage.forEach((value, key) => {
      TestAllTypesProto3_MapStringForeignMessageEntry.encode({ key: key as any, value }, writer.uint32(578).fork())
        .ldelim();
    });
    message.mapStringNestedEnum.forEach((value, key) => {
      TestAllTypesProto3_MapStringNestedEnumEntry.encode({ key: key as any, value }, writer.uint32(586).fork())
        .ldelim();
    });
    message.mapStringForeignEnum.forEach((value, key) => {
      TestAllTypesProto3_MapStringForeignEnumEntry.encode({ key: key as any, value }, writer.uint32(594).fork())
        .ldelim();
    });
    switch (message.oneofField?.$case) {
      case "oneofUint32":
        writer.uint32(888).uint32(message.oneofField.oneofUint32);
        break;
      case "oneofNestedMessage":
        TestAllTypesProto3_NestedMessage.encode(message.oneofField.oneofNestedMessage, writer.uint32(898).fork())
          .ldelim();
        break;
      case "oneofString":
        writer.uint32(906).string(message.oneofField.oneofString);
        break;
      case "oneofBytes":
        writer.uint32(914).bytes(message.oneofField.oneofBytes);
        break;
      case "oneofBool":
        writer.uint32(920).bool(message.oneofField.oneofBool);
        break;
      case "oneofUint64":
        writer.uint32(928).uint64(message.oneofField.oneofUint64);
        break;
      case "oneofFloat":
        writer.uint32(941).float(message.oneofField.oneofFloat);
        break;
      case "oneofDouble":
        writer.uint32(945).double(message.oneofField.oneofDouble);
        break;
      case "oneofEnum":
        writer.uint32(952).int32(message.oneofField.oneofEnum);
        break;
      case "oneofNullValue":
        writer.uint32(960).int32(message.oneofField.oneofNullValue);
        break;
    }
    if (message.optionalBoolWrapper !== undefined) {
      BoolValue.encode({ value: message.optionalBoolWrapper! }, writer.uint32(1610).fork()).ldelim();
    }
    if (message.optionalInt32Wrapper !== undefined) {
      Int32Value.encode({ value: message.optionalInt32Wrapper! }, writer.uint32(1618).fork()).ldelim();
    }
    if (message.optionalInt64Wrapper !== undefined) {
      Int64Value.encode({ value: message.optionalInt64Wrapper! }, writer.uint32(1626).fork()).ldelim();
    }
    if (message.optionalUint32Wrapper !== undefined) {
      UInt32Value.encode({ value: message.optionalUint32Wrapper! }, writer.uint32(1634).fork()).ldelim();
    }
    if (message.optionalUint64Wrapper !== undefined) {
      UInt64Value.encode({ value: message.optionalUint64Wrapper! }, writer.uint32(1642).fork()).ldelim();
    }
    if (message.optionalFloatWrapper !== undefined) {
      FloatValue.encode({ value: message.optionalFloatWrapper! }, writer.uint32(1650).fork()).ldelim();
    }
    if (message.optionalDoubleWrapper !== undefined) {
      DoubleValue.encode({ value: message.optionalDoubleWrapper! }, writer.uint32(1658).fork()).ldelim();
    }
    if (message.optionalStringWrapper !== undefined) {
      StringValue.encode({ value: message.optionalStringWrapper! }, writer.uint32(1666).fork()).ldelim();
    }
    if (message.optionalBytesWrapper !== undefined) {
      BytesValue.encode({ value: message.optionalBytesWrapper! }, writer.uint32(1674).fork()).ldelim();
    }
    for (const v of message.repeatedBoolWrapper) {
      BoolValue.encode({ value: v!! }, writer.uint32(1690).fork()).ldelim();
    }
    for (const v of message.repeatedInt32Wrapper) {
      Int32Value.encode({ value: v!! }, writer.uint32(1698).fork()).ldelim();
    }
    for (const v of message.repeatedInt64Wrapper) {
      Int64Value.encode({ value: v!! }, writer.uint32(1706).fork()).ldelim();
    }
    for (const v of message.repeatedUint32Wrapper) {
      UInt32Value.encode({ value: v!! }, writer.uint32(1714).fork()).ldelim();
    }
    for (const v of message.repeatedUint64Wrapper) {
      UInt64Value.encode({ value: v!! }, writer.uint32(1722).fork()).ldelim();
    }
    for (const v of message.repeatedFloatWrapper) {
      FloatValue.encode({ value: v!! }, writer.uint32(1730).fork()).ldelim();
    }
    for (const v of message.repeatedDoubleWrapper) {
      DoubleValue.encode({ value: v!! }, writer.uint32(1738).fork()).ldelim();
    }
    for (const v of message.repeatedStringWrapper) {
      StringValue.encode({ value: v!! }, writer.uint32(1746).fork()).ldelim();
    }
    for (const v of message.repeatedBytesWrapper) {
      BytesValue.encode({ value: v!! }, writer.uint32(1754).fork()).ldelim();
    }
    if (message.optionalDuration !== undefined) {
      Duration.encode(message.optionalDuration, writer.uint32(2410).fork()).ldelim();
    }
    if (message.optionalTimestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.optionalTimestamp), writer.uint32(2418).fork()).ldelim();
    }
    if (message.optionalFieldMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.optionalFieldMask), writer.uint32(2426).fork()).ldelim();
    }
    if (message.optionalStruct !== undefined) {
      Struct.encode(Struct.wrap(message.optionalStruct), writer.uint32(2434).fork()).ldelim();
    }
    if (message.optionalAny !== undefined) {
      Any.encode(message.optionalAny, writer.uint32(2442).fork()).ldelim();
    }
    if (message.optionalValue !== undefined) {
      Value.encode(Value.wrap(message.optionalValue), writer.uint32(2450).fork()).ldelim();
    }
    if (message.optionalNullValue !== 0) {
      writer.uint32(2456).int32(message.optionalNullValue);
    }
    for (const v of message.repeatedDuration) {
      Duration.encode(v!, writer.uint32(2490).fork()).ldelim();
    }
    for (const v of message.repeatedTimestamp) {
      Timestamp.encode(toTimestamp(v!), writer.uint32(2498).fork()).ldelim();
    }
    for (const v of message.repeatedFieldmask) {
      FieldMask.encode(FieldMask.wrap(v!), writer.uint32(2506).fork()).ldelim();
    }
    for (const v of message.repeatedStruct) {
      Struct.encode(Struct.wrap(v!), writer.uint32(2594).fork()).ldelim();
    }
    for (const v of message.repeatedAny) {
      Any.encode(v!, writer.uint32(2522).fork()).ldelim();
    }
    for (const v of message.repeatedValue) {
      Value.encode(Value.wrap(v!), writer.uint32(2530).fork()).ldelim();
    }
    for (const v of message.repeatedListValue) {
      ListValue.encode(ListValue.wrap(v!), writer.uint32(2538).fork()).ldelim();
    }
    if (message.fieldname1 !== 0) {
      writer.uint32(3208).int32(message.fieldname1);
    }
    if (message.fieldName2 !== 0) {
      writer.uint32(3216).int32(message.fieldName2);
    }
    if (message.FieldName3 !== 0) {
      writer.uint32(3224).int32(message.FieldName3);
    }
    if (message.fieldName4 !== 0) {
      writer.uint32(3232).int32(message.fieldName4);
    }
    if (message.field0name5 !== 0) {
      writer.uint32(3240).int32(message.field0name5);
    }
    if (message.field0Name6 !== 0) {
      writer.uint32(3248).int32(message.field0Name6);
    }
    if (message.fieldName7 !== 0) {
      writer.uint32(3256).int32(message.fieldName7);
    }
    if (message.FieldName8 !== 0) {
      writer.uint32(3264).int32(message.FieldName8);
    }
    if (message.fieldName9 !== 0) {
      writer.uint32(3272).int32(message.fieldName9);
    }
    if (message.FieldName10 !== 0) {
      writer.uint32(3280).int32(message.FieldName10);
    }
    if (message.fieldName11 !== 0) {
      writer.uint32(3288).int32(message.fieldName11);
    }
    if (message.FIELDName12 !== 0) {
      writer.uint32(3296).int32(message.FIELDName12);
    }
    if (message.FieldName13 !== 0) {
      writer.uint32(3304).int32(message.FieldName13);
    }
    if (message.FieldName14 !== 0) {
      writer.uint32(3312).int32(message.FieldName14);
    }
    if (message.fieldName15 !== 0) {
      writer.uint32(3320).int32(message.fieldName15);
    }
    if (message.fieldName16 !== 0) {
      writer.uint32(3328).int32(message.fieldName16);
    }
    if (message.fieldName17 !== 0) {
      writer.uint32(3336).int32(message.fieldName17);
    }
    if (message.FieldName18 !== 0) {
      writer.uint32(3344).int32(message.FieldName18);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.optionalInt32 = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.optionalInt64 = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.optionalUint32 = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.optionalUint64 = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.optionalSint32 = reader.sint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.optionalSint64 = longToNumber(reader.sint64() as Long);
          continue;
        case 7:
          if (tag !== 61) {
            break;
          }

          message.optionalFixed32 = reader.fixed32();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.optionalFixed64 = longToNumber(reader.fixed64() as Long);
          continue;
        case 9:
          if (tag !== 77) {
            break;
          }

          message.optionalSfixed32 = reader.sfixed32();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.optionalSfixed64 = longToNumber(reader.sfixed64() as Long);
          continue;
        case 11:
          if (tag !== 93) {
            break;
          }

          message.optionalFloat = reader.float();
          continue;
        case 12:
          if (tag !== 97) {
            break;
          }

          message.optionalDouble = reader.double();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.optionalBool = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.optionalString = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.optionalBytes = reader.bytes();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.optionalNestedMessage = TestAllTypesProto3_NestedMessage.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.optionalForeignMessage = ForeignMessage.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.optionalNestedEnum = reader.int32() as any;
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.optionalForeignEnum = reader.int32() as any;
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.optionalAliasedEnum = reader.int32() as any;
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.optionalStringPiece = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.optionalCord = reader.string();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.recursiveMessage = TestAllTypesProto3.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag === 248) {
            message.repeatedInt32.push(reader.int32());

            continue;
          }

          if (tag === 250) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedInt32.push(reader.int32());
            }

            continue;
          }

          break;
        case 32:
          if (tag === 256) {
            message.repeatedInt64.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 258) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedInt64.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 33:
          if (tag === 264) {
            message.repeatedUint32.push(reader.uint32());

            continue;
          }

          if (tag === 266) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedUint32.push(reader.uint32());
            }

            continue;
          }

          break;
        case 34:
          if (tag === 272) {
            message.repeatedUint64.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 274) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedUint64.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 35:
          if (tag === 280) {
            message.repeatedSint32.push(reader.sint32());

            continue;
          }

          if (tag === 282) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSint32.push(reader.sint32());
            }

            continue;
          }

          break;
        case 36:
          if (tag === 288) {
            message.repeatedSint64.push(longToNumber(reader.sint64() as Long));

            continue;
          }

          if (tag === 290) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSint64.push(longToNumber(reader.sint64() as Long));
            }

            continue;
          }

          break;
        case 37:
          if (tag === 301) {
            message.repeatedFixed32.push(reader.fixed32());

            continue;
          }

          if (tag === 298) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedFixed32.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 38:
          if (tag === 305) {
            message.repeatedFixed64.push(longToNumber(reader.fixed64() as Long));

            continue;
          }

          if (tag === 306) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedFixed64.push(longToNumber(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 39:
          if (tag === 317) {
            message.repeatedSfixed32.push(reader.sfixed32());

            continue;
          }

          if (tag === 314) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSfixed32.push(reader.sfixed32());
            }

            continue;
          }

          break;
        case 40:
          if (tag === 321) {
            message.repeatedSfixed64.push(longToNumber(reader.sfixed64() as Long));

            continue;
          }

          if (tag === 322) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSfixed64.push(longToNumber(reader.sfixed64() as Long));
            }

            continue;
          }

          break;
        case 41:
          if (tag === 333) {
            message.repeatedFloat.push(reader.float());

            continue;
          }

          if (tag === 330) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedFloat.push(reader.float());
            }

            continue;
          }

          break;
        case 42:
          if (tag === 337) {
            message.repeatedDouble.push(reader.double());

            continue;
          }

          if (tag === 338) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedDouble.push(reader.double());
            }

            continue;
          }

          break;
        case 43:
          if (tag === 344) {
            message.repeatedBool.push(reader.bool());

            continue;
          }

          if (tag === 346) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedBool.push(reader.bool());
            }

            continue;
          }

          break;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.repeatedString.push(reader.string());
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.repeatedBytes.push(reader.bytes());
          continue;
        case 48:
          if (tag !== 386) {
            break;
          }

          message.repeatedNestedMessage.push(TestAllTypesProto3_NestedMessage.decode(reader, reader.uint32()));
          continue;
        case 49:
          if (tag !== 394) {
            break;
          }

          message.repeatedForeignMessage.push(ForeignMessage.decode(reader, reader.uint32()));
          continue;
        case 51:
          if (tag === 408) {
            message.repeatedNestedEnum.push(reader.int32() as any);

            continue;
          }

          if (tag === 410) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedNestedEnum.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 52:
          if (tag === 416) {
            message.repeatedForeignEnum.push(reader.int32() as any);

            continue;
          }

          if (tag === 418) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedForeignEnum.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 54:
          if (tag !== 434) {
            break;
          }

          message.repeatedStringPiece.push(reader.string());
          continue;
        case 55:
          if (tag !== 442) {
            break;
          }

          message.repeatedCord.push(reader.string());
          continue;
        case 75:
          if (tag === 600) {
            message.packedInt32.push(reader.int32());

            continue;
          }

          if (tag === 602) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedInt32.push(reader.int32());
            }

            continue;
          }

          break;
        case 76:
          if (tag === 608) {
            message.packedInt64.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 610) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedInt64.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 77:
          if (tag === 616) {
            message.packedUint32.push(reader.uint32());

            continue;
          }

          if (tag === 618) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedUint32.push(reader.uint32());
            }

            continue;
          }

          break;
        case 78:
          if (tag === 624) {
            message.packedUint64.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 626) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedUint64.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 79:
          if (tag === 632) {
            message.packedSint32.push(reader.sint32());

            continue;
          }

          if (tag === 634) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedSint32.push(reader.sint32());
            }

            continue;
          }

          break;
        case 80:
          if (tag === 640) {
            message.packedSint64.push(longToNumber(reader.sint64() as Long));

            continue;
          }

          if (tag === 642) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedSint64.push(longToNumber(reader.sint64() as Long));
            }

            continue;
          }

          break;
        case 81:
          if (tag === 653) {
            message.packedFixed32.push(reader.fixed32());

            continue;
          }

          if (tag === 650) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedFixed32.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 82:
          if (tag === 657) {
            message.packedFixed64.push(longToNumber(reader.fixed64() as Long));

            continue;
          }

          if (tag === 658) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedFixed64.push(longToNumber(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 83:
          if (tag === 669) {
            message.packedSfixed32.push(reader.sfixed32());

            continue;
          }

          if (tag === 666) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedSfixed32.push(reader.sfixed32());
            }

            continue;
          }

          break;
        case 84:
          if (tag === 673) {
            message.packedSfixed64.push(longToNumber(reader.sfixed64() as Long));

            continue;
          }

          if (tag === 674) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedSfixed64.push(longToNumber(reader.sfixed64() as Long));
            }

            continue;
          }

          break;
        case 85:
          if (tag === 685) {
            message.packedFloat.push(reader.float());

            continue;
          }

          if (tag === 682) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedFloat.push(reader.float());
            }

            continue;
          }

          break;
        case 86:
          if (tag === 689) {
            message.packedDouble.push(reader.double());

            continue;
          }

          if (tag === 690) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedDouble.push(reader.double());
            }

            continue;
          }

          break;
        case 87:
          if (tag === 696) {
            message.packedBool.push(reader.bool());

            continue;
          }

          if (tag === 698) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedBool.push(reader.bool());
            }

            continue;
          }

          break;
        case 88:
          if (tag === 704) {
            message.packedNestedEnum.push(reader.int32() as any);

            continue;
          }

          if (tag === 706) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedNestedEnum.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 89:
          if (tag === 712) {
            message.unpackedInt32.push(reader.int32());

            continue;
          }

          if (tag === 714) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedInt32.push(reader.int32());
            }

            continue;
          }

          break;
        case 90:
          if (tag === 720) {
            message.unpackedInt64.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 722) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedInt64.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 91:
          if (tag === 728) {
            message.unpackedUint32.push(reader.uint32());

            continue;
          }

          if (tag === 730) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedUint32.push(reader.uint32());
            }

            continue;
          }

          break;
        case 92:
          if (tag === 736) {
            message.unpackedUint64.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 738) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedUint64.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 93:
          if (tag === 744) {
            message.unpackedSint32.push(reader.sint32());

            continue;
          }

          if (tag === 746) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedSint32.push(reader.sint32());
            }

            continue;
          }

          break;
        case 94:
          if (tag === 752) {
            message.unpackedSint64.push(longToNumber(reader.sint64() as Long));

            continue;
          }

          if (tag === 754) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedSint64.push(longToNumber(reader.sint64() as Long));
            }

            continue;
          }

          break;
        case 95:
          if (tag === 765) {
            message.unpackedFixed32.push(reader.fixed32());

            continue;
          }

          if (tag === 762) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedFixed32.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 96:
          if (tag === 769) {
            message.unpackedFixed64.push(longToNumber(reader.fixed64() as Long));

            continue;
          }

          if (tag === 770) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedFixed64.push(longToNumber(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 97:
          if (tag === 781) {
            message.unpackedSfixed32.push(reader.sfixed32());

            continue;
          }

          if (tag === 778) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedSfixed32.push(reader.sfixed32());
            }

            continue;
          }

          break;
        case 98:
          if (tag === 785) {
            message.unpackedSfixed64.push(longToNumber(reader.sfixed64() as Long));

            continue;
          }

          if (tag === 786) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedSfixed64.push(longToNumber(reader.sfixed64() as Long));
            }

            continue;
          }

          break;
        case 99:
          if (tag === 797) {
            message.unpackedFloat.push(reader.float());

            continue;
          }

          if (tag === 794) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedFloat.push(reader.float());
            }

            continue;
          }

          break;
        case 100:
          if (tag === 801) {
            message.unpackedDouble.push(reader.double());

            continue;
          }

          if (tag === 802) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedDouble.push(reader.double());
            }

            continue;
          }

          break;
        case 101:
          if (tag === 808) {
            message.unpackedBool.push(reader.bool());

            continue;
          }

          if (tag === 810) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedBool.push(reader.bool());
            }

            continue;
          }

          break;
        case 102:
          if (tag === 816) {
            message.unpackedNestedEnum.push(reader.int32() as any);

            continue;
          }

          if (tag === 818) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedNestedEnum.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 56:
          if (tag !== 450) {
            break;
          }

          const entry56 = TestAllTypesProto3_MapInt32Int32Entry.decode(reader, reader.uint32());
          if (entry56.value !== undefined) {
            message.mapInt32Int32.set(entry56.key, entry56.value);
          }
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          const entry57 = TestAllTypesProto3_MapInt64Int64Entry.decode(reader, reader.uint32());
          if (entry57.value !== undefined) {
            message.mapInt64Int64.set(entry57.key, entry57.value);
          }
          continue;
        case 58:
          if (tag !== 466) {
            break;
          }

          const entry58 = TestAllTypesProto3_MapUint32Uint32Entry.decode(reader, reader.uint32());
          if (entry58.value !== undefined) {
            message.mapUint32Uint32.set(entry58.key, entry58.value);
          }
          continue;
        case 59:
          if (tag !== 474) {
            break;
          }

          const entry59 = TestAllTypesProto3_MapUint64Uint64Entry.decode(reader, reader.uint32());
          if (entry59.value !== undefined) {
            message.mapUint64Uint64.set(entry59.key, entry59.value);
          }
          continue;
        case 60:
          if (tag !== 482) {
            break;
          }

          const entry60 = TestAllTypesProto3_MapSint32Sint32Entry.decode(reader, reader.uint32());
          if (entry60.value !== undefined) {
            message.mapSint32Sint32.set(entry60.key, entry60.value);
          }
          continue;
        case 61:
          if (tag !== 490) {
            break;
          }

          const entry61 = TestAllTypesProto3_MapSint64Sint64Entry.decode(reader, reader.uint32());
          if (entry61.value !== undefined) {
            message.mapSint64Sint64.set(entry61.key, entry61.value);
          }
          continue;
        case 62:
          if (tag !== 498) {
            break;
          }

          const entry62 = TestAllTypesProto3_MapFixed32Fixed32Entry.decode(reader, reader.uint32());
          if (entry62.value !== undefined) {
            message.mapFixed32Fixed32.set(entry62.key, entry62.value);
          }
          continue;
        case 63:
          if (tag !== 506) {
            break;
          }

          const entry63 = TestAllTypesProto3_MapFixed64Fixed64Entry.decode(reader, reader.uint32());
          if (entry63.value !== undefined) {
            message.mapFixed64Fixed64.set(entry63.key, entry63.value);
          }
          continue;
        case 64:
          if (tag !== 514) {
            break;
          }

          const entry64 = TestAllTypesProto3_MapSfixed32Sfixed32Entry.decode(reader, reader.uint32());
          if (entry64.value !== undefined) {
            message.mapSfixed32Sfixed32.set(entry64.key, entry64.value);
          }
          continue;
        case 65:
          if (tag !== 522) {
            break;
          }

          const entry65 = TestAllTypesProto3_MapSfixed64Sfixed64Entry.decode(reader, reader.uint32());
          if (entry65.value !== undefined) {
            message.mapSfixed64Sfixed64.set(entry65.key, entry65.value);
          }
          continue;
        case 66:
          if (tag !== 530) {
            break;
          }

          const entry66 = TestAllTypesProto3_MapInt32FloatEntry.decode(reader, reader.uint32());
          if (entry66.value !== undefined) {
            message.mapInt32Float.set(entry66.key, entry66.value);
          }
          continue;
        case 67:
          if (tag !== 538) {
            break;
          }

          const entry67 = TestAllTypesProto3_MapInt32DoubleEntry.decode(reader, reader.uint32());
          if (entry67.value !== undefined) {
            message.mapInt32Double.set(entry67.key, entry67.value);
          }
          continue;
        case 68:
          if (tag !== 546) {
            break;
          }

          const entry68 = TestAllTypesProto3_MapBoolBoolEntry.decode(reader, reader.uint32());
          if (entry68.value !== undefined) {
            message.mapBoolBool.set(entry68.key, entry68.value);
          }
          continue;
        case 69:
          if (tag !== 554) {
            break;
          }

          const entry69 = TestAllTypesProto3_MapStringStringEntry.decode(reader, reader.uint32());
          if (entry69.value !== undefined) {
            message.mapStringString.set(entry69.key, entry69.value);
          }
          continue;
        case 70:
          if (tag !== 562) {
            break;
          }

          const entry70 = TestAllTypesProto3_MapStringBytesEntry.decode(reader, reader.uint32());
          if (entry70.value !== undefined) {
            message.mapStringBytes.set(entry70.key, entry70.value);
          }
          continue;
        case 71:
          if (tag !== 570) {
            break;
          }

          const entry71 = TestAllTypesProto3_MapStringNestedMessageEntry.decode(reader, reader.uint32());
          if (entry71.value !== undefined) {
            message.mapStringNestedMessage.set(entry71.key, entry71.value);
          }
          continue;
        case 72:
          if (tag !== 578) {
            break;
          }

          const entry72 = TestAllTypesProto3_MapStringForeignMessageEntry.decode(reader, reader.uint32());
          if (entry72.value !== undefined) {
            message.mapStringForeignMessage.set(entry72.key, entry72.value);
          }
          continue;
        case 73:
          if (tag !== 586) {
            break;
          }

          const entry73 = TestAllTypesProto3_MapStringNestedEnumEntry.decode(reader, reader.uint32());
          if (entry73.value !== undefined) {
            message.mapStringNestedEnum.set(entry73.key, entry73.value);
          }
          continue;
        case 74:
          if (tag !== 594) {
            break;
          }

          const entry74 = TestAllTypesProto3_MapStringForeignEnumEntry.decode(reader, reader.uint32());
          if (entry74.value !== undefined) {
            message.mapStringForeignEnum.set(entry74.key, entry74.value);
          }
          continue;
        case 111:
          if (tag !== 888) {
            break;
          }

          message.oneofField = { $case: "oneofUint32", oneofUint32: reader.uint32() };
          continue;
        case 112:
          if (tag !== 898) {
            break;
          }

          message.oneofField = {
            $case: "oneofNestedMessage",
            oneofNestedMessage: TestAllTypesProto3_NestedMessage.decode(reader, reader.uint32()),
          };
          continue;
        case 113:
          if (tag !== 906) {
            break;
          }

          message.oneofField = { $case: "oneofString", oneofString: reader.string() };
          continue;
        case 114:
          if (tag !== 914) {
            break;
          }

          message.oneofField = { $case: "oneofBytes", oneofBytes: reader.bytes() };
          continue;
        case 115:
          if (tag !== 920) {
            break;
          }

          message.oneofField = { $case: "oneofBool", oneofBool: reader.bool() };
          continue;
        case 116:
          if (tag !== 928) {
            break;
          }

          message.oneofField = { $case: "oneofUint64", oneofUint64: longToNumber(reader.uint64() as Long) };
          continue;
        case 117:
          if (tag !== 941) {
            break;
          }

          message.oneofField = { $case: "oneofFloat", oneofFloat: reader.float() };
          continue;
        case 118:
          if (tag !== 945) {
            break;
          }

          message.oneofField = { $case: "oneofDouble", oneofDouble: reader.double() };
          continue;
        case 119:
          if (tag !== 952) {
            break;
          }

          message.oneofField = { $case: "oneofEnum", oneofEnum: reader.int32() as any };
          continue;
        case 120:
          if (tag !== 960) {
            break;
          }

          message.oneofField = { $case: "oneofNullValue", oneofNullValue: reader.int32() as any };
          continue;
        case 201:
          if (tag !== 1610) {
            break;
          }

          message.optionalBoolWrapper = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 202:
          if (tag !== 1618) {
            break;
          }

          message.optionalInt32Wrapper = Int32Value.decode(reader, reader.uint32()).value;
          continue;
        case 203:
          if (tag !== 1626) {
            break;
          }

          message.optionalInt64Wrapper = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 204:
          if (tag !== 1634) {
            break;
          }

          message.optionalUint32Wrapper = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 205:
          if (tag !== 1642) {
            break;
          }

          message.optionalUint64Wrapper = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
        case 206:
          if (tag !== 1650) {
            break;
          }

          message.optionalFloatWrapper = FloatValue.decode(reader, reader.uint32()).value;
          continue;
        case 207:
          if (tag !== 1658) {
            break;
          }

          message.optionalDoubleWrapper = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 208:
          if (tag !== 1666) {
            break;
          }

          message.optionalStringWrapper = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 209:
          if (tag !== 1674) {
            break;
          }

          message.optionalBytesWrapper = BytesValue.decode(reader, reader.uint32()).value;
          continue;
        case 211:
          if (tag !== 1690) {
            break;
          }

          message.repeatedBoolWrapper.push(BoolValue.decode(reader, reader.uint32()).value);
          continue;
        case 212:
          if (tag !== 1698) {
            break;
          }

          message.repeatedInt32Wrapper.push(Int32Value.decode(reader, reader.uint32()).value);
          continue;
        case 213:
          if (tag !== 1706) {
            break;
          }

          message.repeatedInt64Wrapper.push(Int64Value.decode(reader, reader.uint32()).value);
          continue;
        case 214:
          if (tag !== 1714) {
            break;
          }

          message.repeatedUint32Wrapper.push(UInt32Value.decode(reader, reader.uint32()).value);
          continue;
        case 215:
          if (tag !== 1722) {
            break;
          }

          message.repeatedUint64Wrapper.push(UInt64Value.decode(reader, reader.uint32()).value);
          continue;
        case 216:
          if (tag !== 1730) {
            break;
          }

          message.repeatedFloatWrapper.push(FloatValue.decode(reader, reader.uint32()).value);
          continue;
        case 217:
          if (tag !== 1738) {
            break;
          }

          message.repeatedDoubleWrapper.push(DoubleValue.decode(reader, reader.uint32()).value);
          continue;
        case 218:
          if (tag !== 1746) {
            break;
          }

          message.repeatedStringWrapper.push(StringValue.decode(reader, reader.uint32()).value);
          continue;
        case 219:
          if (tag !== 1754) {
            break;
          }

          message.repeatedBytesWrapper.push(BytesValue.decode(reader, reader.uint32()).value);
          continue;
        case 301:
          if (tag !== 2410) {
            break;
          }

          message.optionalDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 302:
          if (tag !== 2418) {
            break;
          }

          message.optionalTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 303:
          if (tag !== 2426) {
            break;
          }

          message.optionalFieldMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 304:
          if (tag !== 2434) {
            break;
          }

          message.optionalStruct = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 305:
          if (tag !== 2442) {
            break;
          }

          message.optionalAny = Any.decode(reader, reader.uint32());
          continue;
        case 306:
          if (tag !== 2450) {
            break;
          }

          message.optionalValue = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
        case 307:
          if (tag !== 2456) {
            break;
          }

          message.optionalNullValue = reader.int32() as any;
          continue;
        case 311:
          if (tag !== 2490) {
            break;
          }

          message.repeatedDuration.push(Duration.decode(reader, reader.uint32()));
          continue;
        case 312:
          if (tag !== 2498) {
            break;
          }

          message.repeatedTimestamp.push(fromTimestamp(Timestamp.decode(reader, reader.uint32())));
          continue;
        case 313:
          if (tag !== 2506) {
            break;
          }

          message.repeatedFieldmask.push(FieldMask.unwrap(FieldMask.decode(reader, reader.uint32())));
          continue;
        case 324:
          if (tag !== 2594) {
            break;
          }

          message.repeatedStruct.push(Struct.unwrap(Struct.decode(reader, reader.uint32())));
          continue;
        case 315:
          if (tag !== 2522) {
            break;
          }

          message.repeatedAny.push(Any.decode(reader, reader.uint32()));
          continue;
        case 316:
          if (tag !== 2530) {
            break;
          }

          message.repeatedValue.push(Value.unwrap(Value.decode(reader, reader.uint32())));
          continue;
        case 317:
          if (tag !== 2538) {
            break;
          }

          message.repeatedListValue.push(ListValue.unwrap(ListValue.decode(reader, reader.uint32())));
          continue;
        case 401:
          if (tag !== 3208) {
            break;
          }

          message.fieldname1 = reader.int32();
          continue;
        case 402:
          if (tag !== 3216) {
            break;
          }

          message.fieldName2 = reader.int32();
          continue;
        case 403:
          if (tag !== 3224) {
            break;
          }

          message.FieldName3 = reader.int32();
          continue;
        case 404:
          if (tag !== 3232) {
            break;
          }

          message.fieldName4 = reader.int32();
          continue;
        case 405:
          if (tag !== 3240) {
            break;
          }

          message.field0name5 = reader.int32();
          continue;
        case 406:
          if (tag !== 3248) {
            break;
          }

          message.field0Name6 = reader.int32();
          continue;
        case 407:
          if (tag !== 3256) {
            break;
          }

          message.fieldName7 = reader.int32();
          continue;
        case 408:
          if (tag !== 3264) {
            break;
          }

          message.FieldName8 = reader.int32();
          continue;
        case 409:
          if (tag !== 3272) {
            break;
          }

          message.fieldName9 = reader.int32();
          continue;
        case 410:
          if (tag !== 3280) {
            break;
          }

          message.FieldName10 = reader.int32();
          continue;
        case 411:
          if (tag !== 3288) {
            break;
          }

          message.fieldName11 = reader.int32();
          continue;
        case 412:
          if (tag !== 3296) {
            break;
          }

          message.FIELDName12 = reader.int32();
          continue;
        case 413:
          if (tag !== 3304) {
            break;
          }

          message.FieldName13 = reader.int32();
          continue;
        case 414:
          if (tag !== 3312) {
            break;
          }

          message.FieldName14 = reader.int32();
          continue;
        case 415:
          if (tag !== 3320) {
            break;
          }

          message.fieldName15 = reader.int32();
          continue;
        case 416:
          if (tag !== 3328) {
            break;
          }

          message.fieldName16 = reader.int32();
          continue;
        case 417:
          if (tag !== 3336) {
            break;
          }

          message.fieldName17 = reader.int32();
          continue;
        case 418:
          if (tag !== 3344) {
            break;
          }

          message.FieldName18 = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3 {
    return {
      optionalInt32: isSet(object.optionalInt32) ? globalThis.Number(object.optionalInt32) : 0,
      optionalInt64: isSet(object.optionalInt64) ? globalThis.Number(object.optionalInt64) : 0,
      optionalUint32: isSet(object.optionalUint32) ? globalThis.Number(object.optionalUint32) : 0,
      optionalUint64: isSet(object.optionalUint64) ? globalThis.Number(object.optionalUint64) : 0,
      optionalSint32: isSet(object.optionalSint32) ? globalThis.Number(object.optionalSint32) : 0,
      optionalSint64: isSet(object.optionalSint64) ? globalThis.Number(object.optionalSint64) : 0,
      optionalFixed32: isSet(object.optionalFixed32) ? globalThis.Number(object.optionalFixed32) : 0,
      optionalFixed64: isSet(object.optionalFixed64) ? globalThis.Number(object.optionalFixed64) : 0,
      optionalSfixed32: isSet(object.optionalSfixed32) ? globalThis.Number(object.optionalSfixed32) : 0,
      optionalSfixed64: isSet(object.optionalSfixed64) ? globalThis.Number(object.optionalSfixed64) : 0,
      optionalFloat: isSet(object.optionalFloat) ? globalThis.Number(object.optionalFloat) : 0,
      optionalDouble: isSet(object.optionalDouble) ? globalThis.Number(object.optionalDouble) : 0,
      optionalBool: isSet(object.optionalBool) ? globalThis.Boolean(object.optionalBool) : false,
      optionalString: isSet(object.optionalString) ? globalThis.String(object.optionalString) : "",
      optionalBytes: isSet(object.optionalBytes) ? bytesFromBase64(object.optionalBytes) : new Uint8Array(0),
      optionalNestedMessage: isSet(object.optionalNestedMessage)
        ? TestAllTypesProto3_NestedMessage.fromJSON(object.optionalNestedMessage)
        : undefined,
      optionalForeignMessage: isSet(object.optionalForeignMessage)
        ? ForeignMessage.fromJSON(object.optionalForeignMessage)
        : undefined,
      optionalNestedEnum: isSet(object.optionalNestedEnum)
        ? testAllTypesProto3_NestedEnumFromJSON(object.optionalNestedEnum)
        : 0,
      optionalForeignEnum: isSet(object.optionalForeignEnum) ? foreignEnumFromJSON(object.optionalForeignEnum) : 0,
      optionalAliasedEnum: isSet(object.optionalAliasedEnum)
        ? testAllTypesProto3_AliasedEnumFromJSON(object.optionalAliasedEnum)
        : 0,
      optionalStringPiece: isSet(object.optionalStringPiece) ? globalThis.String(object.optionalStringPiece) : "",
      optionalCord: isSet(object.optionalCord) ? globalThis.String(object.optionalCord) : "",
      recursiveMessage: isSet(object.recursiveMessage)
        ? TestAllTypesProto3.fromJSON(object.recursiveMessage)
        : undefined,
      repeatedInt32: globalThis.Array.isArray(object?.repeatedInt32)
        ? object.repeatedInt32.map((e: any) => globalThis.Number(e))
        : [],
      repeatedInt64: globalThis.Array.isArray(object?.repeatedInt64)
        ? object.repeatedInt64.map((e: any) => globalThis.Number(e))
        : [],
      repeatedUint32: globalThis.Array.isArray(object?.repeatedUint32)
        ? object.repeatedUint32.map((e: any) => globalThis.Number(e))
        : [],
      repeatedUint64: globalThis.Array.isArray(object?.repeatedUint64)
        ? object.repeatedUint64.map((e: any) => globalThis.Number(e))
        : [],
      repeatedSint32: globalThis.Array.isArray(object?.repeatedSint32)
        ? object.repeatedSint32.map((e: any) => globalThis.Number(e))
        : [],
      repeatedSint64: globalThis.Array.isArray(object?.repeatedSint64)
        ? object.repeatedSint64.map((e: any) => globalThis.Number(e))
        : [],
      repeatedFixed32: globalThis.Array.isArray(object?.repeatedFixed32)
        ? object.repeatedFixed32.map((e: any) => globalThis.Number(e))
        : [],
      repeatedFixed64: globalThis.Array.isArray(object?.repeatedFixed64)
        ? object.repeatedFixed64.map((e: any) => globalThis.Number(e))
        : [],
      repeatedSfixed32: globalThis.Array.isArray(object?.repeatedSfixed32)
        ? object.repeatedSfixed32.map((e: any) => globalThis.Number(e))
        : [],
      repeatedSfixed64: globalThis.Array.isArray(object?.repeatedSfixed64)
        ? object.repeatedSfixed64.map((e: any) => globalThis.Number(e))
        : [],
      repeatedFloat: globalThis.Array.isArray(object?.repeatedFloat)
        ? object.repeatedFloat.map((e: any) => globalThis.Number(e))
        : [],
      repeatedDouble: globalThis.Array.isArray(object?.repeatedDouble)
        ? object.repeatedDouble.map((e: any) => globalThis.Number(e))
        : [],
      repeatedBool: globalThis.Array.isArray(object?.repeatedBool)
        ? object.repeatedBool.map((e: any) => globalThis.Boolean(e))
        : [],
      repeatedString: globalThis.Array.isArray(object?.repeatedString)
        ? object.repeatedString.map((e: any) => globalThis.String(e))
        : [],
      repeatedBytes: globalThis.Array.isArray(object?.repeatedBytes)
        ? object.repeatedBytes.map((e: any) => bytesFromBase64(e))
        : [],
      repeatedNestedMessage: globalThis.Array.isArray(object?.repeatedNestedMessage)
        ? object.repeatedNestedMessage.map((e: any) => TestAllTypesProto3_NestedMessage.fromJSON(e))
        : [],
      repeatedForeignMessage: globalThis.Array.isArray(object?.repeatedForeignMessage)
        ? object.repeatedForeignMessage.map((e: any) => ForeignMessage.fromJSON(e))
        : [],
      repeatedNestedEnum: globalThis.Array.isArray(object?.repeatedNestedEnum)
        ? object.repeatedNestedEnum.map((e: any) => testAllTypesProto3_NestedEnumFromJSON(e))
        : [],
      repeatedForeignEnum: globalThis.Array.isArray(object?.repeatedForeignEnum)
        ? object.repeatedForeignEnum.map((e: any) => foreignEnumFromJSON(e))
        : [],
      repeatedStringPiece: globalThis.Array.isArray(object?.repeatedStringPiece)
        ? object.repeatedStringPiece.map((e: any) => globalThis.String(e))
        : [],
      repeatedCord: globalThis.Array.isArray(object?.repeatedCord)
        ? object.repeatedCord.map((e: any) => globalThis.String(e))
        : [],
      packedInt32: globalThis.Array.isArray(object?.packedInt32)
        ? object.packedInt32.map((e: any) => globalThis.Number(e))
        : [],
      packedInt64: globalThis.Array.isArray(object?.packedInt64)
        ? object.packedInt64.map((e: any) => globalThis.Number(e))
        : [],
      packedUint32: globalThis.Array.isArray(object?.packedUint32)
        ? object.packedUint32.map((e: any) => globalThis.Number(e))
        : [],
      packedUint64: globalThis.Array.isArray(object?.packedUint64)
        ? object.packedUint64.map((e: any) => globalThis.Number(e))
        : [],
      packedSint32: globalThis.Array.isArray(object?.packedSint32)
        ? object.packedSint32.map((e: any) => globalThis.Number(e))
        : [],
      packedSint64: globalThis.Array.isArray(object?.packedSint64)
        ? object.packedSint64.map((e: any) => globalThis.Number(e))
        : [],
      packedFixed32: globalThis.Array.isArray(object?.packedFixed32)
        ? object.packedFixed32.map((e: any) => globalThis.Number(e))
        : [],
      packedFixed64: globalThis.Array.isArray(object?.packedFixed64)
        ? object.packedFixed64.map((e: any) => globalThis.Number(e))
        : [],
      packedSfixed32: globalThis.Array.isArray(object?.packedSfixed32)
        ? object.packedSfixed32.map((e: any) => globalThis.Number(e))
        : [],
      packedSfixed64: globalThis.Array.isArray(object?.packedSfixed64)
        ? object.packedSfixed64.map((e: any) => globalThis.Number(e))
        : [],
      packedFloat: globalThis.Array.isArray(object?.packedFloat)
        ? object.packedFloat.map((e: any) => globalThis.Number(e))
        : [],
      packedDouble: globalThis.Array.isArray(object?.packedDouble)
        ? object.packedDouble.map((e: any) => globalThis.Number(e))
        : [],
      packedBool: globalThis.Array.isArray(object?.packedBool)
        ? object.packedBool.map((e: any) => globalThis.Boolean(e))
        : [],
      packedNestedEnum: globalThis.Array.isArray(object?.packedNestedEnum)
        ? object.packedNestedEnum.map((e: any) => testAllTypesProto3_NestedEnumFromJSON(e))
        : [],
      unpackedInt32: globalThis.Array.isArray(object?.unpackedInt32)
        ? object.unpackedInt32.map((e: any) => globalThis.Number(e))
        : [],
      unpackedInt64: globalThis.Array.isArray(object?.unpackedInt64)
        ? object.unpackedInt64.map((e: any) => globalThis.Number(e))
        : [],
      unpackedUint32: globalThis.Array.isArray(object?.unpackedUint32)
        ? object.unpackedUint32.map((e: any) => globalThis.Number(e))
        : [],
      unpackedUint64: globalThis.Array.isArray(object?.unpackedUint64)
        ? object.unpackedUint64.map((e: any) => globalThis.Number(e))
        : [],
      unpackedSint32: globalThis.Array.isArray(object?.unpackedSint32)
        ? object.unpackedSint32.map((e: any) => globalThis.Number(e))
        : [],
      unpackedSint64: globalThis.Array.isArray(object?.unpackedSint64)
        ? object.unpackedSint64.map((e: any) => globalThis.Number(e))
        : [],
      unpackedFixed32: globalThis.Array.isArray(object?.unpackedFixed32)
        ? object.unpackedFixed32.map((e: any) => globalThis.Number(e))
        : [],
      unpackedFixed64: globalThis.Array.isArray(object?.unpackedFixed64)
        ? object.unpackedFixed64.map((e: any) => globalThis.Number(e))
        : [],
      unpackedSfixed32: globalThis.Array.isArray(object?.unpackedSfixed32)
        ? object.unpackedSfixed32.map((e: any) => globalThis.Number(e))
        : [],
      unpackedSfixed64: globalThis.Array.isArray(object?.unpackedSfixed64)
        ? object.unpackedSfixed64.map((e: any) => globalThis.Number(e))
        : [],
      unpackedFloat: globalThis.Array.isArray(object?.unpackedFloat)
        ? object.unpackedFloat.map((e: any) => globalThis.Number(e))
        : [],
      unpackedDouble: globalThis.Array.isArray(object?.unpackedDouble)
        ? object.unpackedDouble.map((e: any) => globalThis.Number(e))
        : [],
      unpackedBool: globalThis.Array.isArray(object?.unpackedBool)
        ? object.unpackedBool.map((e: any) => globalThis.Boolean(e))
        : [],
      unpackedNestedEnum: globalThis.Array.isArray(object?.unpackedNestedEnum)
        ? object.unpackedNestedEnum.map((e: any) => testAllTypesProto3_NestedEnumFromJSON(e))
        : [],
      mapInt32Int32: isObject(object.mapInt32Int32)
        ? Object.entries(object.mapInt32Int32).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapInt64Int64: isObject(object.mapInt64Int64)
        ? Object.entries(object.mapInt64Int64).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapUint32Uint32: isObject(object.mapUint32Uint32)
        ? Object.entries(object.mapUint32Uint32).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapUint64Uint64: isObject(object.mapUint64Uint64)
        ? Object.entries(object.mapUint64Uint64).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapSint32Sint32: isObject(object.mapSint32Sint32)
        ? Object.entries(object.mapSint32Sint32).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapSint64Sint64: isObject(object.mapSint64Sint64)
        ? Object.entries(object.mapSint64Sint64).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapFixed32Fixed32: isObject(object.mapFixed32Fixed32)
        ? Object.entries(object.mapFixed32Fixed32).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapFixed64Fixed64: isObject(object.mapFixed64Fixed64)
        ? Object.entries(object.mapFixed64Fixed64).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapSfixed32Sfixed32: isObject(object.mapSfixed32Sfixed32)
        ? Object.entries(object.mapSfixed32Sfixed32).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapSfixed64Sfixed64: isObject(object.mapSfixed64Sfixed64)
        ? Object.entries(object.mapSfixed64Sfixed64).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapInt32Float: isObject(object.mapInt32Float)
        ? Object.entries(object.mapInt32Float).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapInt32Double: isObject(object.mapInt32Double)
        ? Object.entries(object.mapInt32Double).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(globalThis.Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapBoolBool: isObject(object.mapBoolBool)
        ? Object.entries(object.mapBoolBool).reduce<Map<boolean, boolean>>((acc, [key, value]) => {
          acc.set(globalThis.Boolean(key), Boolean(value));
          return acc;
        }, new Map())
        : new Map(),
      mapStringString: isObject(object.mapStringString)
        ? Object.entries(object.mapStringString).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : new Map(),
      mapStringBytes: isObject(object.mapStringBytes)
        ? Object.entries(object.mapStringBytes).reduce<Map<string, Uint8Array>>((acc, [key, value]) => {
          acc.set(key, bytesFromBase64(value as string));
          return acc;
        }, new Map())
        : new Map(),
      mapStringNestedMessage: isObject(object.mapStringNestedMessage)
        ? Object.entries(object.mapStringNestedMessage).reduce<Map<string, TestAllTypesProto3_NestedMessage>>(
          (acc, [key, value]) => {
            acc.set(key, TestAllTypesProto3_NestedMessage.fromJSON(value));
            return acc;
          },
          new Map(),
        )
        : new Map(),
      mapStringForeignMessage: isObject(object.mapStringForeignMessage)
        ? Object.entries(object.mapStringForeignMessage).reduce<Map<string, ForeignMessage>>((acc, [key, value]) => {
          acc.set(key, ForeignMessage.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
      mapStringNestedEnum: isObject(object.mapStringNestedEnum)
        ? Object.entries(object.mapStringNestedEnum).reduce<Map<string, TestAllTypesProto3_NestedEnum>>(
          (acc, [key, value]) => {
            acc.set(key, testAllTypesProto3_NestedEnumFromJSON(value));
            return acc;
          },
          new Map(),
        )
        : new Map(),
      mapStringForeignEnum: isObject(object.mapStringForeignEnum)
        ? Object.entries(object.mapStringForeignEnum).reduce<Map<string, ForeignEnum>>((acc, [key, value]) => {
          acc.set(key, foreignEnumFromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
      oneofField: isSet(object.oneofUint32)
        ? { $case: "oneofUint32", oneofUint32: globalThis.Number(object.oneofUint32) }
        : isSet(object.oneofNestedMessage)
        ? {
          $case: "oneofNestedMessage",
          oneofNestedMessage: TestAllTypesProto3_NestedMessage.fromJSON(object.oneofNestedMessage),
        }
        : isSet(object.oneofString)
        ? { $case: "oneofString", oneofString: globalThis.String(object.oneofString) }
        : isSet(object.oneofBytes)
        ? { $case: "oneofBytes", oneofBytes: bytesFromBase64(object.oneofBytes) }
        : isSet(object.oneofBool)
        ? { $case: "oneofBool", oneofBool: globalThis.Boolean(object.oneofBool) }
        : isSet(object.oneofUint64)
        ? { $case: "oneofUint64", oneofUint64: globalThis.Number(object.oneofUint64) }
        : isSet(object.oneofFloat)
        ? { $case: "oneofFloat", oneofFloat: globalThis.Number(object.oneofFloat) }
        : isSet(object.oneofDouble)
        ? { $case: "oneofDouble", oneofDouble: globalThis.Number(object.oneofDouble) }
        : isSet(object.oneofEnum)
        ? { $case: "oneofEnum", oneofEnum: testAllTypesProto3_NestedEnumFromJSON(object.oneofEnum) }
        : isSet(object.oneofNullValue)
        ? { $case: "oneofNullValue", oneofNullValue: nullValueFromJSON(object.oneofNullValue) }
        : undefined,
      optionalBoolWrapper: isSet(object.optionalBoolWrapper) ? Boolean(object.optionalBoolWrapper) : undefined,
      optionalInt32Wrapper: isSet(object.optionalInt32Wrapper) ? Number(object.optionalInt32Wrapper) : undefined,
      optionalInt64Wrapper: isSet(object.optionalInt64Wrapper) ? Number(object.optionalInt64Wrapper) : undefined,
      optionalUint32Wrapper: isSet(object.optionalUint32Wrapper) ? Number(object.optionalUint32Wrapper) : undefined,
      optionalUint64Wrapper: isSet(object.optionalUint64Wrapper) ? Number(object.optionalUint64Wrapper) : undefined,
      optionalFloatWrapper: isSet(object.optionalFloatWrapper) ? Number(object.optionalFloatWrapper) : undefined,
      optionalDoubleWrapper: isSet(object.optionalDoubleWrapper) ? Number(object.optionalDoubleWrapper) : undefined,
      optionalStringWrapper: isSet(object.optionalStringWrapper) ? String(object.optionalStringWrapper) : undefined,
      optionalBytesWrapper: isSet(object.optionalBytesWrapper)
        ? new Uint8Array(object.optionalBytesWrapper)
        : undefined,
      repeatedBoolWrapper: globalThis.Array.isArray(object?.repeatedBoolWrapper)
        ? object.repeatedBoolWrapper.map((e: any) => Boolean(e))
        : [],
      repeatedInt32Wrapper: globalThis.Array.isArray(object?.repeatedInt32Wrapper)
        ? object.repeatedInt32Wrapper.map((e: any) => Number(e))
        : [],
      repeatedInt64Wrapper: globalThis.Array.isArray(object?.repeatedInt64Wrapper)
        ? object.repeatedInt64Wrapper.map((e: any) => Number(e))
        : [],
      repeatedUint32Wrapper: globalThis.Array.isArray(object?.repeatedUint32Wrapper)
        ? object.repeatedUint32Wrapper.map((e: any) => Number(e))
        : [],
      repeatedUint64Wrapper: globalThis.Array.isArray(object?.repeatedUint64Wrapper)
        ? object.repeatedUint64Wrapper.map((e: any) => Number(e))
        : [],
      repeatedFloatWrapper: globalThis.Array.isArray(object?.repeatedFloatWrapper)
        ? object.repeatedFloatWrapper.map((e: any) => Number(e))
        : [],
      repeatedDoubleWrapper: globalThis.Array.isArray(object?.repeatedDoubleWrapper)
        ? object.repeatedDoubleWrapper.map((e: any) => Number(e))
        : [],
      repeatedStringWrapper: globalThis.Array.isArray(object?.repeatedStringWrapper)
        ? object.repeatedStringWrapper.map((e: any) => String(e))
        : [],
      repeatedBytesWrapper: globalThis.Array.isArray(object?.repeatedBytesWrapper)
        ? object.repeatedBytesWrapper.map((e: any) => new Uint8Array(e))
        : [],
      optionalDuration: isSet(object.optionalDuration) ? Duration.fromJSON(object.optionalDuration) : undefined,
      optionalTimestamp: isSet(object.optionalTimestamp) ? fromJsonTimestamp(object.optionalTimestamp) : undefined,
      optionalFieldMask: isSet(object.optionalFieldMask)
        ? FieldMask.unwrap(FieldMask.fromJSON(object.optionalFieldMask))
        : undefined,
      optionalStruct: isObject(object.optionalStruct) ? object.optionalStruct : undefined,
      optionalAny: isSet(object.optionalAny) ? Any.fromJSON(object.optionalAny) : undefined,
      optionalValue: isSet(object?.optionalValue) ? object.optionalValue : undefined,
      optionalNullValue: isSet(object.optionalNullValue) ? nullValueFromJSON(object.optionalNullValue) : 0,
      repeatedDuration: globalThis.Array.isArray(object?.repeatedDuration)
        ? object.repeatedDuration.map((e: any) => Duration.fromJSON(e))
        : [],
      repeatedTimestamp: globalThis.Array.isArray(object?.repeatedTimestamp)
        ? object.repeatedTimestamp.map((e: any) => fromJsonTimestamp(e))
        : [],
      repeatedFieldmask: globalThis.Array.isArray(object?.repeatedFieldmask)
        ? object.repeatedFieldmask.map((e: any) => FieldMask.unwrap(FieldMask.fromJSON(e)))
        : [],
      repeatedStruct: globalThis.Array.isArray(object?.repeatedStruct) ? [...object.repeatedStruct] : [],
      repeatedAny: globalThis.Array.isArray(object?.repeatedAny)
        ? object.repeatedAny.map((e: any) => Any.fromJSON(e))
        : [],
      repeatedValue: globalThis.Array.isArray(object?.repeatedValue) ? [...object.repeatedValue] : [],
      repeatedListValue: globalThis.Array.isArray(object?.repeatedListValue)
        ? object.repeatedListValue.map((e: any) => [...e])
        : [],
      fieldname1: isSet(object.fieldname1) ? globalThis.Number(object.fieldname1) : 0,
      fieldName2: isSet(object.fieldName2) ? globalThis.Number(object.fieldName2) : 0,
      FieldName3: isSet(object.FieldName3) ? globalThis.Number(object.FieldName3) : 0,
      fieldName4: isSet(object.fieldName4) ? globalThis.Number(object.fieldName4) : 0,
      field0name5: isSet(object.field0name5) ? globalThis.Number(object.field0name5) : 0,
      field0Name6: isSet(object.field0Name6) ? globalThis.Number(object.field0Name6) : 0,
      fieldName7: isSet(object.fieldName7) ? globalThis.Number(object.fieldName7) : 0,
      FieldName8: isSet(object.FieldName8) ? globalThis.Number(object.FieldName8) : 0,
      fieldName9: isSet(object.fieldName9) ? globalThis.Number(object.fieldName9) : 0,
      FieldName10: isSet(object.FieldName10) ? globalThis.Number(object.FieldName10) : 0,
      fieldName11: isSet(object.FIELDNAME11) ? globalThis.Number(object.FIELDNAME11) : 0,
      FIELDName12: isSet(object.FIELDName12) ? globalThis.Number(object.FIELDName12) : 0,
      FieldName13: isSet(object.FieldName13) ? globalThis.Number(object.FieldName13) : 0,
      FieldName14: isSet(object.FieldName14) ? globalThis.Number(object.FieldName14) : 0,
      fieldName15: isSet(object.fieldName15) ? globalThis.Number(object.fieldName15) : 0,
      fieldName16: isSet(object.fieldName16) ? globalThis.Number(object.fieldName16) : 0,
      fieldName17: isSet(object.fieldName17) ? globalThis.Number(object.fieldName17) : 0,
      FieldName18: isSet(object.FieldName18) ? globalThis.Number(object.FieldName18) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3): unknown {
    const obj: any = {};
    if (message.optionalInt32 !== 0) {
      obj.optionalInt32 = Math.round(message.optionalInt32);
    }
    if (message.optionalInt64 !== 0) {
      obj.optionalInt64 = Math.round(message.optionalInt64);
    }
    if (message.optionalUint32 !== 0) {
      obj.optionalUint32 = Math.round(message.optionalUint32);
    }
    if (message.optionalUint64 !== 0) {
      obj.optionalUint64 = Math.round(message.optionalUint64);
    }
    if (message.optionalSint32 !== 0) {
      obj.optionalSint32 = Math.round(message.optionalSint32);
    }
    if (message.optionalSint64 !== 0) {
      obj.optionalSint64 = Math.round(message.optionalSint64);
    }
    if (message.optionalFixed32 !== 0) {
      obj.optionalFixed32 = Math.round(message.optionalFixed32);
    }
    if (message.optionalFixed64 !== 0) {
      obj.optionalFixed64 = Math.round(message.optionalFixed64);
    }
    if (message.optionalSfixed32 !== 0) {
      obj.optionalSfixed32 = Math.round(message.optionalSfixed32);
    }
    if (message.optionalSfixed64 !== 0) {
      obj.optionalSfixed64 = Math.round(message.optionalSfixed64);
    }
    if (message.optionalFloat !== 0) {
      obj.optionalFloat = message.optionalFloat;
    }
    if (message.optionalDouble !== 0) {
      obj.optionalDouble = message.optionalDouble;
    }
    if (message.optionalBool === true) {
      obj.optionalBool = message.optionalBool;
    }
    if (message.optionalString !== "") {
      obj.optionalString = message.optionalString;
    }
    if (message.optionalBytes.length !== 0) {
      obj.optionalBytes = base64FromBytes(message.optionalBytes);
    }
    if (message.optionalNestedMessage !== undefined) {
      obj.optionalNestedMessage = TestAllTypesProto3_NestedMessage.toJSON(message.optionalNestedMessage);
    }
    if (message.optionalForeignMessage !== undefined) {
      obj.optionalForeignMessage = ForeignMessage.toJSON(message.optionalForeignMessage);
    }
    if (message.optionalNestedEnum !== 0) {
      obj.optionalNestedEnum = testAllTypesProto3_NestedEnumToJSON(message.optionalNestedEnum);
    }
    if (message.optionalForeignEnum !== 0) {
      obj.optionalForeignEnum = foreignEnumToJSON(message.optionalForeignEnum);
    }
    if (message.optionalAliasedEnum !== 0) {
      obj.optionalAliasedEnum = testAllTypesProto3_AliasedEnumToJSON(message.optionalAliasedEnum);
    }
    if (message.optionalStringPiece !== "") {
      obj.optionalStringPiece = message.optionalStringPiece;
    }
    if (message.optionalCord !== "") {
      obj.optionalCord = message.optionalCord;
    }
    if (message.recursiveMessage !== undefined) {
      obj.recursiveMessage = TestAllTypesProto3.toJSON(message.recursiveMessage);
    }
    if (message.repeatedInt32?.length) {
      obj.repeatedInt32 = message.repeatedInt32.map((e) => Math.round(e));
    }
    if (message.repeatedInt64?.length) {
      obj.repeatedInt64 = message.repeatedInt64.map((e) => Math.round(e));
    }
    if (message.repeatedUint32?.length) {
      obj.repeatedUint32 = message.repeatedUint32.map((e) => Math.round(e));
    }
    if (message.repeatedUint64?.length) {
      obj.repeatedUint64 = message.repeatedUint64.map((e) => Math.round(e));
    }
    if (message.repeatedSint32?.length) {
      obj.repeatedSint32 = message.repeatedSint32.map((e) => Math.round(e));
    }
    if (message.repeatedSint64?.length) {
      obj.repeatedSint64 = message.repeatedSint64.map((e) => Math.round(e));
    }
    if (message.repeatedFixed32?.length) {
      obj.repeatedFixed32 = message.repeatedFixed32.map((e) => Math.round(e));
    }
    if (message.repeatedFixed64?.length) {
      obj.repeatedFixed64 = message.repeatedFixed64.map((e) => Math.round(e));
    }
    if (message.repeatedSfixed32?.length) {
      obj.repeatedSfixed32 = message.repeatedSfixed32.map((e) => Math.round(e));
    }
    if (message.repeatedSfixed64?.length) {
      obj.repeatedSfixed64 = message.repeatedSfixed64.map((e) => Math.round(e));
    }
    if (message.repeatedFloat?.length) {
      obj.repeatedFloat = message.repeatedFloat;
    }
    if (message.repeatedDouble?.length) {
      obj.repeatedDouble = message.repeatedDouble;
    }
    if (message.repeatedBool?.length) {
      obj.repeatedBool = message.repeatedBool;
    }
    if (message.repeatedString?.length) {
      obj.repeatedString = message.repeatedString;
    }
    if (message.repeatedBytes?.length) {
      obj.repeatedBytes = message.repeatedBytes.map((e) => base64FromBytes(e));
    }
    if (message.repeatedNestedMessage?.length) {
      obj.repeatedNestedMessage = message.repeatedNestedMessage.map((e) => TestAllTypesProto3_NestedMessage.toJSON(e));
    }
    if (message.repeatedForeignMessage?.length) {
      obj.repeatedForeignMessage = message.repeatedForeignMessage.map((e) => ForeignMessage.toJSON(e));
    }
    if (message.repeatedNestedEnum?.length) {
      obj.repeatedNestedEnum = message.repeatedNestedEnum.map((e) => testAllTypesProto3_NestedEnumToJSON(e));
    }
    if (message.repeatedForeignEnum?.length) {
      obj.repeatedForeignEnum = message.repeatedForeignEnum.map((e) => foreignEnumToJSON(e));
    }
    if (message.repeatedStringPiece?.length) {
      obj.repeatedStringPiece = message.repeatedStringPiece;
    }
    if (message.repeatedCord?.length) {
      obj.repeatedCord = message.repeatedCord;
    }
    if (message.packedInt32?.length) {
      obj.packedInt32 = message.packedInt32.map((e) => Math.round(e));
    }
    if (message.packedInt64?.length) {
      obj.packedInt64 = message.packedInt64.map((e) => Math.round(e));
    }
    if (message.packedUint32?.length) {
      obj.packedUint32 = message.packedUint32.map((e) => Math.round(e));
    }
    if (message.packedUint64?.length) {
      obj.packedUint64 = message.packedUint64.map((e) => Math.round(e));
    }
    if (message.packedSint32?.length) {
      obj.packedSint32 = message.packedSint32.map((e) => Math.round(e));
    }
    if (message.packedSint64?.length) {
      obj.packedSint64 = message.packedSint64.map((e) => Math.round(e));
    }
    if (message.packedFixed32?.length) {
      obj.packedFixed32 = message.packedFixed32.map((e) => Math.round(e));
    }
    if (message.packedFixed64?.length) {
      obj.packedFixed64 = message.packedFixed64.map((e) => Math.round(e));
    }
    if (message.packedSfixed32?.length) {
      obj.packedSfixed32 = message.packedSfixed32.map((e) => Math.round(e));
    }
    if (message.packedSfixed64?.length) {
      obj.packedSfixed64 = message.packedSfixed64.map((e) => Math.round(e));
    }
    if (message.packedFloat?.length) {
      obj.packedFloat = message.packedFloat;
    }
    if (message.packedDouble?.length) {
      obj.packedDouble = message.packedDouble;
    }
    if (message.packedBool?.length) {
      obj.packedBool = message.packedBool;
    }
    if (message.packedNestedEnum?.length) {
      obj.packedNestedEnum = message.packedNestedEnum.map((e) => testAllTypesProto3_NestedEnumToJSON(e));
    }
    if (message.unpackedInt32?.length) {
      obj.unpackedInt32 = message.unpackedInt32.map((e) => Math.round(e));
    }
    if (message.unpackedInt64?.length) {
      obj.unpackedInt64 = message.unpackedInt64.map((e) => Math.round(e));
    }
    if (message.unpackedUint32?.length) {
      obj.unpackedUint32 = message.unpackedUint32.map((e) => Math.round(e));
    }
    if (message.unpackedUint64?.length) {
      obj.unpackedUint64 = message.unpackedUint64.map((e) => Math.round(e));
    }
    if (message.unpackedSint32?.length) {
      obj.unpackedSint32 = message.unpackedSint32.map((e) => Math.round(e));
    }
    if (message.unpackedSint64?.length) {
      obj.unpackedSint64 = message.unpackedSint64.map((e) => Math.round(e));
    }
    if (message.unpackedFixed32?.length) {
      obj.unpackedFixed32 = message.unpackedFixed32.map((e) => Math.round(e));
    }
    if (message.unpackedFixed64?.length) {
      obj.unpackedFixed64 = message.unpackedFixed64.map((e) => Math.round(e));
    }
    if (message.unpackedSfixed32?.length) {
      obj.unpackedSfixed32 = message.unpackedSfixed32.map((e) => Math.round(e));
    }
    if (message.unpackedSfixed64?.length) {
      obj.unpackedSfixed64 = message.unpackedSfixed64.map((e) => Math.round(e));
    }
    if (message.unpackedFloat?.length) {
      obj.unpackedFloat = message.unpackedFloat;
    }
    if (message.unpackedDouble?.length) {
      obj.unpackedDouble = message.unpackedDouble;
    }
    if (message.unpackedBool?.length) {
      obj.unpackedBool = message.unpackedBool;
    }
    if (message.unpackedNestedEnum?.length) {
      obj.unpackedNestedEnum = message.unpackedNestedEnum.map((e) => testAllTypesProto3_NestedEnumToJSON(e));
    }
    if (message.mapInt32Int32?.size) {
      obj.mapInt32Int32 = {};
      message.mapInt32Int32.forEach((v, k) => {
        obj.mapInt32Int32[k] = Math.round(v);
      });
    }
    if (message.mapInt64Int64?.size) {
      obj.mapInt64Int64 = {};
      message.mapInt64Int64.forEach((v, k) => {
        obj.mapInt64Int64[k] = Math.round(v);
      });
    }
    if (message.mapUint32Uint32?.size) {
      obj.mapUint32Uint32 = {};
      message.mapUint32Uint32.forEach((v, k) => {
        obj.mapUint32Uint32[k] = Math.round(v);
      });
    }
    if (message.mapUint64Uint64?.size) {
      obj.mapUint64Uint64 = {};
      message.mapUint64Uint64.forEach((v, k) => {
        obj.mapUint64Uint64[k] = Math.round(v);
      });
    }
    if (message.mapSint32Sint32?.size) {
      obj.mapSint32Sint32 = {};
      message.mapSint32Sint32.forEach((v, k) => {
        obj.mapSint32Sint32[k] = Math.round(v);
      });
    }
    if (message.mapSint64Sint64?.size) {
      obj.mapSint64Sint64 = {};
      message.mapSint64Sint64.forEach((v, k) => {
        obj.mapSint64Sint64[k] = Math.round(v);
      });
    }
    if (message.mapFixed32Fixed32?.size) {
      obj.mapFixed32Fixed32 = {};
      message.mapFixed32Fixed32.forEach((v, k) => {
        obj.mapFixed32Fixed32[k] = Math.round(v);
      });
    }
    if (message.mapFixed64Fixed64?.size) {
      obj.mapFixed64Fixed64 = {};
      message.mapFixed64Fixed64.forEach((v, k) => {
        obj.mapFixed64Fixed64[k] = Math.round(v);
      });
    }
    if (message.mapSfixed32Sfixed32?.size) {
      obj.mapSfixed32Sfixed32 = {};
      message.mapSfixed32Sfixed32.forEach((v, k) => {
        obj.mapSfixed32Sfixed32[k] = Math.round(v);
      });
    }
    if (message.mapSfixed64Sfixed64?.size) {
      obj.mapSfixed64Sfixed64 = {};
      message.mapSfixed64Sfixed64.forEach((v, k) => {
        obj.mapSfixed64Sfixed64[k] = Math.round(v);
      });
    }
    if (message.mapInt32Float?.size) {
      obj.mapInt32Float = {};
      message.mapInt32Float.forEach((v, k) => {
        obj.mapInt32Float[k] = v;
      });
    }
    if (message.mapInt32Double?.size) {
      obj.mapInt32Double = {};
      message.mapInt32Double.forEach((v, k) => {
        obj.mapInt32Double[k] = v;
      });
    }
    if (message.mapBoolBool?.size) {
      obj.mapBoolBool = {};
      message.mapBoolBool.forEach((v, k) => {
        obj.mapBoolBool[globalThis.String(k)] = v;
      });
    }
    if (message.mapStringString?.size) {
      obj.mapStringString = {};
      message.mapStringString.forEach((v, k) => {
        obj.mapStringString[k] = v;
      });
    }
    if (message.mapStringBytes?.size) {
      obj.mapStringBytes = {};
      message.mapStringBytes.forEach((v, k) => {
        obj.mapStringBytes[k] = base64FromBytes(v);
      });
    }
    if (message.mapStringNestedMessage?.size) {
      obj.mapStringNestedMessage = {};
      message.mapStringNestedMessage.forEach((v, k) => {
        obj.mapStringNestedMessage[k] = TestAllTypesProto3_NestedMessage.toJSON(v);
      });
    }
    if (message.mapStringForeignMessage?.size) {
      obj.mapStringForeignMessage = {};
      message.mapStringForeignMessage.forEach((v, k) => {
        obj.mapStringForeignMessage[k] = ForeignMessage.toJSON(v);
      });
    }
    if (message.mapStringNestedEnum?.size) {
      obj.mapStringNestedEnum = {};
      message.mapStringNestedEnum.forEach((v, k) => {
        obj.mapStringNestedEnum[k] = testAllTypesProto3_NestedEnumToJSON(v);
      });
    }
    if (message.mapStringForeignEnum?.size) {
      obj.mapStringForeignEnum = {};
      message.mapStringForeignEnum.forEach((v, k) => {
        obj.mapStringForeignEnum[k] = foreignEnumToJSON(v);
      });
    }
    if (message.oneofField?.$case === "oneofUint32") {
      obj.oneofUint32 = Math.round(message.oneofField.oneofUint32);
    }
    if (message.oneofField?.$case === "oneofNestedMessage") {
      obj.oneofNestedMessage = TestAllTypesProto3_NestedMessage.toJSON(message.oneofField.oneofNestedMessage);
    }
    if (message.oneofField?.$case === "oneofString") {
      obj.oneofString = message.oneofField.oneofString;
    }
    if (message.oneofField?.$case === "oneofBytes") {
      obj.oneofBytes = base64FromBytes(message.oneofField.oneofBytes);
    }
    if (message.oneofField?.$case === "oneofBool") {
      obj.oneofBool = message.oneofField.oneofBool;
    }
    if (message.oneofField?.$case === "oneofUint64") {
      obj.oneofUint64 = Math.round(message.oneofField.oneofUint64);
    }
    if (message.oneofField?.$case === "oneofFloat") {
      obj.oneofFloat = message.oneofField.oneofFloat;
    }
    if (message.oneofField?.$case === "oneofDouble") {
      obj.oneofDouble = message.oneofField.oneofDouble;
    }
    if (message.oneofField?.$case === "oneofEnum") {
      obj.oneofEnum = testAllTypesProto3_NestedEnumToJSON(message.oneofField.oneofEnum);
    }
    if (message.oneofField?.$case === "oneofNullValue") {
      obj.oneofNullValue = nullValueToJSON(message.oneofField.oneofNullValue);
    }
    if (message.optionalBoolWrapper !== undefined) {
      obj.optionalBoolWrapper = message.optionalBoolWrapper;
    }
    if (message.optionalInt32Wrapper !== undefined) {
      obj.optionalInt32Wrapper = message.optionalInt32Wrapper;
    }
    if (message.optionalInt64Wrapper !== undefined) {
      obj.optionalInt64Wrapper = message.optionalInt64Wrapper;
    }
    if (message.optionalUint32Wrapper !== undefined) {
      obj.optionalUint32Wrapper = message.optionalUint32Wrapper;
    }
    if (message.optionalUint64Wrapper !== undefined) {
      obj.optionalUint64Wrapper = message.optionalUint64Wrapper;
    }
    if (message.optionalFloatWrapper !== undefined) {
      obj.optionalFloatWrapper = message.optionalFloatWrapper;
    }
    if (message.optionalDoubleWrapper !== undefined) {
      obj.optionalDoubleWrapper = message.optionalDoubleWrapper;
    }
    if (message.optionalStringWrapper !== undefined) {
      obj.optionalStringWrapper = message.optionalStringWrapper;
    }
    if (message.optionalBytesWrapper !== undefined) {
      obj.optionalBytesWrapper = message.optionalBytesWrapper;
    }
    if (message.repeatedBoolWrapper?.length) {
      obj.repeatedBoolWrapper = message.repeatedBoolWrapper;
    }
    if (message.repeatedInt32Wrapper?.length) {
      obj.repeatedInt32Wrapper = message.repeatedInt32Wrapper;
    }
    if (message.repeatedInt64Wrapper?.length) {
      obj.repeatedInt64Wrapper = message.repeatedInt64Wrapper;
    }
    if (message.repeatedUint32Wrapper?.length) {
      obj.repeatedUint32Wrapper = message.repeatedUint32Wrapper;
    }
    if (message.repeatedUint64Wrapper?.length) {
      obj.repeatedUint64Wrapper = message.repeatedUint64Wrapper;
    }
    if (message.repeatedFloatWrapper?.length) {
      obj.repeatedFloatWrapper = message.repeatedFloatWrapper;
    }
    if (message.repeatedDoubleWrapper?.length) {
      obj.repeatedDoubleWrapper = message.repeatedDoubleWrapper;
    }
    if (message.repeatedStringWrapper?.length) {
      obj.repeatedStringWrapper = message.repeatedStringWrapper;
    }
    if (message.repeatedBytesWrapper?.length) {
      obj.repeatedBytesWrapper = message.repeatedBytesWrapper;
    }
    if (message.optionalDuration !== undefined) {
      obj.optionalDuration = Duration.toJSON(message.optionalDuration);
    }
    if (message.optionalTimestamp !== undefined) {
      obj.optionalTimestamp = message.optionalTimestamp.toISOString();
    }
    if (message.optionalFieldMask !== undefined) {
      obj.optionalFieldMask = FieldMask.toJSON(FieldMask.wrap(message.optionalFieldMask));
    }
    if (message.optionalStruct !== undefined) {
      obj.optionalStruct = message.optionalStruct;
    }
    if (message.optionalAny !== undefined) {
      obj.optionalAny = Any.toJSON(message.optionalAny);
    }
    if (message.optionalValue !== undefined) {
      obj.optionalValue = message.optionalValue;
    }
    if (message.optionalNullValue !== 0) {
      obj.optionalNullValue = nullValueToJSON(message.optionalNullValue);
    }
    if (message.repeatedDuration?.length) {
      obj.repeatedDuration = message.repeatedDuration.map((e) => Duration.toJSON(e));
    }
    if (message.repeatedTimestamp?.length) {
      obj.repeatedTimestamp = message.repeatedTimestamp.map((e) => e.toISOString());
    }
    if (message.repeatedFieldmask?.length) {
      obj.repeatedFieldmask = message.repeatedFieldmask.map((e) => FieldMask.toJSON(FieldMask.wrap(e)));
    }
    if (message.repeatedStruct?.length) {
      obj.repeatedStruct = message.repeatedStruct;
    }
    if (message.repeatedAny?.length) {
      obj.repeatedAny = message.repeatedAny.map((e) => Any.toJSON(e));
    }
    if (message.repeatedValue?.length) {
      obj.repeatedValue = message.repeatedValue;
    }
    if (message.repeatedListValue?.length) {
      obj.repeatedListValue = message.repeatedListValue;
    }
    if (message.fieldname1 !== 0) {
      obj.fieldname1 = Math.round(message.fieldname1);
    }
    if (message.fieldName2 !== 0) {
      obj.fieldName2 = Math.round(message.fieldName2);
    }
    if (message.FieldName3 !== 0) {
      obj.FieldName3 = Math.round(message.FieldName3);
    }
    if (message.fieldName4 !== 0) {
      obj.fieldName4 = Math.round(message.fieldName4);
    }
    if (message.field0name5 !== 0) {
      obj.field0name5 = Math.round(message.field0name5);
    }
    if (message.field0Name6 !== 0) {
      obj.field0Name6 = Math.round(message.field0Name6);
    }
    if (message.fieldName7 !== 0) {
      obj.fieldName7 = Math.round(message.fieldName7);
    }
    if (message.FieldName8 !== 0) {
      obj.FieldName8 = Math.round(message.FieldName8);
    }
    if (message.fieldName9 !== 0) {
      obj.fieldName9 = Math.round(message.fieldName9);
    }
    if (message.FieldName10 !== 0) {
      obj.FieldName10 = Math.round(message.FieldName10);
    }
    if (message.fieldName11 !== 0) {
      obj.FIELDNAME11 = Math.round(message.fieldName11);
    }
    if (message.FIELDName12 !== 0) {
      obj.FIELDName12 = Math.round(message.FIELDName12);
    }
    if (message.FieldName13 !== 0) {
      obj.FieldName13 = Math.round(message.FieldName13);
    }
    if (message.FieldName14 !== 0) {
      obj.FieldName14 = Math.round(message.FieldName14);
    }
    if (message.fieldName15 !== 0) {
      obj.fieldName15 = Math.round(message.fieldName15);
    }
    if (message.fieldName16 !== 0) {
      obj.fieldName16 = Math.round(message.fieldName16);
    }
    if (message.fieldName17 !== 0) {
      obj.fieldName17 = Math.round(message.fieldName17);
    }
    if (message.FieldName18 !== 0) {
      obj.FieldName18 = Math.round(message.FieldName18);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3>, I>>(base?: I): TestAllTypesProto3 {
    return TestAllTypesProto3.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3>, I>>(object: I): TestAllTypesProto3 {
    const message = createBaseTestAllTypesProto3();
    message.optionalInt32 = object.optionalInt32 ?? 0;
    message.optionalInt64 = object.optionalInt64 ?? 0;
    message.optionalUint32 = object.optionalUint32 ?? 0;
    message.optionalUint64 = object.optionalUint64 ?? 0;
    message.optionalSint32 = object.optionalSint32 ?? 0;
    message.optionalSint64 = object.optionalSint64 ?? 0;
    message.optionalFixed32 = object.optionalFixed32 ?? 0;
    message.optionalFixed64 = object.optionalFixed64 ?? 0;
    message.optionalSfixed32 = object.optionalSfixed32 ?? 0;
    message.optionalSfixed64 = object.optionalSfixed64 ?? 0;
    message.optionalFloat = object.optionalFloat ?? 0;
    message.optionalDouble = object.optionalDouble ?? 0;
    message.optionalBool = object.optionalBool ?? false;
    message.optionalString = object.optionalString ?? "";
    message.optionalBytes = object.optionalBytes ?? new Uint8Array(0);
    message.optionalNestedMessage =
      (object.optionalNestedMessage !== undefined && object.optionalNestedMessage !== null)
        ? TestAllTypesProto3_NestedMessage.fromPartial(object.optionalNestedMessage)
        : undefined;
    message.optionalForeignMessage =
      (object.optionalForeignMessage !== undefined && object.optionalForeignMessage !== null)
        ? ForeignMessage.fromPartial(object.optionalForeignMessage)
        : undefined;
    message.optionalNestedEnum = object.optionalNestedEnum ?? 0;
    message.optionalForeignEnum = object.optionalForeignEnum ?? 0;
    message.optionalAliasedEnum = object.optionalAliasedEnum ?? 0;
    message.optionalStringPiece = object.optionalStringPiece ?? "";
    message.optionalCord = object.optionalCord ?? "";
    message.recursiveMessage = (object.recursiveMessage !== undefined && object.recursiveMessage !== null)
      ? TestAllTypesProto3.fromPartial(object.recursiveMessage)
      : undefined;
    message.repeatedInt32 = object.repeatedInt32?.map((e) => e) || [];
    message.repeatedInt64 = object.repeatedInt64?.map((e) => e) || [];
    message.repeatedUint32 = object.repeatedUint32?.map((e) => e) || [];
    message.repeatedUint64 = object.repeatedUint64?.map((e) => e) || [];
    message.repeatedSint32 = object.repeatedSint32?.map((e) => e) || [];
    message.repeatedSint64 = object.repeatedSint64?.map((e) => e) || [];
    message.repeatedFixed32 = object.repeatedFixed32?.map((e) => e) || [];
    message.repeatedFixed64 = object.repeatedFixed64?.map((e) => e) || [];
    message.repeatedSfixed32 = object.repeatedSfixed32?.map((e) => e) || [];
    message.repeatedSfixed64 = object.repeatedSfixed64?.map((e) => e) || [];
    message.repeatedFloat = object.repeatedFloat?.map((e) => e) || [];
    message.repeatedDouble = object.repeatedDouble?.map((e) => e) || [];
    message.repeatedBool = object.repeatedBool?.map((e) => e) || [];
    message.repeatedString = object.repeatedString?.map((e) => e) || [];
    message.repeatedBytes = object.repeatedBytes?.map((e) => e) || [];
    message.repeatedNestedMessage =
      object.repeatedNestedMessage?.map((e) => TestAllTypesProto3_NestedMessage.fromPartial(e)) || [];
    message.repeatedForeignMessage = object.repeatedForeignMessage?.map((e) => ForeignMessage.fromPartial(e)) || [];
    message.repeatedNestedEnum = object.repeatedNestedEnum?.map((e) => e) || [];
    message.repeatedForeignEnum = object.repeatedForeignEnum?.map((e) => e) || [];
    message.repeatedStringPiece = object.repeatedStringPiece?.map((e) => e) || [];
    message.repeatedCord = object.repeatedCord?.map((e) => e) || [];
    message.packedInt32 = object.packedInt32?.map((e) => e) || [];
    message.packedInt64 = object.packedInt64?.map((e) => e) || [];
    message.packedUint32 = object.packedUint32?.map((e) => e) || [];
    message.packedUint64 = object.packedUint64?.map((e) => e) || [];
    message.packedSint32 = object.packedSint32?.map((e) => e) || [];
    message.packedSint64 = object.packedSint64?.map((e) => e) || [];
    message.packedFixed32 = object.packedFixed32?.map((e) => e) || [];
    message.packedFixed64 = object.packedFixed64?.map((e) => e) || [];
    message.packedSfixed32 = object.packedSfixed32?.map((e) => e) || [];
    message.packedSfixed64 = object.packedSfixed64?.map((e) => e) || [];
    message.packedFloat = object.packedFloat?.map((e) => e) || [];
    message.packedDouble = object.packedDouble?.map((e) => e) || [];
    message.packedBool = object.packedBool?.map((e) => e) || [];
    message.packedNestedEnum = object.packedNestedEnum?.map((e) => e) || [];
    message.unpackedInt32 = object.unpackedInt32?.map((e) => e) || [];
    message.unpackedInt64 = object.unpackedInt64?.map((e) => e) || [];
    message.unpackedUint32 = object.unpackedUint32?.map((e) => e) || [];
    message.unpackedUint64 = object.unpackedUint64?.map((e) => e) || [];
    message.unpackedSint32 = object.unpackedSint32?.map((e) => e) || [];
    message.unpackedSint64 = object.unpackedSint64?.map((e) => e) || [];
    message.unpackedFixed32 = object.unpackedFixed32?.map((e) => e) || [];
    message.unpackedFixed64 = object.unpackedFixed64?.map((e) => e) || [];
    message.unpackedSfixed32 = object.unpackedSfixed32?.map((e) => e) || [];
    message.unpackedSfixed64 = object.unpackedSfixed64?.map((e) => e) || [];
    message.unpackedFloat = object.unpackedFloat?.map((e) => e) || [];
    message.unpackedDouble = object.unpackedDouble?.map((e) => e) || [];
    message.unpackedBool = object.unpackedBool?.map((e) => e) || [];
    message.unpackedNestedEnum = object.unpackedNestedEnum?.map((e) => e) || [];
    message.mapInt32Int32 = (() => {
      const m = new Map();
      (object.mapInt32Int32 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapInt64Int64 = (() => {
      const m = new Map();
      (object.mapInt64Int64 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapUint32Uint32 = (() => {
      const m = new Map();
      (object.mapUint32Uint32 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapUint64Uint64 = (() => {
      const m = new Map();
      (object.mapUint64Uint64 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapSint32Sint32 = (() => {
      const m = new Map();
      (object.mapSint32Sint32 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapSint64Sint64 = (() => {
      const m = new Map();
      (object.mapSint64Sint64 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapFixed32Fixed32 = (() => {
      const m = new Map();
      (object.mapFixed32Fixed32 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapFixed64Fixed64 = (() => {
      const m = new Map();
      (object.mapFixed64Fixed64 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapSfixed32Sfixed32 = (() => {
      const m = new Map();
      (object.mapSfixed32Sfixed32 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapSfixed64Sfixed64 = (() => {
      const m = new Map();
      (object.mapSfixed64Sfixed64 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapInt32Float = (() => {
      const m = new Map();
      (object.mapInt32Float as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapInt32Double = (() => {
      const m = new Map();
      (object.mapInt32Double as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.mapBoolBool = (() => {
      const m = new Map();
      (object.mapBoolBool as Map<boolean, boolean> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Boolean(value));
        }
      });
      return m;
    })();
    message.mapStringString = (() => {
      const m = new Map();
      (object.mapStringString as Map<string, string> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.String(value));
        }
      });
      return m;
    })();
    message.mapStringBytes = (() => {
      const m = new Map();
      (object.mapStringBytes as Map<string, Uint8Array> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, value);
        }
      });
      return m;
    })();
    message.mapStringNestedMessage = (() => {
      const m = new Map();
      (object.mapStringNestedMessage as Map<string, TestAllTypesProto3_NestedMessage> ?? new Map()).forEach(
        (value, key) => {
          if (value !== undefined) {
            m.set(key, TestAllTypesProto3_NestedMessage.fromPartial(value));
          }
        },
      );
      return m;
    })();
    message.mapStringForeignMessage = (() => {
      const m = new Map();
      (object.mapStringForeignMessage as Map<string, ForeignMessage> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, ForeignMessage.fromPartial(value));
        }
      });
      return m;
    })();
    message.mapStringNestedEnum = (() => {
      const m = new Map();
      (object.mapStringNestedEnum as Map<string, TestAllTypesProto3_NestedEnum> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, value as TestAllTypesProto3_NestedEnum);
        }
      });
      return m;
    })();
    message.mapStringForeignEnum = (() => {
      const m = new Map();
      (object.mapStringForeignEnum as Map<string, ForeignEnum> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, value as ForeignEnum);
        }
      });
      return m;
    })();
    if (
      object.oneofField?.$case === "oneofUint32" &&
      object.oneofField?.oneofUint32 !== undefined &&
      object.oneofField?.oneofUint32 !== null
    ) {
      message.oneofField = { $case: "oneofUint32", oneofUint32: object.oneofField.oneofUint32 };
    }
    if (
      object.oneofField?.$case === "oneofNestedMessage" &&
      object.oneofField?.oneofNestedMessage !== undefined &&
      object.oneofField?.oneofNestedMessage !== null
    ) {
      message.oneofField = {
        $case: "oneofNestedMessage",
        oneofNestedMessage: TestAllTypesProto3_NestedMessage.fromPartial(object.oneofField.oneofNestedMessage),
      };
    }
    if (
      object.oneofField?.$case === "oneofString" &&
      object.oneofField?.oneofString !== undefined &&
      object.oneofField?.oneofString !== null
    ) {
      message.oneofField = { $case: "oneofString", oneofString: object.oneofField.oneofString };
    }
    if (
      object.oneofField?.$case === "oneofBytes" &&
      object.oneofField?.oneofBytes !== undefined &&
      object.oneofField?.oneofBytes !== null
    ) {
      message.oneofField = { $case: "oneofBytes", oneofBytes: object.oneofField.oneofBytes };
    }
    if (
      object.oneofField?.$case === "oneofBool" &&
      object.oneofField?.oneofBool !== undefined &&
      object.oneofField?.oneofBool !== null
    ) {
      message.oneofField = { $case: "oneofBool", oneofBool: object.oneofField.oneofBool };
    }
    if (
      object.oneofField?.$case === "oneofUint64" &&
      object.oneofField?.oneofUint64 !== undefined &&
      object.oneofField?.oneofUint64 !== null
    ) {
      message.oneofField = { $case: "oneofUint64", oneofUint64: object.oneofField.oneofUint64 };
    }
    if (
      object.oneofField?.$case === "oneofFloat" &&
      object.oneofField?.oneofFloat !== undefined &&
      object.oneofField?.oneofFloat !== null
    ) {
      message.oneofField = { $case: "oneofFloat", oneofFloat: object.oneofField.oneofFloat };
    }
    if (
      object.oneofField?.$case === "oneofDouble" &&
      object.oneofField?.oneofDouble !== undefined &&
      object.oneofField?.oneofDouble !== null
    ) {
      message.oneofField = { $case: "oneofDouble", oneofDouble: object.oneofField.oneofDouble };
    }
    if (
      object.oneofField?.$case === "oneofEnum" &&
      object.oneofField?.oneofEnum !== undefined &&
      object.oneofField?.oneofEnum !== null
    ) {
      message.oneofField = { $case: "oneofEnum", oneofEnum: object.oneofField.oneofEnum };
    }
    if (
      object.oneofField?.$case === "oneofNullValue" &&
      object.oneofField?.oneofNullValue !== undefined &&
      object.oneofField?.oneofNullValue !== null
    ) {
      message.oneofField = { $case: "oneofNullValue", oneofNullValue: object.oneofField.oneofNullValue };
    }
    message.optionalBoolWrapper = object.optionalBoolWrapper ?? undefined;
    message.optionalInt32Wrapper = object.optionalInt32Wrapper ?? undefined;
    message.optionalInt64Wrapper = object.optionalInt64Wrapper ?? undefined;
    message.optionalUint32Wrapper = object.optionalUint32Wrapper ?? undefined;
    message.optionalUint64Wrapper = object.optionalUint64Wrapper ?? undefined;
    message.optionalFloatWrapper = object.optionalFloatWrapper ?? undefined;
    message.optionalDoubleWrapper = object.optionalDoubleWrapper ?? undefined;
    message.optionalStringWrapper = object.optionalStringWrapper ?? undefined;
    message.optionalBytesWrapper = object.optionalBytesWrapper ?? undefined;
    message.repeatedBoolWrapper = object.repeatedBoolWrapper?.map((e) => e) || [];
    message.repeatedInt32Wrapper = object.repeatedInt32Wrapper?.map((e) => e) || [];
    message.repeatedInt64Wrapper = object.repeatedInt64Wrapper?.map((e) => e) || [];
    message.repeatedUint32Wrapper = object.repeatedUint32Wrapper?.map((e) => e) || [];
    message.repeatedUint64Wrapper = object.repeatedUint64Wrapper?.map((e) => e) || [];
    message.repeatedFloatWrapper = object.repeatedFloatWrapper?.map((e) => e) || [];
    message.repeatedDoubleWrapper = object.repeatedDoubleWrapper?.map((e) => e) || [];
    message.repeatedStringWrapper = object.repeatedStringWrapper?.map((e) => e) || [];
    message.repeatedBytesWrapper = object.repeatedBytesWrapper?.map((e) => e) || [];
    message.optionalDuration = (object.optionalDuration !== undefined && object.optionalDuration !== null)
      ? Duration.fromPartial(object.optionalDuration)
      : undefined;
    message.optionalTimestamp = object.optionalTimestamp ?? undefined;
    message.optionalFieldMask = object.optionalFieldMask ?? undefined;
    message.optionalStruct = object.optionalStruct ?? undefined;
    message.optionalAny = (object.optionalAny !== undefined && object.optionalAny !== null)
      ? Any.fromPartial(object.optionalAny)
      : undefined;
    message.optionalValue = object.optionalValue ?? undefined;
    message.optionalNullValue = object.optionalNullValue ?? 0;
    message.repeatedDuration = object.repeatedDuration?.map((e) => Duration.fromPartial(e)) || [];
    message.repeatedTimestamp = object.repeatedTimestamp?.map((e) => e) || [];
    message.repeatedFieldmask = object.repeatedFieldmask?.map((e) => e) || [];
    message.repeatedStruct = object.repeatedStruct?.map((e) => e) || [];
    message.repeatedAny = object.repeatedAny?.map((e) => Any.fromPartial(e)) || [];
    message.repeatedValue = object.repeatedValue?.map((e) => e) || [];
    message.repeatedListValue = object.repeatedListValue?.map((e) => e) || [];
    message.fieldname1 = object.fieldname1 ?? 0;
    message.fieldName2 = object.fieldName2 ?? 0;
    message.FieldName3 = object.FieldName3 ?? 0;
    message.fieldName4 = object.fieldName4 ?? 0;
    message.field0name5 = object.field0name5 ?? 0;
    message.field0Name6 = object.field0Name6 ?? 0;
    message.fieldName7 = object.fieldName7 ?? 0;
    message.FieldName8 = object.FieldName8 ?? 0;
    message.fieldName9 = object.fieldName9 ?? 0;
    message.FieldName10 = object.FieldName10 ?? 0;
    message.fieldName11 = object.fieldName11 ?? 0;
    message.FIELDName12 = object.FIELDName12 ?? 0;
    message.FieldName13 = object.FieldName13 ?? 0;
    message.FieldName14 = object.FieldName14 ?? 0;
    message.fieldName15 = object.fieldName15 ?? 0;
    message.fieldName16 = object.fieldName16 ?? 0;
    message.fieldName17 = object.fieldName17 ?? 0;
    message.FieldName18 = object.FieldName18 ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_NestedMessage(): TestAllTypesProto3_NestedMessage {
  return { a: 0, corecursive: undefined };
}

export const TestAllTypesProto3_NestedMessage = {
  encode(message: TestAllTypesProto3_NestedMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.a !== 0) {
      writer.uint32(8).int32(message.a);
    }
    if (message.corecursive !== undefined) {
      TestAllTypesProto3.encode(message.corecursive, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_NestedMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_NestedMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.a = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.corecursive = TestAllTypesProto3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_NestedMessage {
    return {
      a: isSet(object.a) ? globalThis.Number(object.a) : 0,
      corecursive: isSet(object.corecursive) ? TestAllTypesProto3.fromJSON(object.corecursive) : undefined,
    };
  },

  toJSON(message: TestAllTypesProto3_NestedMessage): unknown {
    const obj: any = {};
    if (message.a !== 0) {
      obj.a = Math.round(message.a);
    }
    if (message.corecursive !== undefined) {
      obj.corecursive = TestAllTypesProto3.toJSON(message.corecursive);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_NestedMessage>, I>>(
    base?: I,
  ): TestAllTypesProto3_NestedMessage {
    return TestAllTypesProto3_NestedMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_NestedMessage>, I>>(
    object: I,
  ): TestAllTypesProto3_NestedMessage {
    const message = createBaseTestAllTypesProto3_NestedMessage();
    message.a = object.a ?? 0;
    message.corecursive = (object.corecursive !== undefined && object.corecursive !== null)
      ? TestAllTypesProto3.fromPartial(object.corecursive)
      : undefined;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapInt32Int32Entry(): TestAllTypesProto3_MapInt32Int32Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapInt32Int32Entry = {
  encode(message: TestAllTypesProto3_MapInt32Int32Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapInt32Int32Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapInt32Int32Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapInt32Int32Entry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapInt32Int32Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapInt32Int32Entry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapInt32Int32Entry {
    return TestAllTypesProto3_MapInt32Int32Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapInt32Int32Entry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapInt32Int32Entry {
    const message = createBaseTestAllTypesProto3_MapInt32Int32Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapInt64Int64Entry(): TestAllTypesProto3_MapInt64Int64Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapInt64Int64Entry = {
  encode(message: TestAllTypesProto3_MapInt64Int64Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapInt64Int64Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapInt64Int64Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapInt64Int64Entry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapInt64Int64Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapInt64Int64Entry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapInt64Int64Entry {
    return TestAllTypesProto3_MapInt64Int64Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapInt64Int64Entry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapInt64Int64Entry {
    const message = createBaseTestAllTypesProto3_MapInt64Int64Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapUint32Uint32Entry(): TestAllTypesProto3_MapUint32Uint32Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapUint32Uint32Entry = {
  encode(message: TestAllTypesProto3_MapUint32Uint32Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapUint32Uint32Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapUint32Uint32Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapUint32Uint32Entry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapUint32Uint32Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapUint32Uint32Entry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapUint32Uint32Entry {
    return TestAllTypesProto3_MapUint32Uint32Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapUint32Uint32Entry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapUint32Uint32Entry {
    const message = createBaseTestAllTypesProto3_MapUint32Uint32Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapUint64Uint64Entry(): TestAllTypesProto3_MapUint64Uint64Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapUint64Uint64Entry = {
  encode(message: TestAllTypesProto3_MapUint64Uint64Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapUint64Uint64Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapUint64Uint64Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapUint64Uint64Entry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapUint64Uint64Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapUint64Uint64Entry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapUint64Uint64Entry {
    return TestAllTypesProto3_MapUint64Uint64Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapUint64Uint64Entry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapUint64Uint64Entry {
    const message = createBaseTestAllTypesProto3_MapUint64Uint64Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapSint32Sint32Entry(): TestAllTypesProto3_MapSint32Sint32Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapSint32Sint32Entry = {
  encode(message: TestAllTypesProto3_MapSint32Sint32Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).sint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).sint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapSint32Sint32Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapSint32Sint32Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.sint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.sint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapSint32Sint32Entry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapSint32Sint32Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapSint32Sint32Entry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapSint32Sint32Entry {
    return TestAllTypesProto3_MapSint32Sint32Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapSint32Sint32Entry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapSint32Sint32Entry {
    const message = createBaseTestAllTypesProto3_MapSint32Sint32Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapSint64Sint64Entry(): TestAllTypesProto3_MapSint64Sint64Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapSint64Sint64Entry = {
  encode(message: TestAllTypesProto3_MapSint64Sint64Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).sint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).sint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapSint64Sint64Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapSint64Sint64Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.sint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.sint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapSint64Sint64Entry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapSint64Sint64Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapSint64Sint64Entry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapSint64Sint64Entry {
    return TestAllTypesProto3_MapSint64Sint64Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapSint64Sint64Entry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapSint64Sint64Entry {
    const message = createBaseTestAllTypesProto3_MapSint64Sint64Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapFixed32Fixed32Entry(): TestAllTypesProto3_MapFixed32Fixed32Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapFixed32Fixed32Entry = {
  encode(message: TestAllTypesProto3_MapFixed32Fixed32Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(13).fixed32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).fixed32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapFixed32Fixed32Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapFixed32Fixed32Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.key = reader.fixed32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.value = reader.fixed32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapFixed32Fixed32Entry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapFixed32Fixed32Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapFixed32Fixed32Entry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapFixed32Fixed32Entry {
    return TestAllTypesProto3_MapFixed32Fixed32Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapFixed32Fixed32Entry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapFixed32Fixed32Entry {
    const message = createBaseTestAllTypesProto3_MapFixed32Fixed32Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapFixed64Fixed64Entry(): TestAllTypesProto3_MapFixed64Fixed64Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapFixed64Fixed64Entry = {
  encode(message: TestAllTypesProto3_MapFixed64Fixed64Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(9).fixed64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).fixed64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapFixed64Fixed64Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapFixed64Fixed64Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.key = longToNumber(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.value = longToNumber(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapFixed64Fixed64Entry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapFixed64Fixed64Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapFixed64Fixed64Entry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapFixed64Fixed64Entry {
    return TestAllTypesProto3_MapFixed64Fixed64Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapFixed64Fixed64Entry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapFixed64Fixed64Entry {
    const message = createBaseTestAllTypesProto3_MapFixed64Fixed64Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapSfixed32Sfixed32Entry(): TestAllTypesProto3_MapSfixed32Sfixed32Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapSfixed32Sfixed32Entry = {
  encode(message: TestAllTypesProto3_MapSfixed32Sfixed32Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(13).sfixed32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).sfixed32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapSfixed32Sfixed32Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapSfixed32Sfixed32Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.key = reader.sfixed32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.value = reader.sfixed32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapSfixed32Sfixed32Entry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapSfixed32Sfixed32Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapSfixed32Sfixed32Entry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapSfixed32Sfixed32Entry {
    return TestAllTypesProto3_MapSfixed32Sfixed32Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapSfixed32Sfixed32Entry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapSfixed32Sfixed32Entry {
    const message = createBaseTestAllTypesProto3_MapSfixed32Sfixed32Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapSfixed64Sfixed64Entry(): TestAllTypesProto3_MapSfixed64Sfixed64Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapSfixed64Sfixed64Entry = {
  encode(message: TestAllTypesProto3_MapSfixed64Sfixed64Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(9).sfixed64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).sfixed64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapSfixed64Sfixed64Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapSfixed64Sfixed64Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.key = longToNumber(reader.sfixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.value = longToNumber(reader.sfixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapSfixed64Sfixed64Entry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapSfixed64Sfixed64Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapSfixed64Sfixed64Entry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapSfixed64Sfixed64Entry {
    return TestAllTypesProto3_MapSfixed64Sfixed64Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapSfixed64Sfixed64Entry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapSfixed64Sfixed64Entry {
    const message = createBaseTestAllTypesProto3_MapSfixed64Sfixed64Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapInt32FloatEntry(): TestAllTypesProto3_MapInt32FloatEntry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapInt32FloatEntry = {
  encode(message: TestAllTypesProto3_MapInt32FloatEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapInt32FloatEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapInt32FloatEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.value = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapInt32FloatEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapInt32FloatEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapInt32FloatEntry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapInt32FloatEntry {
    return TestAllTypesProto3_MapInt32FloatEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapInt32FloatEntry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapInt32FloatEntry {
    const message = createBaseTestAllTypesProto3_MapInt32FloatEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapInt32DoubleEntry(): TestAllTypesProto3_MapInt32DoubleEntry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto3_MapInt32DoubleEntry = {
  encode(message: TestAllTypesProto3_MapInt32DoubleEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapInt32DoubleEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapInt32DoubleEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapInt32DoubleEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapInt32DoubleEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapInt32DoubleEntry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapInt32DoubleEntry {
    return TestAllTypesProto3_MapInt32DoubleEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapInt32DoubleEntry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapInt32DoubleEntry {
    const message = createBaseTestAllTypesProto3_MapInt32DoubleEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapBoolBoolEntry(): TestAllTypesProto3_MapBoolBoolEntry {
  return { key: false, value: false };
}

export const TestAllTypesProto3_MapBoolBoolEntry = {
  encode(message: TestAllTypesProto3_MapBoolBoolEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapBoolBoolEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapBoolBoolEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapBoolBoolEntry {
    return {
      key: isSet(object.key) ? globalThis.Boolean(object.key) : false,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: TestAllTypesProto3_MapBoolBoolEntry): unknown {
    const obj: any = {};
    if (message.key === true) {
      obj.key = message.key;
    }
    if (message.value === true) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapBoolBoolEntry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapBoolBoolEntry {
    return TestAllTypesProto3_MapBoolBoolEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapBoolBoolEntry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapBoolBoolEntry {
    const message = createBaseTestAllTypesProto3_MapBoolBoolEntry();
    message.key = object.key ?? false;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapStringStringEntry(): TestAllTypesProto3_MapStringStringEntry {
  return { key: "", value: "" };
}

export const TestAllTypesProto3_MapStringStringEntry = {
  encode(message: TestAllTypesProto3_MapStringStringEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapStringStringEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapStringStringEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapStringStringEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: TestAllTypesProto3_MapStringStringEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringStringEntry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapStringStringEntry {
    return TestAllTypesProto3_MapStringStringEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringStringEntry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapStringStringEntry {
    const message = createBaseTestAllTypesProto3_MapStringStringEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTestAllTypesProto3_MapStringBytesEntry(): TestAllTypesProto3_MapStringBytesEntry {
  return { key: "", value: new Uint8Array(0) };
}

export const TestAllTypesProto3_MapStringBytesEntry = {
  encode(message: TestAllTypesProto3_MapStringBytesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapStringBytesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapStringBytesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapStringBytesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
    };
  },

  toJSON(message: TestAllTypesProto3_MapStringBytesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringBytesEntry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapStringBytesEntry {
    return TestAllTypesProto3_MapStringBytesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringBytesEntry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapStringBytesEntry {
    const message = createBaseTestAllTypesProto3_MapStringBytesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseTestAllTypesProto3_MapStringNestedMessageEntry(): TestAllTypesProto3_MapStringNestedMessageEntry {
  return { key: "", value: undefined };
}

export const TestAllTypesProto3_MapStringNestedMessageEntry = {
  encode(
    message: TestAllTypesProto3_MapStringNestedMessageEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      TestAllTypesProto3_NestedMessage.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapStringNestedMessageEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapStringNestedMessageEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = TestAllTypesProto3_NestedMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapStringNestedMessageEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? TestAllTypesProto3_NestedMessage.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestAllTypesProto3_MapStringNestedMessageEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = TestAllTypesProto3_NestedMessage.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringNestedMessageEntry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapStringNestedMessageEntry {
    return TestAllTypesProto3_MapStringNestedMessageEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringNestedMessageEntry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapStringNestedMessageEntry {
    const message = createBaseTestAllTypesProto3_MapStringNestedMessageEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? TestAllTypesProto3_NestedMessage.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapStringForeignMessageEntry(): TestAllTypesProto3_MapStringForeignMessageEntry {
  return { key: "", value: undefined };
}

export const TestAllTypesProto3_MapStringForeignMessageEntry = {
  encode(
    message: TestAllTypesProto3_MapStringForeignMessageEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ForeignMessage.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapStringForeignMessageEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapStringForeignMessageEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = ForeignMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapStringForeignMessageEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? ForeignMessage.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestAllTypesProto3_MapStringForeignMessageEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ForeignMessage.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringForeignMessageEntry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapStringForeignMessageEntry {
    return TestAllTypesProto3_MapStringForeignMessageEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringForeignMessageEntry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapStringForeignMessageEntry {
    const message = createBaseTestAllTypesProto3_MapStringForeignMessageEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ForeignMessage.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapStringNestedEnumEntry(): TestAllTypesProto3_MapStringNestedEnumEntry {
  return { key: "", value: 0 };
}

export const TestAllTypesProto3_MapStringNestedEnumEntry = {
  encode(message: TestAllTypesProto3_MapStringNestedEnumEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapStringNestedEnumEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapStringNestedEnumEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapStringNestedEnumEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? testAllTypesProto3_NestedEnumFromJSON(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapStringNestedEnumEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = testAllTypesProto3_NestedEnumToJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringNestedEnumEntry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapStringNestedEnumEntry {
    return TestAllTypesProto3_MapStringNestedEnumEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringNestedEnumEntry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapStringNestedEnumEntry {
    const message = createBaseTestAllTypesProto3_MapStringNestedEnumEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto3_MapStringForeignEnumEntry(): TestAllTypesProto3_MapStringForeignEnumEntry {
  return { key: "", value: 0 };
}

export const TestAllTypesProto3_MapStringForeignEnumEntry = {
  encode(message: TestAllTypesProto3_MapStringForeignEnumEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto3_MapStringForeignEnumEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto3_MapStringForeignEnumEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto3_MapStringForeignEnumEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? foreignEnumFromJSON(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto3_MapStringForeignEnumEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = foreignEnumToJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringForeignEnumEntry>, I>>(
    base?: I,
  ): TestAllTypesProto3_MapStringForeignEnumEntry {
    return TestAllTypesProto3_MapStringForeignEnumEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto3_MapStringForeignEnumEntry>, I>>(
    object: I,
  ): TestAllTypesProto3_MapStringForeignEnumEntry {
    const message = createBaseTestAllTypesProto3_MapStringForeignEnumEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseForeignMessage(): ForeignMessage {
  return { c: 0 };
}

export const ForeignMessage = {
  encode(message: ForeignMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.c !== 0) {
      writer.uint32(8).int32(message.c);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForeignMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForeignMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.c = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ForeignMessage {
    return { c: isSet(object.c) ? globalThis.Number(object.c) : 0 };
  },

  toJSON(message: ForeignMessage): unknown {
    const obj: any = {};
    if (message.c !== 0) {
      obj.c = Math.round(message.c);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ForeignMessage>, I>>(base?: I): ForeignMessage {
    return ForeignMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ForeignMessage>, I>>(object: I): ForeignMessage {
    const message = createBaseForeignMessage();
    message.c = object.c ?? 0;
    return message;
  },
};

function createBaseNullHypothesisProto3(): NullHypothesisProto3 {
  return {};
}

export const NullHypothesisProto3 = {
  encode(_: NullHypothesisProto3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NullHypothesisProto3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNullHypothesisProto3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NullHypothesisProto3 {
    return {};
  },

  toJSON(_: NullHypothesisProto3): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NullHypothesisProto3>, I>>(base?: I): NullHypothesisProto3 {
    return NullHypothesisProto3.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NullHypothesisProto3>, I>>(_: I): NullHypothesisProto3 {
    const message = createBaseNullHypothesisProto3();
    return message;
  },
};

function createBaseEnumOnlyProto3(): EnumOnlyProto3 {
  return {};
}

export const EnumOnlyProto3 = {
  encode(_: EnumOnlyProto3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumOnlyProto3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOnlyProto3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): EnumOnlyProto3 {
    return {};
  },

  toJSON(_: EnumOnlyProto3): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<EnumOnlyProto3>, I>>(base?: I): EnumOnlyProto3 {
    return EnumOnlyProto3.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnumOnlyProto3>, I>>(_: I): EnumOnlyProto3 {
    const message = createBaseEnumOnlyProto3();
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
