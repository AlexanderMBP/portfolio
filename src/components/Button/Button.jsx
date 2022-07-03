import './Button.css';

function Button({ content, icon, iconAlt, href }) {
  return (
    <a href={href} aria-label="My work section link" aria-hidden="true" className='button'>
        <h5 className="button__text">{ content }</h5>
        <img src={icon ? icon : null} alt={iconAlt} className='button__img'/>        
    </a>
  );
}

export default Button;
