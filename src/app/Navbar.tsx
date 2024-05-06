import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/public/FMC2E.JPG" alt="Logo" />
          </a>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>Commands</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Sprints</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Mapping</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Operators</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Expertise</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background-color: #333;
          color: white;
        }

        .logo img {
          height: 40px; /* Adjust height as needed */
        }

        .nav-links {
          list-style-type: none;
          display: flex;
        }

        .nav-links li {
          margin-left: 1rem;
        }

        .nav-links li a {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
