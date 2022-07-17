import renderer from 'react-test-renderer';
import Members from 'pages/Members';

const dummyMembers = [
  {
    id: "0",
    name: "test",
    icon: {
        webp:"sample.webp",
        jpeg:"sample.jpeg",
    },
    works: [
      {
        id: "0",
        url: "sample.jpeg",
      },
    ],
    twitter_url: "http://sample.com/",
    keywords: ["hoge"],
    camera: "fuga"
  },
]
/* ---------------- snapshot test -------------------- */
it('コンポーネントが描画されること', () => {
  const component = renderer.create(
    <Members members={dummyMembers} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
