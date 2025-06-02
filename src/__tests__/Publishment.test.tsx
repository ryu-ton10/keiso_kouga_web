import renderer from 'react-test-renderer';
import Publishment from 'pages/Publishment';

const dummyBooks = [
  {
    id: '0',
    title: "sample title",
    description: "sample description",
    image: {
        webp: "sample.webp",
        jpeg: "sample.jpeg",
    },
  },
];

/* ---------------- snapshot test -------------------- */
it('コンポーネントが描画されること', () => {
  const component = renderer.create(
    <Publishment books={dummyBooks} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
