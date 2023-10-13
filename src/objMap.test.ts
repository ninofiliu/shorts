import { expect } from "vitest";
import { test } from "vitest";

import { objMap } from "./objMap";

test("map", () => {
  const result = objMap({ foo: 10, bar: 20 }, (k, v) => `${k} ${v.toFixed(2)}`);
  expect(result).toEqual({ foo: "foo 10.00", bar: "bar 20.00" });
});
