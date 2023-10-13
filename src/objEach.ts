export const objEach = <K extends string, V>(
  object: Record<K, V>,
  fn: (key: K, value: V) => any
) => {
  for (const key in object) fn(key, object[key]);
};
