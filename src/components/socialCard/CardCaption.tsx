import './cardCaption.scss';

const name = "Bahadır Yurdakul";
const username = "@Bahadir";
const date = "May 30";
const title = "Learn React? Start Small.";
const authorlink = "https://github.com/BahadirYurdakul";
const author = "@bahadiryurdakul";

function CardCaption() {
  return (
    <div className="card-caption">
      <div className="card-caption__header">
        <div className="card-caption__header__user-details">
          <div className="card-caption__header__user-details__name">{name}</div>
          <div className="card-caption__header__user-details__username">{username}</div>
          <div className="card-caption__header__user-details__dot">{'.'}</div>
          <div className="card-caption__header__user-details__date">{date}</div>
        </div>
        <div className="card-caption__header__title">{title}</div>
        <div className="card-caption__header__author">
          {'{ author: '}
          <a href={authorlink} target="_blank" rel="noreferrer">{author}</a>
          {' }'}
        </div>
      </div>
      <div className="card-caption__footer">
        <button>{'v'}</button>  
      </div>  
    </div>
  );
}

export default CardCaption;