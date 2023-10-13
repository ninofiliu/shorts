import { expect, test, vi } from "vitest";

import { objEach } from "./objEach.js";

test("iterates", () => {
  const fn = vi.fn();
  objEach({ foo: 10, bar: 20 }, fn);
  expect(fn).toHaveBeenCalledWith("foo", 10);
  expect(fn).toHaveBeenCalledWith("bar", 20);
});
