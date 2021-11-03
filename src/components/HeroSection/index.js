import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const [hover2, setHover2] = useState(false)

    const onHover2 = () => {
        setHover2(!hover2)
    }

    return (
        <HeroContainer id = 'buildpizza'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                   Italian Style Delicacies
                </HeroH1>
                <HeroP>
                    Login or Sign up for Rewards
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signin" onMouseEnter = {onHover} onMouseLeave = {onHover}>
                        Login {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button> 
                </HeroBtnWrapper>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter = {onHover2} onMouseLeave = {onHover2}>
                        Sign Up {hover2 ? <ArrowForward /> : <ArrowRight />}
                    </Button> 
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
