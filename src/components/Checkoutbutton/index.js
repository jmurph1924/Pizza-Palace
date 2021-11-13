import React from 'react'
import { Button } from '../ButtonElements4'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, BtnWrap, ImgWrap, Img } from './Checkoutbutton';
import { animateScroll as scroll } from 'react-scroll';

const Checkoutbutton = ({lightBg, id, imgStart, buttonLabel1, alt, img, primary, dark, dark2, toggle}) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <BtnWrap>
                  <Button to='/'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  onClick={toggleHome}
                  >{buttonLabel1}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Checkoutbutton