import type {
  RenderHookOptions,
  ResultContainer,
} from "@testing-library/react-hooks";

import { renderHook } from "@testing-library/react-hooks";

export type BuildRenderHookFn = <TProps extends {}, TResult = unknown>(
  useHook: (props: TProps) => TResult,
  defaultProps: TProps,
  renderOptions?: RenderHookOptions<TProps>
) => (
  props?: Partial<TProps>,
  options?: RenderHookOptions<TProps>
) => ResultContainer<TResult>;

export const buildRenderHook: BuildRenderHookFn =
  (useHook, defaultProps, defaultOptions) => (props, options) =>
    renderHook(() => useHook({ ...defaultProps, ...props }), {
      ...defaultOptions,
      ...options,
    });
