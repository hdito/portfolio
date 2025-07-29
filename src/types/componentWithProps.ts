export type ComponentWithProps<T = Record<string, unknown>> = (
  props: T,
) => JSX.Element;
