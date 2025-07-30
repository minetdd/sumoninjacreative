import version from '../version'

const Footer = () => (
  <footer style={{
    width: '100%',
    textAlign: 'center',
    padding: '16px 0',
    position: 'fixed',
    bottom: 0,
    left: 0,
    background: '#fafafa',
    color: '#888',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    letterSpacing: 1
  }}>
    Sumo Ninja Creative &copy; {new Date().getFullYear()} &mdash; v{version}
  </footer>
);

export default Footer;