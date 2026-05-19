"use client";

import Image from "next/image";
import { BadgeDollarSign, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../Images/logo.jpeg";
import styles from "./Header.module.css";

const navItems = [
  { label: "Visão", href: "#visao" },
  { label: "Módulos", href: "#modulos" },
  { label: "Automações", href: "#automacoes" },
  { label: "Escopo", href: "#escopo" },
  { label: "Conformidade", href: "#conformidade" },
  { label: "Investimento", href: "#investimento" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      setMobileOpen(false); // fecha o menu ao rolar
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${mobileOpen ? styles.menuOpen : ""}`}>
      <div className={styles.container}>
        <a className={styles.brand} href="#inicio" aria-label="Control Punch">
          <Image src={logo} alt="Control Punch" width={36} height={36} className={styles.brandLogo} priority />
          <span className={styles.brandName}>Control Punch</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.cta} href="#investimento">
            <BadgeDollarSign size={16} aria-hidden="true" />
            <span>Proposta</span>
          </a>
          <button
            className={styles.mobileToggle}
            type="button"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((c) => !c)}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className={styles.mobileNav} aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
