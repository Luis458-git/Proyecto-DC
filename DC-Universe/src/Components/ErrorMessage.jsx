export default function ErrorMessage({
  message,
  onRetry
}) {
  return <div className="state-box" role="alert"><span className="state-symbol" aria-hidden="true">⚠</span><h3>Multiverse connection failed.</h3><p>{message || 'Check your connection and try contacting the archive again.'}</p><button onClick={onRetry}>TRY AGAIN</button></div>;
}
