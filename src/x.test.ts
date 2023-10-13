import { expect, test } from "vitest";

import { x } from "./x";

test("undefined", () => {
  expect(() => {
    x(undefined);
  }).toThrow("value should not be undefined");
});

test("null", () => {
  expect(() => {
    x(null);
  }).toThrow("value should not be null");
});

test("non nullish", () => {
  expect(x(0)).toEqual(0);
  expect(x("hello")).toEqual("hello");
});
