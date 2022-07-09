import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import MemberCard from "./../components/MemberCard";

let container = null;
const mockMemberWork = [
  {
    url: "pre_dummy_work_1.jpeg",
  },
  {
    url: "pre_dummy_work_2.jpeg",
  },
];
const mockMemberIcon = {
  webp: "dummy_icon.webp",
  jpeg: "dummy_icon.jpeg",
};

beforeEach(() => {
  // container に div 要素を追加
  container = document.createElement("div");
  document.body.appendChild(container);

  // define mock
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

afterEach(() => {
  // 定義した container を null 状態にする
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

/* ---------------- snapshot tests -------------------- */
it("MemberCard コンポーネントが表示されること", () => {
  act(() => {
    render(
      <MemberCard
        key="0"
        name="test"
        icon={mockMemberIcon}
        works={mockMemberWork}
        twitter_url="http://sample.com"
        camera="hoge_camera"
      />,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"member-card\\">
      <div class=\\"ant-row\\">
        <div class=\\"ant-col member-profile-left ant-col-xs-24 ant-col-sm-8 ant-col-md-8 ant-col-lg-8\\">
          <picture>
            <source type=\\"image/webp\\" srcset=\\"dummy_icon.webp\\"><img src=\\"dummy_icon.jpeg\\" alt=\\"icon\\">
          </picture>
          <div class=\\"ant-row names\\">
            <p class=\\"name\\">test</p><a href=\\"http://sample.com\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\"><span role=\\"img\\" aria-label=\\"twitter\\" class=\\"anticon anticon-twitter\\"><svg viewBox=\\"64 64 896 896\\" focusable=\\"false\\" data-icon=\\"twitter\\" width=\\"1em\\" height=\\"1em\\" fill=\\"currentColor\\" aria-hidden=\\"true\\"><path d=\\"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z\\"></path></svg></span></a>
          </div>
          <p>使用機材: hoge_camera</p>
        </div>
        <div class=\\"ant-col member-profile-right ant-col-xs-24 ant-col-sm-16 ant-col-md-16 ant-col-lg-16\\">
          <div style=\\"display: block; margin: 0px; padding: 0px; border: 0px; overflow: hidden; width: 512px; height: 337.92px; background-color: rgb(0, 0, 0);\\">
            <div style=\\"display: block; margin: 0px; padding: 0px; border: 0px; position: absolute; overflow: hidden; width: 512px; height: 337.92px;\\">
              <div style=\\"display: block; margin: 0px; padding: 0px; border: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;\\" class=\\"rsis-container\\">
                <div style=\\"position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; background-size: cover; overflow: hidden; transition: 0.5s; background-image: url(pre_dummy_work_1.jpeg); transform: translate3d(0%, 0px, 0px);\\" class=\\"rsis-image\\"></div>
                <div style=\\"position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; background-size: cover; overflow: hidden; transition: 0.5s; background-image: url(pre_dummy_work_2.jpeg); transform: translate3d(100%, 0px, 0px);\\"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>"
  `);
});
