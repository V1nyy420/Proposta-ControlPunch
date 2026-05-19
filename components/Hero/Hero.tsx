"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import logoSemFundo from "../../Images/logo sem fundo.png";
import dashboardScreen from "../../Images/dashboard control punch.png";
import direcaoScreen from "../../Images/direção control punch.png";
import plantioScreen from "../../Images/plantio control punch.png";
import styles from "./Hero.module.css";

const heroIndicators = [
  "11 módulos integrados",
  "Rastreabilidade ponta a ponta",
  "Auditoria e permissões",
  "Painéis executivos",
];

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.heroVisual} aria-hidden="true">
        <div className={styles.traceGrid} />
        <div className={`${styles.signal} ${styles.signalOne}`} />
        <div className={`${styles.signal} ${styles.signalTwo}`} />
        <div className={styles.logoMark}>
          <Image src={logoSemFundo} alt="" fill sizes="44vw" priority className={styles.logoImage} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Proposta comercial 2026</p>
          <h1 className={styles.title}>
            <span>Control</span>
            <span>Punch</span>
          </h1>
          <p className={styles.subtitle}>
            Gestão completa, rastreabilidade e controle operacional para toda a cadeia produtiva.
          </p>
          <p className={styles.copy}>
            Uma plataforma desenvolvida para centralizar setores, automatizar processos, organizar dados críticos e oferecer visão gerencial sobre cultivo, processamento, estoque, financeiro e distribuição.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#visao">
              Conhecer proposta
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className={styles.secondaryButton} href="#investimento">
              Ver investimento
            </a>
          </div>

          <div className={styles.indicators} aria-label="Diferenciais do Control Punch">
            {heroIndicators.map((item) => (
              <div key={item} className={styles.indicatorItem}>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.productDisplay} aria-label="Prévia real das telas do sistema Control Punch">
          <div className={`${styles.mockupFrame} ${styles.mockupMain}`}>
            <div className={styles.mockupTopbar}>
              <span />
              <span />
              <span />
              <strong>Dashboard</strong>
            </div>
            <Image
              src={dashboardScreen}
              alt="Tela real do dashboard"
              priority
              sizes="(max-width: 900px) 92vw, 52vw"
              className={styles.mockupImage}
            />
          </div>
          <div className={`${styles.mockupFrame} ${styles.mockupSecondary} ${styles.mockupDirection}`}>
            <div className={styles.mockupTopbar}>
              <span />
              <span />
              <span />
              <strong>Direção</strong>
            </div>
            <Image src={direcaoScreen} alt="Módulo Direção" sizes="280px" className={styles.mockupImage} />
          </div>
          <div className={`${styles.mockupFrame} ${styles.mockupSecondary} ${styles.mockupPlantio}`}>
            <div className={styles.mockupTopbar}>
              <span />
              <span />
              <span />
              <strong>Plantio</strong>
            </div>
            <Image src={plantioScreen} alt="Módulo Plantio" sizes="260px" className={styles.mockupImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
