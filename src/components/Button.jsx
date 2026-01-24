const Button = ({ text, className, id }) => {
  return (
    <a className={`if ${className ?? ""} cta-wrapper`} /*cta : Call To Action*/>
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
