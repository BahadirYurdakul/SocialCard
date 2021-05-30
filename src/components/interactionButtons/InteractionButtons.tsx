import './interactionButtons.scss';
import React, { useState } from 'react';
import { BiMessageRounded } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';

const messageCount = 2;
const retweetCount = 47;
const likeCount = 190;

const buttonWrapperClass = "interaction-buttons__button-wrapper"
const buttonTextClass = buttonWrapperClass + "__text";

function InteractionButtons() {
  const [retweetChosen, toggleRetweet] = useState(true);
  const [liked, toggleLike] = useState(true);

  const retweetClassName =  buttonWrapperClass + (retweetChosen ? ' retweeted' : '');
  const likedClassName = buttonWrapperClass + (liked ? ' liked' : '');

  return (
    <div className="interaction-buttons">
      <div className={buttonWrapperClass}>
        <BiMessageRounded />
        <div className={buttonTextClass}>{messageCount}</div>
      </div>
      <div className={retweetClassName} onClick={() => toggleRetweet(!retweetChosen)}>
        <FaRetweet />
        <div className={buttonTextClass}>{retweetCount}</div>
      </div>
      <div className={likedClassName} onClick={() => toggleLike(!liked)}>
        {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        <div className={buttonTextClass}>{likeCount}</div>
      </div>
      <div className={buttonWrapperClass}>
        <BiEnvelope />
      </div>
    </div>
  );
}

export default InteractionButtons;