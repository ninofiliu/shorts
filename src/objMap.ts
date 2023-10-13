export const objMap = <K extends string, V, W>(
  object: Record<K, V>,
  map: (key: K, value: V) => W
): Record<K, W> => {
  const ret: Partial<Record<K, W>> = {};
  for (const k in object) ret[k] = map(k, object[k]);
  return ret as Record<K, W>;
};
