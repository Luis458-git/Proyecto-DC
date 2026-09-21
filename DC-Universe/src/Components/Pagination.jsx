export default function Pagination({
  total,
  page,
  onPage
}) {
  const pages = Math.max(1, Math.ceil(total / 8));
  const visible = [...new Set([1, page - 1, page, page + 1, pages])].filter(n => n >= 1 && n <= pages).sort((a, b) => a - b);
  return <div className="pagination"><p>Showing {total ? (page - 1) * 8 + 1 : 0}–{Math.min(page * 8, total)} of {total} Metahumans across Codex 52</p><nav aria-label="Pagination"><button disabled={page === 1} onClick={() => onPage(page - 1)}>‹ PREV</button>{visible.map((n, i) => <span key={n}>{i > 0 && n - visible[i - 1] > 1 && <span className="ellipsis"> … </span>}<button aria-label={'Page ' + n} aria-current={page === n ? 'page' : undefined} onClick={() => onPage(n)}>{n}</button></span>)}<button disabled={page === pages} onClick={() => onPage(page + 1)}>NEXT ›</button></nav></div>;
}
