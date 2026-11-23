import { stats, type Stat as StatData } from '../data';
import { useCountUp, useInView } from '../hooks';

function StatItem({ value, suffix, label }: StatData) {
  const [ref, shown] = useInView<HTMLDivElement>(0.4);
  const n = useCountUp(value, shown);
  return (
    <div className="stat" ref={ref}>
      <div className="stat-num">
        {n.toLocaleString('en-US')}
        <span>{suffix}</span>
      </div>
      <p>{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="section band dark" aria-label="Highlights">
      <div className="container stats-grid">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
