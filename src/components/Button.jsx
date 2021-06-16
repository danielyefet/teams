import Link from 'next/link';

function Button({
  className: additionalClasses = '', href, icon, onClick = () => {}, text = '',
}) {
  const className = `${additionalClasses ? `${additionalClasses} ` : ''}py-2 ${icon ? 'pl-2 pr-3' : 'px-3'} flex items-center bg-teams-purple hover:bg-teams-purple-light inline-block text-white font-bold rounded shadow`;

  return (
    href ? (
      <Link href={href}>
        <a className={className}>{text}</a>
      </Link>
    ) : (
      <button className={className} type="button" onClick={onClick}>
        {icon && <span className="mr-1">{icon}</span>}
        {text}
      </button>
    ));
}

export default Button;
