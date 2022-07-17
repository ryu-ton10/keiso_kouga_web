import renderer from 'react-test-renderer';
import Title from 'pages/Title';

/* ---------------- snapshot test -------------------- */
it('コンポーネントが描画されること', () => {
  const component = renderer.create(
    <Title />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
