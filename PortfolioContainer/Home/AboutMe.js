import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn

export default function AboutMe() {
    return (
        <div className='about-me-container screen-container'>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why choose me?'}/>
            </div>
        </div>
    );
}
