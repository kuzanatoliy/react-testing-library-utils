# The react testing library utils pack

The package provides react testing library utilities that should allow to improve test quality and effectiveness.

**buildRender** & **buildRenderHook** are builder function that allows to decrease repeated data during implementation multiple component or hook tests.

For example:

Imagine that we have component that has a few views that depends on the component's props. So instead of copy past mock date it is possible to use builder pattern. So we can use default props and options and overide only needed for each test case.

    const mockData = {
      test1: "test1",
      test2: "test2",
      ...
    }

    const renderComponent = buildRender(mockData);

    it("test case", () => {
      renderComponent({ test2: "new value" });
      ...
    })
