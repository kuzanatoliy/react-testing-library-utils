import { buildRender } from "./build-render";
import { render as renderSpy } from "@testing-library/react";

jest.mock("@testing-library/react", () => ({
  render: jest.fn(),
}));

describe("", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const ComponentSpy = jest.fn();

  it.each`
    defaultProps          | defaultOptions            | props                   | options
    ${undefined}          | ${undefined}              | ${undefined}            | ${undefined}
    ${{ prop1: "prop1" }} | ${{ option1: "option1" }} | ${{ prop2: "prop2" }}   | ${{ option2: "option2" }}
    ${{ prop: "prop" }}   | ${{ option: "option" }}   | ${{ prop: "new_prop" }} | ${{ option: "new_option" }}
  `(
    "should check render builder",
    ({ defaultProps, defaultOptions, props, options }) => {
      buildRender(ComponentSpy, defaultProps, defaultOptions)(props, options);
      expect(renderSpy).toBeCalledTimes(1);
      expect(renderSpy).toBeCalledWith(
        <ComponentSpy {...defaultProps} {...props} />,
        {
          ...defaultOptions,
          ...options,
        }
      );
    }
  );
});
