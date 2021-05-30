import './socialCardFooter.scss';

const title = "Learning React? Start Small.";
const description = "Can't pry yourself away the tutorials? The cure is to make tiny little experiment apps.";
const linkTitle = "dev.to";
const link = "https://github.com/BahadirYurdakul";

function SocialCardFooter() {

  return (
    <div className="social-card-footer">
      <div className="social-card-footer__title">{title}</div>
      <div className="social-card-footer__description">{description}</div>
      <a className="social-card-footer__link" href={link} target="_blank" rel="noreferrer">{linkTitle}</a>
    </div>
  );
}

export default SocialCardFooter;