import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";
import Typical from "react-typical/dist/index";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <b>
              <h1 className={styles.name}>Onishell Tiburcio</h1>
            </b>
            <h6 className={styles.bio}>
              I am a{" "}
              <Typical
                wrapper="b"
                loop={Infinity}
                steps={[
                  "Full Stack Web Developer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
              />
            </h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
