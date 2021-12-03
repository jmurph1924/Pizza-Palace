import React, {useState} from 'react'
import { Button } from '../ButtonElements2'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, BtnWrap, ImgWrap, Img, Subtitle } from './BeveragesElements';

const BeveragesSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,
   buttonLabel1, buttonLabel2, buttonLabel3, buttonLabel4, buttonLabel5, buttonLabel6, buttonLabel7,
  alt, img, primary, dark, dark2, description }) => {

    const [coke, setCoke] = useState("");
    const [drpepper, setDrpepper] = useState("");
    const [sevenup, setSevenup] = useState("");
    const [bargs, setBargs] = useState("");
    const [Sweettea, setSweettea] = useState("");
    const [Diettea, setDiettea] = useState("");
    const [Water, setWater] = useState("");

    const toggleCoke = () => {
      setCoke(coke === "" ? "active" : "");
    }
    const toggleDrpepper = () => {
      setDrpepper(drpepper === "" ? "active" : ""); 
    }
    const toggleSevenup = () => {
      setSevenup(sevenup === "" ? "active" : ""); 
    }
    const toggleBargs = () => {
      setBargs(bargs === "" ? "active" : "");
    }
    const toggleSweettea = () => {
      setSweettea(Sweettea === "" ? "active" : ""); 
    }
    const toggleDiettea = () => {
      setDiettea(Diettea === "" ? "active" : ""); 
    }
    const toggleWater = () => {
      setWater(Water === "" ? "active" : ""); 
    }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button onClick={toggleCoke} className={`${coke}`}>
                    Coke
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleDrpepper} className={`${drpepper}`}>
                    Dr Pepper
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleSevenup} className={`${sevenup}`}>
                    Seven Up
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleBargs} className={`${bargs}`}>
                    Bargs
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleSweettea} className={`${Sweettea}`}>
                    Sweet Tea
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleDiettea} className={`${Diettea}`}>
                    Diet tea
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleWater} className={`${Water}`}>
                    Water
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

export default BeveragesSection
