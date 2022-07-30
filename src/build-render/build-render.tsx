import type { ComponentType } from "react";
import type { RenderOptions, RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";

export type BuildRenderFn = <T extends {}>(
  Component: ComponentType<T>,
  defaultProps: T,
  renderOptions?: RenderOptions
) => (props?: Partial<T>, options?: RenderOptions) => RenderResult;

export const buildRender: BuildRenderFn =
  (Component, defaultProps, defaultOptions) => (props, options) =>
    render(<Component {...defaultProps} {...props} />, {
      ...defaultOptions,
      ...options,
    });
