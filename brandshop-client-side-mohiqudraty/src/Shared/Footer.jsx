const Footer = () => {
  return (
    <footer className="footer p-10 border-t-2 text-base-content">
      <aside>
        <img
          className="w-12 h-12"
          src="https://i.ibb.co/1bCWhZT/brand-shop-bd-logo.png"
          alt=""
        />
        <p>
          Brand Shop BD Ltd.
          <br />
          Providing Brand Products since 20043 .
        </p>
      </aside>
      <nav>
        <header className="footer-title">Brand</header>
        <a className="link link-hover">Apple</a>
        <a className="link link-hover">Samsung</a>
        <a className="link link-hover">Google</a>
        <a className="link link-hover">Sony and More...</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
