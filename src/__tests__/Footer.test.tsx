import renderer, { act } from 'react-test-renderer';
import { createRoot } from 'react-dom/client';
import Footer from 'pages/Footer';

let container = null;
let root = null;
const dummy_privacy_policy = 'hogehoge';
const dummy_twitter_url = 'fugafuga';

beforeAll(() => {
 globalThis.IS_REACT_ACT_ENVIRONMENT = true;
});

afterAll(() => {
 globalThis.IS_REACT_ACT_ENVIRONMENT = false;
});

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  root.unmount(container);
  container.remove();
  container = null;
});

it('コンポーネントが描画されること', () => {
  const component = renderer.create(
    <Footer
      privacy_policy={dummy_privacy_policy}
      twitter_url={dummy_twitter_url}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})


it('ボタンをクリックするとプライバシーポリシーが表示されること', () => {
  act(() => {
    root.render(
      <Footer
        privacy_policy={dummy_privacy_policy}
        twitter_url={dummy_twitter_url}
      />
    );
  });

  const button = container.querySelector("[data-test-id=privacy_policy_button]");

  // プライバシーポリシーボタンであることの確認
  expect(button.textContent).toBe('プライバシーポリシー');

  // ボタンのクリック
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  expect(container.querySelector(".modal")).toBeTruthy();
})
