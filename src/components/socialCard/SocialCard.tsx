import React from 'react';
import CircleCaption from '../circleCaption/CircleCaption';
import ImageWithRibbon from '../imageWithRibbon/ImageWithRibbon';
import InteractionButtons from '../interactionButtons/InteractionButtons';
import SocialCardFooter from '../socialCardFooter/SocialCardFooter';
import CardCaption from './CardCaption';
import './socialCard.scss';

const card = "social-card";
const box = card + "__box";
const header = box + "__header";
const cardBody = box + "__body";
const cardFooterButtons = box + "__footer-buttons";

function SocialCard() {

    return (
        <div className={card}>
            <hr />
            <div className={box}>
                <div className={header}>
                    <CircleCaption backgroundColor="black" textColor="white" caption="DEV"/>
                </div>
                <div className={cardBody}>
                    <CardCaption />
                    <ImageWithRibbon />
                    <SocialCardFooter />
                    <div className={cardFooterButtons}>
                        <InteractionButtons />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default SocialCard;