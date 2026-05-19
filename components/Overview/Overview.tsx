"use client";

import { CheckCircle2, Factory, ScanLine } from "lucide-react";
import styles from "./Overview.module.css";

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

export function Overview() {
  return (
    <section className={styles.section} id="visao">
      <div className={styles.container}>
        <div className={styles.kicker}>
          <ScanLine size={16} aria-hidden="true" />
          Visão geral do sistema
        </div>
        
        <div className={styles.heading}>
          <h2>Gestão integrada para toda a cadeia operacional.</h2>
          <p>
            O Control Punch abrange a jornada completa, da propagação de clones à distribuição final dos produtos,
            transformando setores isolados em um fluxo operacional rastreável, auditável e orientado por dados.
          </p>
        </div>

        <div className={styles.band}>
          <div className={styles.statement}>
            <Factory size={28} className={styles.statementIcon} aria-hidden="true" />
            <p>
              Uma operação complexa exige controle por etapa, padronização de registros e indicadores confiáveis.
              A plataforma reúne produção, estoque, financeiro, acessos e direção no mesmo núcleo de informação.
            </p>
          </div>
          <div className={styles.grid}>
            {overviewItems.map((item) => (
              <div className={styles.item} key={item}>
                <CheckCircle2 size={18} className={styles.itemIcon} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
