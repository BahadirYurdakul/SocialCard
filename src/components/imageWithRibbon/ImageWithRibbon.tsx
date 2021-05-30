import './imageWithRibbon.scss';
import viewPhoto from'../../static/img/viewPhoto.jpg';
import profilePhoto from'../../static/img/Pp_512x512.png';
import SquareCaption from '../squareCaption/SquareCaption';
import NameAndPpCard from '../nameAndPpCard/NameAndPpCard';

const name = "Bahadır Yurdakul";

function ImageWithRibbon() {
  return (
    <div className="image-ribbon">
      <div className="image-ribbon__ribbon--top">
        <SquareCaption backgroundColor="#5f9ea0" textColor="white" caption="DEV"/>
      </div>
      <div className="image-ribbon__ribbon--bottom">
        <NameAndPpCard src={profilePhoto} name={name}/>
      </div>
      <img className="image-ribbon__image" src={viewPhoto} alt="Card" />
    </div>

  );
}

export default ImageWithRibbon;