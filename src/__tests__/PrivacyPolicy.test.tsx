import renderer from "react-test-renderer";
import PrivacyPolicy from "components/PrivacyPolicy";

const dummyScentence = "hogehoge";
const dummyHook = jest.fn();

/* ---------------- snapshot test -------------------- */
it("コンポーネントが描画されること", () => {
  const tree = renderer
    .create(<PrivacyPolicy scentence={dummyScentence} hook={dummyHook} />)
    .toJSON();

  expect(tree).toMatchInlineSnapshot(`
    <div
      className="overlay"
    >
      <div
        className="modal"
      >
        <p>
          hogehoge
        </p>
        <button
          onClick={[Function]}
        >
          OK
        </button>
      </div>
    </div>
  `);
});
