import React, {useState} from 'react'
import { Button } from '../ButtonElements2'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, BtnWrap, ImgWrap, Img, Subtitle} from './ToppingsElements';

const ToppingsSection = ({lightBg, id, imgStart, lightText, headline, 
  alt, img, darkText, description}) => {

    const [state, setState] = useState("");
    const [sausage, setSausage] = useState("");
    const [chicken, setChicken] = useState("");
    const [peppers, setPeppers] = useState("");
    const [blackolives, setBlackOlives] = useState("");
    const [garlic, setGarlic] = useState("");
    const [onions, setOnions] = useState("");
    const [tomatoes, setTomatoes] = useState("");

    const toggleAccordion = () => {
      setState(state === "" ? "active" : "");
    }
    const toggleSausage = () => {
      setSausage(sausage === "" ? "active" : ""); 
    }
    const toggleChicken = () => {
      setChicken(chicken === "" ? "active" : ""); 
    }
    const togglePeppers = () => {
      setPeppers(peppers === "" ? "active" : "");
    }
    const toggleBlackOlives = () => {
      setBlackOlives(blackolives === "" ? "active" : ""); 
    }
    const toggleGarlic = () => {
      setGarlic(garlic === "" ? "active" : ""); 
    }
    const toggleOnions = () => {
      setOnions(onions === "" ? "active" : ""); 
    }
    const toggleTomatoes = () => {
      setTomatoes(tomatoes === "" ? "active" : ""); 
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
                  <Button onClick={toggleAccordion} className={`${state}`}>
                    Pepperoni
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleSausage} className={`${sausage}`}>
                    Sausage
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleChicken} className={`${chicken}`}>
                    Chicken
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={togglePeppers} className={`${peppers}`}>
                    Peppers
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleBlackOlives} className={`${blackolives}`}>
                    Black Olives
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleGarlic} className={`${garlic}`}>
                    Garlic
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleOnions} className={`${onions}`}>
                    Onions
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={toggleTomatoes} className={`${tomatoes}`}>
                    Diced Tomatoes
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

export default ToppingsSection