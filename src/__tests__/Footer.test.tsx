import renderer from 'react-test-renderer';
import Footer from 'pages/Footer';

/* ---------------- snapshot test -------------------- */
it('コンポーネントが描画されること', () => {
  const dummy_privacy_policy = 'hogehoge';
  const dummy_twitter_url = 'fugafuga';
  const component = renderer.create(
    <Footer
      privacy_policy={dummy_privacy_policy}
      twitter_url={dummy_twitter_url}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
