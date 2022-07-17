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
        pre_webp: "sample.webp",
        pre_jpeg: "sample.jpeg",
    },
    url: "http://sample.com",
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
