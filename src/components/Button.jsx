import Link from 'next/link';

const Spinner = (
  <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

function Button({
  className: additionalClasses = '', disabled = false, href, icon, loading = false, onClick = () => {}, target, text = '',
}) {
  const className = `${additionalClasses ? `${additionalClasses} ` : ''}py-2 ${icon ? 'pl-2 pr-3' : 'px-3'} flex items-center bg-teams-purple hover:bg-teams-purple-light disabled:opacity-50 disabled:bg-teams-purple disabled:cursor-not-allowed inline-block text-white font-bold rounded shadow`;

  return (
    href ? (
      <Link href={href}>
        <a className={className} target={target}>{text}</a>
      </Link>
    ) : (
      <button
        className={className}
        disabled={disabled || loading}
        onClick={onClick}
        type="button"
      >
        {!loading && icon && <span className="mr-1">{icon}</span>}
        {loading && Spinner}
        {text}
      </button>
    ));
}

export default Button;
