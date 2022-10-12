import { renderHook as renderHookSpy } from "@testing-library/react";

import { buildRenderHook } from "./build-render-hook";

jest.mock("@testing-library/react", () => ({
  renderHook: jest.fn().mockImplementation((func) => func()),
}));

describe("build-render-hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const useHookSpy = jest.fn();

  it.each`
    defaultProps          | defaultOptions            | props                   | options
    ${undefined}          | ${undefined}              | ${undefined}            | ${undefined}
    ${{ prop1: "prop1" }} | ${{ option1: "option1" }} | ${{ prop2: "prop2" }}   | ${{ option2: "option2" }}
    ${{ prop: "prop" }}   | ${{ option: "option" }}   | ${{ prop: "new_prop" }} | ${{ option: "new_option" }}
  `(
    "should check render builder",
    ({ defaultProps, defaultOptions, props, options }) => {
      buildRenderHook(useHookSpy, defaultProps, defaultOptions)(props, options);
      expect(renderHookSpy).toBeCalledTimes(1);
      expect(renderHookSpy).toBeCalledWith(expect.any(Function), {
        ...defaultOptions,
        ...options,
      });
      expect(useHookSpy).toBeCalledTimes(1);
      expect(useHookSpy).toBeCalledWith({ ...defaultProps, ...props });
    }
  );
});
