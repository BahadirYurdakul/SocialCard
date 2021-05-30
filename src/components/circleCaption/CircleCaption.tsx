import './circleCaption.scss';

interface IProps {
  backgroundColor: string;
  textColor: string;
  caption: string;
}

function CircleCaption(props: IProps) {

  return (
    <div className="circle-caption" style={{backgroundColor: props.backgroundColor, color: props.textColor}}>
      {props.caption}
    </div>
  );
}

export default CircleCaption;