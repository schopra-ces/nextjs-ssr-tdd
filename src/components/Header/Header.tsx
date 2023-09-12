import Link from "next/link";

import headerClassNames from "./headerClassNames";

const Header = () => {
  const {
    container,
    header,
    link,
    welcomeText,
    ul,
  } = headerClassNames;

  return (
    <header className={header}>
      <div className={container}>
        <Link className={welcomeText} href="/">
          <h3>Welcome, User</h3>
        </Link>

        <nav>
          <ul className={ul}>
            <li >
              <Link className={link} href="/">
                Home
              </Link>
            </li>
            <li >
              <Link className={link} href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
