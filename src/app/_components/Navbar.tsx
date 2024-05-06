"use client";
import Link from "next/link";
import Image from "next/image";
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <span>
            <Image src="/FMC2E.jpg" alt="Logo" width={40} height={40} />
          </span>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <span>Commands</span>
          </Link>
          x
        </li>
        <li>
          <Link href="/contact">
            <span>Sprints</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span>Mapping</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span>Operators</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span>Expertise</span>
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
