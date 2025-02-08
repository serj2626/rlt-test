function isNumber<T>(value: T): boolean {
  return typeof value === "number" && !isNaN(value) && value >= 0;
}

export { isNumber };
