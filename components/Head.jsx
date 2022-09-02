import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Onishell is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="onishell, portfolio"
      />
      <meta property="og:title" content="Onihell's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Onishell',
};
