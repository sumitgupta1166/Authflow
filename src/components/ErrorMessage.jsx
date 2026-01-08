const ErrorMessage = ({ message, onRetry }) => (
  <div>
    <p style={{ color: "red" }}>{message}</p>
    {onRetry && <button onClick={onRetry}>Retry</button>}
  </div>
);

export default ErrorMessage;
