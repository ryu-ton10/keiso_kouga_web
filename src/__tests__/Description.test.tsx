import renderer from 'react-test-renderer';
import Description from 'pages/Description';

/* ---------------- snapshot test -------------------- */
it('コンポーネントが描画されること', () => {
  const component = renderer.create(
    <Description />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
