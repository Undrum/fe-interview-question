import { expect, test } from "@jest/globals";
import { isFunction, isNull, isObject, getType } from "./util";

test("isNull input Null to true", () => {
    expect(isNull(null)).toBe(true);
});

test("isNUll input Undefined to false", () => {
    expect(isNull(undefined)).toBe(false);
});

test("isObject input Null to false", () => {
    expect(isObject(null)).toBe(false);
});

test("isObject input Object to true", () => {
    expect(isObject({})).toBe(true);
});

test("isFunction input Function to true", () => {
    expect(isFunction(() => {})).toBe(true);
});
