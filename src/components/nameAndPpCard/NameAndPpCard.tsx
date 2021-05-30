import './nameAndPpCard.scss';

interface IProps {
  src: string;
  name: string;
}

function NameAndPpCard(props: IProps) {

  return (
    <div className="name-pp-card">
        <div className="name-pp-card__name">{props.name}</div>
        <div className="name-pp-card__img-container">
          <img className="name-pp-card__img-container__image" src={props.src} alt="Profile" />
        </div>
    </div>
  );
}

export default NameAndPpCard;