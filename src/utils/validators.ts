function isNumber<T>(value: T): boolean {
  return typeof value === "number" && !isNaN(value);
}

export { isNumber };