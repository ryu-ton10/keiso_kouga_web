import renderer from 'react-test-renderer';
import Gallery from 'pages/Gallery';

/* ---------------- snapshot test -------------------- */
it('コンポーネントが描画されること', () => {
  const component = renderer.create(
    <Gallery />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
