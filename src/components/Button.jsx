const Button = ({ text, className, id, href, target, download }) => {

  return (
    <a 
    href={href}
    target={target}
    download={download}
    onClick={(e) => {
      if (id) {
         e.preventDefault();

        const target = document.getElementById('work');

        if(target){
          const offset = window.innerHeight * 0.15;

          const top = target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({top, behavior: 'smooth'})

        }
      }
    }}
    className={`if ${className ?? ""} cta-wrapper`} /*cta : Call To Action*/>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
