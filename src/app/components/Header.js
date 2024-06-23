"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import NameSwitch from "./NameSwitch";

export default function Header({ player, handlePlayerChange, time }) {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header style={{ top: visible ? "0" : "-100px", transition: "top 0.5s" }}>
      <Logo />
      <NameSwitch setPlayer={handlePlayerChange} player={player} time={time} />
      <Hamburger open={open} handleClick={() => setOpen(!open)} />
      <div
        className={`overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            setOpen(false);
          } else if (event.key === "Escape" && open) {
            setOpen(false);
          }
        }}
        role="button"
      >
        {open && (
          <ul className="overlay-menu flex">
            <div className="main-links">
              <Link href="/#om-projektet">
                <li className="hover-orange">om projektet</li>
              </Link>
              <Link href="/mark">
                <li className="hover-orange">om mark</li>
              </Link>
              <Link href="/claudine">
                <li className="hover-orange">om claudine</li>
              </Link>
              <Link href="/#hvem-er-vi">
                <li className="hover-orange">Hvem er vi</li>
              </Link>
            </div>
          </ul>
        )}
      </div>
    </header>
  );
}
