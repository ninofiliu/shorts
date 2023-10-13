export const x = <T>(value: T | undefined | null): T => {
  if (value === undefined) throw new Error("value should not be undefined");
  if (value === null) throw new Error("value should not be null");
  return value;
};
