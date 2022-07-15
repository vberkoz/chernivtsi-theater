import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname;
  return (
    <header>
      <p>Chernivtsi Theater</p>
      <nav>
        <Link href="/">
          <a data-active={isActive('/')}>
            Home
          </a>
        </Link>
        <Link href="/theater">
          <a data-active={isActive('/theater')}>
            Theater
          </a>
        </Link>
        <Link href="/worker">
          <a data-active={isActive('/worker')}>
            Workers
          </a>
        </Link>
        <Link href="/spectacle">
          <a data-active={isActive('/spectacle')}>
            Repertoire
          </a>
        </Link>
        <Link href="/festival">
          <a data-active={isActive('/festival')}>
            Festival
          </a>
        </Link>
        <Link href="/post">
          <a data-active={isActive('/post')}>
            Posts
          </a>
        </Link>
        <Link href="/program">
          <a data-active={isActive('/program')}>
            Program
          </a>
        </Link>
        <Link href="/studio">
          <a data-active={isActive('/studio')}>
            Studio
          </a>
        </Link>
        <Link href="/vacancy">
          <a data-active={isActive('/vacancy')}>
            Vacancy
          </a>
        </Link>
        <Link href="/contact">
          <a data-active={isActive('/contact')}>
            Contact
          </a>
        </Link>
      </nav>
      <style jsx>{`
        nav a {
          margin: 0 5px;
        }

        a[data-active='true'], a:hover {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
}

export default Header;