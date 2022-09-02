import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'onishelltib.me',
    href: 'https://onishelltib.me',
  },
  {
    social: 'email',
    link: 'onishelltib@gmail.com',
    href: 'mailto:onishelltib@gmail.com',
  },
  {
    social: 'github',
    link: 'OnishellT',
    href: 'https://github.com/OnishellT',
  },
  {
    social: 'linkedin',
    link: 'Onishell Tiburcio',
    href: 'https://www.linkedin.com/in/onishell-tiburcio-658b23242/',
  },
  {
    social: 'twitter',
    link: 'OnishellT',
    href: 'https://twitter.com/OnishellT',
  },
  {
    social: 'instagram',
    link: 'OnishellTiburcio',
    href: 'https://www.instagram.com/onishelltiburcio/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
