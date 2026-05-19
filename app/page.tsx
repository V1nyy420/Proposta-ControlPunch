"use client";

import Image, { type StaticImageData } from "next/image";
import {
  Activity,
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  DatabaseZap,
  Factory,
  FileCheck2,
  FlaskConical,
  Landmark,
  Leaf,
  LockKeyhole,
  Menu,
  PackageCheck,
  Route,
  ScanLine,
  ShieldCheck,
  Sprout,
  Users,
  Wind,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import clonarioScreen from "../Images/clonario control punch.png";
import dashboardScreen from "../Images/dashboard control punch.png";
import direcaoScreen from "../Images/direção control punch.png";
import dispensarioScreen from "../Images/dispensario control punch.png";
import financeiroScreen from "../Images/financeiro control punch.png";
import laboratorioScreen from "../Images/laboratorio control punch.png";
import logo from "../Images/logo.jpeg";
import logoSemFundo from "../Images/logo sem fundo.png";
import oficinaScreen from "../Images/oficina e almoxarifado control punch.png";
import plantioScreen from "../Images/plantio control punch.png";
import secagemScreen from "../Images/secagem control punch.png";

const navItems = [
  { label: "Visão", href: "#visao" },
  { label: "Módulos", href: "#modulos" },
  { label: "Automações", href: "#automacoes" },
  { label: "Escopo", href: "#escopo" },
  { label: "Conformidade", href: "#conformidade" },
  { label: "Investimento", href: "#investimento" },
];

const heroIndicators = [
  "11 módulos integrados",
  "Rastreabilidade ponta a ponta",
  "Auditoria e permissões",
  "Painéis executivos",
];

const modulePreviewImages: Record<string, StaticImageData> = {
  Dashboard: dashboardScreen,
  Clonário: clonarioScreen,
  Plantio: plantioScreen,
  Secagem: secagemScreen,
  Laboratório: laboratorioScreen,
  Dispensário: dispensarioScreen,
  "Oficina & Almoxarifado": oficinaScreen,
  Financeiro: financeiroScreen,
  Direção: direcaoScreen,
};

// Interface section has been merged with Modules

const overviewItems = [
  "Gestão integrada dos setores",
  "Controle de produção",
  "Rastreabilidade ponta a ponta",
  "Estoque e movimentações",
  "Gestão financeira",
  "Logs de auditoria",
  "Permissões por cargo",
  "Relatórios executivos",
  "Automação entre módulos",
];

const modules = [
  {
    title: "Dashboard",
    icon: BarChart3,
    text: "Visão geral com métricas e gráficos de produção e vendas.",
  },
  {
    title: "Clonário",
    icon: Sprout,
    text: "Gerencia a propagação de plantas, rastreamento de estacas e matrizes, planejamento de ciclos de clonagem e manejo.",
  },
  {
    title: "Plantio",
    icon: Leaf,
    text: "Controla o cultivo das plantas, registrando plantios, colheitas, manejos, controle de pragas e irrigações.",
  },
  {
    title: "Secagem",
    icon: Wind,
    text: "Administra o processo de secagem, produção, estoque de vaporização, descartes e controle de ambiente. Inclui gestão de travesseiros (pillow packs).",
  },
  {
    title: "Laboratório",
    icon: FlaskConical,
    text: "Gerencia extrações, diluições, produção de derivados (dermato), dispensação e controle de estoque de laboratório.",
  },
  {
    title: "Dispensário",
    icon: PackageCheck,
    text: "Controla o estoque de produtos rotulados e não rotulados, entradas, saídas e relatórios de vendas.",
  },
  {
    title: "Oficina & Almoxarifado",
    icon: Wrench,
    text: "Planejamento de manutenções, registro de serviços externos e gestão de itens do almoxarifado.",
  },
  {
    title: "Financeiro",
    icon: Landmark,
    text: "Controla gastos (operacionais e não operacionais), categorias de despesas, preços de produtos e gera relatórios financeiros mensais.",
  },
  {
    title: "Rastreabilidade",
    icon: Route,
    text: "Permite o rastreamento completo da origem e destino dos produtos em todas as fases da produção.",
  },
  {
    title: "Acessos",
    icon: ShieldCheck,
    text: "Gerenciamento de usuários, cargos com permissões, logs de auditoria e recuperação de registros excluídos.",
  },
  {
    title: "Direção",
    icon: BriefcaseBusiness,
    text: "Painéis de controle executivos com relatórios consolidados e análises setoriais.",
  },
];

const automations = [
  {
    title: "Baixa Automática de Clonário para Plantio",
    icon: Sprout,
    badge: "Rastreabilidade",
    from: "Clonário",
    to: "Plantio",
    explanation:
      "Quando uma planta é criada ou tem seu ambiente atualizado no módulo de Plantio, considerando os ambientes Estufa 1, Estufa 2, Estufa 3, Estufa 4 e Estufa 5, a automação marca automaticamente o clone correspondente no módulo de Clonário como ‘plantado’, atualizando também a data e o local do plantio.",
    benefit:
      "Reduz retrabalho, evita falhas manuais e mantém a rastreabilidade atualizada entre clonário e plantio.",
  },
  {
    title: "Amarração de Secagem para Dispensário",
    icon: Wind,
    badge: "Estoque",
    from: "Secagem",
    to: "Dispensário",
    explanation:
      "Ao lançar uma saída de plantas para paciente na saída de vaporização dentro do módulo de Secagem, o sistema realiza automaticamente a entrada correspondente no módulo de Dispensário, direcionando o item para a categoria de produtos ‘Não Rotulados’.",
    benefit:
      "Essa amarração reduz retrabalho, evita divergências entre setores e mantém o estoque do Dispensário atualizado de forma automática a partir das movimentações realizadas na Secagem.",
  },
  {
    title: "Amarração de Laboratório com Estoque",
    icon: FlaskConical,
    badge: "Automático",
    from: "Laboratório",
    to: "Estoque",
    explanation:
      "Ao lançar a produção de um item no módulo de Laboratório, como por exemplo 100 frascos de CBD 1500, o sistema realiza automaticamente a baixa dos materiais que compõem aquele produto no estoque, como bulbos, pipetas, frascos, embalagens e demais insumos cadastrados na composição.",
    benefit:
      "Com isso, a produção passa a refletir diretamente no controle de estoque, garantindo maior precisão sobre consumo de materiais, disponibilidade de insumos e custo operacional.",
  },
  {
    title: "Logs de Auditoria Centralizados",
    icon: LockKeyhole,
    badge: "Auditoria",
    from: "Operações",
    to: "Acessos",
    explanation:
      "Todas as operações de criação e atualização em diversos módulos (Secagem, Dispensário, Plantio, Laboratório, Clonário) são automaticamente registradas no módulo de Acessos através da função logAuditoria, garantindo rastreabilidade de ações.",
    benefit:
      "Garante histórico completo das ações, transparência operacional, controle de alterações e maior segurança na gestão dos dados.",
  },
];

const benefits = [
  ["Centralização da operação", "Uma única plataforma para setores, dados, processos e acompanhamento executivo."],
  ["Menos falhas manuais", "Fluxos integrados reduzem retrabalho, inconsistências e controles paralelos."],
  ["Rastreabilidade completa", "Origem, movimentação e destino acompanhados de ponta a ponta."],
  ["Controle por cargos", "Permissões, acessos e responsabilidades alinhados à estrutura da operação."],
  ["Segurança de informações", "Logs, histórico e controle de ações para dados sensíveis."],
  ["Visão gerencial", "Relatórios operacionais e financeiros para decisões mais precisas."],
  ["Previsibilidade produtiva", "Indicadores por setor ampliam a capacidade de planejamento."],
  ["Base escalável", "Arquitetura preparada para futuras melhorias mediante novos escopos."],
];

const investmentDetails = [
  "Manutenção técnica",
  "Suporte operacional básico",
  "Monitoramento da aplicação",
  "Ajustes corretivos",
  "Preservação da estabilidade do sistema",
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    document.documentElement.classList.add("reveal-ready");

    const revealVisibleElements = () => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.04;

        if (isVisible) {
          element.classList.add("is-visible");
        }
      });
    };

    const revealHashSection = () => {
      if (!window.location.hash) {
        return;
      }

      const section = document.querySelector<HTMLElement>(window.location.hash);
      section?.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        element.classList.add("is-visible");
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    requestAnimationFrame(revealVisibleElements);
    requestAnimationFrame(revealHashSection);
    window.addEventListener("hashchange", revealVisibleElements);
    window.addEventListener("hashchange", revealHashSection);
    window.addEventListener("load", revealVisibleElements);
    window.setTimeout(revealHashSection, 120);
    window.setTimeout(revealVisibleElements, 350);
    window.setTimeout(revealVisibleElements, 900);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", revealVisibleElements);
      window.removeEventListener("hashchange", revealHashSection);
      window.removeEventListener("load", revealVisibleElements);
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      setMobileOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <main>
      <header className={`site-header${isScrolled ? " is-scrolled" : ""}${mobileOpen ? " menu-open" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Control Punch">
          <Image src={logo} alt="Control Punch" width={48} height={48} priority />
          <span className="brand-name">Control Punch</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="nav-cta" href="#investimento">
            <BadgeDollarSign size={18} aria-hidden="true" />
            Proposta
          </a>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
        <nav className="mobile-nav" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMobileMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-visual" aria-hidden="true">
          <div className="trace-grid" />
          <div className="signal signal-one" />
          <div className="signal signal-two" />
          <div className="hero-logo-mark">
            <Image src={logoSemFundo} alt="" fill sizes="44vw" priority />
          </div>
        </div>

        <div className="hero-content">
          <p className="eyebrow">Proposta comercial 2026</p>
          <h1 className="hero-title neon-title">
            <span>Control</span>
            <span>Punch</span>
          </h1>
          <p className="hero-subtitle">
            Gestão completa, rastreabilidade e controle operacional para toda a cadeia produtiva.
          </p>
          <p className="hero-copy">
            Uma plataforma desenvolvida para centralizar setores, automatizar processos, organizar dados críticos e
            oferecer visão gerencial sobre cultivo, processamento, estoque, financeiro e distribuição.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#visao">
              Conhecer proposta
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#investimento">
              Ver investimento
            </a>
          </div>
          <div className="hero-indicators" aria-label="Diferenciais do Control Punch">
            {heroIndicators.map((item) => (
              <div key={item}>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-product" aria-label="Prévia real das telas do sistema Control Punch">
          <div className="mockup-frame mockup-main">
            <div className="mockup-topbar">
              <span />
              <span />
              <span />
              <strong>Dashboard</strong>
            </div>
            <Image
              src={dashboardScreen}
              alt="Tela real do dashboard do Control Punch"
              priority
              sizes="(max-width: 900px) 92vw, 52vw"
            />
          </div>
          <div className="mockup-frame mockup-secondary mockup-direction">
            <div className="mockup-topbar">
              <span />
              <span />
              <span />
              <strong>Direção</strong>
            </div>
            <Image src={direcaoScreen} alt="Tela real do módulo Direção do Control Punch" sizes="280px" />
          </div>
          <div className="mockup-frame mockup-secondary mockup-plantio">
            <div className="mockup-topbar">
              <span />
              <span />
              <span />
              <strong>Plantio</strong>
            </div>
            <Image src={plantioScreen} alt="Tela real do módulo Plantio do Control Punch" sizes="260px" />
          </div>
        </div>
      </section>

      <section className="section section-overview" id="visao">
        <div className="section-inner">
          <div className="section-kicker" data-reveal>
            <ScanLine size={18} aria-hidden="true" />
            Visão geral do sistema
          </div>
          <div className="section-heading split-heading" data-reveal>
            <h2>Gestão integrada para toda a cadeia operacional.</h2>
            <p>
              O Control Punch abrange a jornada completa, da propagação de clones à distribuição final dos produtos,
              transformando setores isolados em um fluxo operacional rastreável, auditável e orientado por dados.
            </p>
          </div>

          <div className="overview-band" data-reveal>
            <div className="overview-statement">
              <Factory size={28} aria-hidden="true" />
              <p>
                Uma operação complexa exige controle por etapa, padronização de registros e indicadores confiáveis.
                A plataforma reúne produção, estoque, financeiro, acessos e direção no mesmo núcleo de informação.
              </p>
            </div>
            <div className="overview-grid">
              {overviewItems.map((item) => (
                <div className="overview-item" key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Interface foi combinada com a seção Módulos para evitar duplicação */}

      <section className="section modules-section theme-light" id="modulos">
        <div className="section-inner">
          <div className="section-kicker" data-reveal>
            <Boxes size={18} aria-hidden="true" />
            Módulos principais
          </div>
          <div className="section-heading" data-reveal>
            <h2>Setores conectados por uma proposta de valor operacional.</h2>
            <p>
              Cada módulo foi estruturado para substituir controles manuais por processos organizados, com informações
              consistentes e leitura gerencial clara.
            </p>
          </div>

          <div className="module-grid">
            {modules.map((module, index) => {
              const Icon = module.icon;
              const isFeatured = ["Dashboard", "Rastreabilidade", "Direção"].includes(module.title);
              const previewImage = modulePreviewImages[module.title];
              return (
                <article
                  className={`module-card${isFeatured ? " module-card-featured" : ""}`}
                  data-reveal
                  key={module.title}
                  style={{ transitionDelay: `${index * 34}ms` }}
                >
                  {previewImage && (
                    <div className="module-preview">
                      <Image src={previewImage} alt={`Prévia real do módulo ${module.title}`} sizes="(max-width: 720px) 82vw, 28vw" />
                    </div>
                  )}
                  <div className="module-icon">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-automations" id="automacoes">
        <div className="section-inner">
          <div className="section-kicker" data-reveal>
            <DatabaseZap size={18} aria-hidden="true" />
            Automações e integrações internas
          </div>
          <div className="section-heading split-heading" data-reveal>
            <h2>Amarrações entre setores para reduzir atrito operacional.</h2>
            <p>
              As integrações internas preservam a rastreabilidade, evitam duplicidade de lançamentos e mantêm dados
              críticos atualizados sem depender exclusivamente de conferência manual.
            </p>
          </div>

          <div className="automation-grid">
            {automations.map((automation, index) => {
              const Icon = automation.icon;
              return (
                <article
                  className="automation-card"
                  data-reveal
                  key={automation.title}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="automation-card-header">
                    <div className="automation-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="automation-card-badge">
                      <Icon size={14} aria-hidden="true" />
                      <span>{automation.badge}</span>
                    </div>
                  </div>
                  <div className="automation-card-connection">
                    <span>{automation.from}</span>
                    <ArrowRight size={12} className="connection-arrow" aria-hidden="true" />
                    <span>{automation.to}</span>
                  </div>
                  <h3>{automation.title}</h3>
                  <p>{automation.explanation}</p>
                  <div className="automation-card-benefit">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>{automation.benefit}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section benefits-section theme-light" id="beneficios">
        <div className="section-inner">
          <div className="section-kicker" data-reveal>
            <Activity size={18} aria-hidden="true" />
            Benefícios estratégicos
          </div>
          <div className="section-heading" data-reveal>
            <h2>Controle interno, segurança e visão executiva no mesmo ambiente.</h2>
            <p>
              A implementação fortalece a rotina operacional e cria uma base gerencial para crescimento com mais
              previsibilidade, governança e rastreabilidade.
            </p>
          </div>

          <div className="benefit-grid">
            {benefits.map(([title, text], index) => (
              <article className="benefit-card" data-reveal key={title} style={{ transitionDelay: `${index * 30}ms` }}>
                <ChevronRight size={18} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section scope-section" id="escopo">
        <div className="section-inner scope-layout">
          <div data-reveal>
            <div className="section-kicker">
              <FileCheck2 size={18} aria-hidden="true" />
              Escopo da implementação
            </div>
            <h2>Implementação completa dentro do escopo definido.</h2>
            <p>
              O valor de implementação contempla os módulos e funcionalidades descritos nesta proposta, incluindo ajustes de layout, implantação e configuração inicial necessários para a entrega do sistema conforme o escopo apresentado.
            </p>
          </div>

          <div className="scope-panel" data-reveal>
            <div>
              <ClipboardCheck size={24} aria-hidden="true" />
              <h3>Condições de escopo</h3>
            </div>
            <p>
              Novas funcionalidades, novos módulos, integrações externas, alterações estruturais ou demandas não previstas no escopo inicial deverão ser avaliadas e orçadas separadamente, conforme complexidade e impacto técnico.
            </p>
          </div>
        </div>
      </section>

      <section className="section compliance-section" id="conformidade">
        <div className="section-inner">
          <article className="compliance-card" data-reveal>
            <div className="compliance-badge">
              <ShieldCheck size={18} aria-hidden="true" />
              Conformidade
            </div>
            <div className="compliance-layout">
              <div>
                <h2>Uso regulado e conformidade</h2>
                <p>
                  O Control Punch é uma plataforma voltada à gestão interna de operações autorizadas, com foco em
                  organização, rastreabilidade, controle operacional e segurança das informações.
                </p>
              </div>
              <div className="compliance-copy">
                <p>
                  A utilização do sistema deve ocorrer exclusivamente em conformidade com a legislação vigente, normas
                  regulatórias aplicáveis e eventuais autorizações necessárias para a atividade exercida.
                </p>
                <p>
                  A plataforma não incentiva, viabiliza ou substitui qualquer obrigação legal, regulatória, sanitária,
                  administrativa ou documental exigida pelos órgãos competentes. Seu objetivo é apoiar a gestão, o
                  controle interno e a rastreabilidade de processos dentro de uma operação devidamente regularizada.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section investment-section theme-light" id="investimento">
        <div className="section-inner investment-layout">
          <div className="investment-copy" data-reveal>
            <div className="section-kicker">
              <BadgeDollarSign size={18} aria-hidden="true" />
              Investimento
            </div>
            <h2>Valor para implantação do Control Punch.</h2>
            <p>
              A proposta contempla a entrega de uma plataforma operacional completa para organizar, controlar e acompanhar
              a operação com rastreabilidade, segurança e indicadores gerenciais.
            </p>
          </div>

          <div className="pricing-panel" data-reveal>
            <div className="pricing-spark" aria-hidden="true" />
            <div className="pricing-main">
              <span>Implementação do sistema</span>
              <div className="price-container">
                <strong className="price-value">R$ 25.000,00</strong>
                <span className="price-term">à vista</span>
              </div>
              <a
                className="button-infinitepay"
                href="https://link.infinitepay.io/vinicius-ramos-86y/VC1DLUMtSQ-pyJ8cu4vNF-25000,00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Efetuar pagamento de R$ 25.000,00 à vista via InfinitePay"
              >
                Efetuar pagamento
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="pricing-monthly">
              <span>Mensalidade</span>
              <strong className="price-value">R$ 300,00/mês</strong>
            </div>
            <div className="maintenance-list">
              {investmentDetails.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="investment-note">
              Novas features deverão ser orçadas separadamente.
            </p>
          </div>
        </div>
      </section>

      <section className="section final-section" id="consideracoes">
        <div className="section-inner final-layout" data-reveal>
          <div>
            <div className="section-kicker">
              <Users size={18} aria-hidden="true" />
              Considerações finais
            </div>
            <h2>Uma plataforma de gestão integrada para profissionalizar a operação.</h2>
            <p>
              O Control Punch foi pensado para entregar organização, controle e visão estratégica para uma operação
              complexa, conectando setores que antes dependiam de processos manuais, planilhas ou controles isolados.
            </p>
          </div>
          <div className="final-cta" id="aprovar">
            <h3>Pronto para transformar a gestão operacional em um processo mais seguro, rastreável e inteligente?</h3>
            <a className="button button-primary" href="https://wa.me/5514996341041?text=Olá,%20gostaria%20de%20aprovar%20a%20proposta%20do%20Control%20Punch!" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
              Aprovar proposta
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Control Punch. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
