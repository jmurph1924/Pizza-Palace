import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                   Italian Style Delicacies
                </HeroH1>
                <HeroP>
                    Sign in for Rewards
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signin" onMouseEnter = {onHover} onMouseLeave = {onHover}>
                        Login {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button> 
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
