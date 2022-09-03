import Typical from "react-typical";
const AboutPage = () => {
  return (
    <>
      <h1> <Typical
                wrapper="b"
                loop={Infinity}
                steps={[
                  "Full Stack Web Developer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}></Typical>{' '}With 3+ years of experience</h1>
      <br/>
      <h3>My fields of expertise are: Backend, DevOps, Artificial Intelligence, Data Management &#38; Data Science, Desktop Programming, Cloud Computing.</h3>
      <h3>My professional experience also includes: Business Intelligence, Big Data, Cloud Computing, Cybersecurity, Database Administration (SQL Server), Desktop Programming (C#), Full Stack Web Development, DevOps Engineer(3+ Years of Experience)</h3>
      <br />
      <h3>😊 I love gaming and hanging out with friends, my mission in life is to be inspiration for the people I love and create laughter.</h3>
      <h3>😊 I spend most of my time with family and friends, or alone.</h3> 
      <h3>😊 love to be creative, and I wish I was a better writer.</h3> 
      <h3>😊 I love my life.</h3> 
      <h3>😊 I love to listen to music.</h3> 
      <h3>😊 I dance, I sing, I take pictures.</h3> 
      <h3>😊 I love learning about people, cultures, places, and thoughts.</h3> 
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
