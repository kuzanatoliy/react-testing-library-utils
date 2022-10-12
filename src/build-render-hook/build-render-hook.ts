import type {
  RenderHookOptions,
  RenderHookResult,
} from "@testing-library/react";

import { renderHook } from "@testing-library/react";

export type BuildRenderHookFn = <TProps extends {}, TResult = unknown>(
  useHook: (props: TProps) => TResult,
  defaultProps: TProps,
  renderOptions?: RenderHookOptions<TProps>
) => (
  props?: Partial<TProps>,
  options?: RenderHookOptions<TProps>
) => RenderHookResult<TResult, TProps>;

export const buildRenderHook: BuildRenderHookFn =
  (useHook, defaultProps, defaultOptions) => (props, options) =>
    renderHook(() => useHook({ ...defaultProps, ...props }), {
      ...defaultOptions,
      ...options,
    });
