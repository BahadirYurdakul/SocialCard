import './squareCaption.scss';

interface IProps {
  backgroundColor: string;
  textColor: string;
  caption: string;
}

function SquareCaption(props: IProps) {
  return (
    <div className="square-caption" style={{backgroundColor: props.backgroundColor, color: props.textColor}}>
      {props.caption}
    </div>
  );
}

export default SquareCaption;