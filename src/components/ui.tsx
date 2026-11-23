import type { CSSProperties, PointerEvent, ReactNode } from 'react';
import { useInView } from '../hooks';

/** Fades and lifts children into view on scroll. */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, shown] = useInView<HTMLDivElement>();
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}

/** Renders **bold** markers as <strong>. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
      )}
    </>
  );
}

/** Card with a cursor-following spotlight. */
export function SpotlightCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };
  return (
    <div className={`card spotlight ${className}`.trim()} onPointerMove={onMove}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  lead,
  rest,
}: {
  eyebrow: string;
  lead: string;
  rest: string;
}) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {lead} <span>{rest}</span>
      </h2>
    </Reveal>
  );
}
