import React, {useState, useCallback} from 'react'
import { Button } from '../ButtonElements2'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, BtnWrap, ImgWrap, Img, Subtitle} from './ToppingsElements';
import * as Realm from "realm-web";

const ToppingsSection = ({lightBg, id, imgStart, lightText, headline, 
  alt, img, darkText, description}) => {

    const [Pepperoni, setPepperoni] = useState("");
    const [sausage, setSausage] = useState("");
    const [chicken, setChicken] = useState("");
    const [peppers, setPeppers] = useState("");
    const [blackolives, setBlackOlives] = useState("");
    const [garlic, setGarlic] = useState("");
    const [onions, setOnions] = useState("");
    const [tomatoes, setTomatoes] = useState("");
    const [Pepperoni1, setPepperoni1] = useState("");
    const [sausage1, setSausage1] = useState("");
    const [chicken1, setChicken1] = useState("");
    const [peppers1, setPeppers1] = useState("");
    const [blackolives1, setBlackOlives1] = useState("");
    const [garlic1, setGarlic1] = useState("");
    const [onions1, setOnions1] = useState("");
    const [tomatoes1, setTomatoes1] = useState("");
    const [checker, setChecker] = useState(1);
    const [isSending, setIsSending] = useState(false)

    const toggleAccordion = () => {
      if(checker <= 4)
      {
        setPepperoni(Pepperoni ===  "" ? "active" : "");
        setPepperoni1(Pepperoni1 === "" ? "Pepperoni" : "");
        if(Pepperoni === "")
        {
          setChecker(checker + 1)
        }
        else
        {
          setChecker(checker - 1)
        }
      }
      if(checker >= 5 && Pepperoni === "active")
      {
        setPepperoni(Pepperoni ===  "" ? "active" : "");
        setPepperoni1(Pepperoni1 === "" ? "Pepperoni" : "");
        setChecker(checker - 1)
      }
    }
    const toggleSausage = () => {
      if(checker <= 4)
      {
        setSausage(sausage ===  "" ? "active" : "");
        setSausage1(sausage1 === "" ? "Sausage" : "");
        if(sausage === "")
        {
          setChecker(checker + 1)
        }
        else
        {
          setChecker(checker - 1)
        }
      }
      if(checker >= 5 && sausage === "active")
      {
        setSausage(sausage ===  "" ? "active" : "");
        setSausage1(sausage1 === "" ? "Sausage" : "");
        setChecker(checker - 1)
      }
    }
    const toggleChicken = () => {
      if(checker <= 4)
      {
        setChicken(chicken ===  "" ? "active" : "");
        setChicken1(chicken1 === "" ? "Chicken" : "");
        if(chicken === "")
        {
          setChecker(checker + 1)
        }
        else
        {
          setChecker(checker - 1)
        }
      }
      if(checker >= 5 && chicken === "active")
      {
        setChicken(chicken ===  "" ? "active" : "");
        setChicken1(chicken1 === "" ? "Chicken" : "");
        setChecker(checker - 1)
      }
    }
    const togglePeppers = () => {
      if(checker <= 4)
      {
        setPeppers(peppers ===  "" ? "active" : "");
        setPeppers1(peppers1 ===  "" ? "Peppers" : "");
        if(peppers === "")
        {
          setChecker(checker + 1)
        }
        else
        {
          setChecker(checker - 1)
        }
      }
      if(checker >= 5 && peppers === "active")
      {
        setPeppers(peppers ===  "" ? "active" : "");
        setPeppers1(peppers1 ===  "" ? "Peppers" : "");
        setChecker(checker - 1)
      }
    }
    const toggleBlackOlives = () => {
      if(checker <= 4)
      {
        setBlackOlives(blackolives ===  "" ? "active" : "");
        setBlackOlives1(blackolives1 ===  "" ? "Black Olives" : "");
        if(blackolives === "")
        {
          setChecker(checker + 1)
        }
        else
        {
          setChecker(checker - 1)
        }
      }
      if(checker >= 5 && blackolives === "active")
      {
        setBlackOlives(blackolives ===  "" ? "active" : "");
        setBlackOlives1(blackolives1 ===  "" ? "Black Olives" : "");
        setChecker(checker - 1)
      }
    }
    const toggleGarlic = () => {
      if(checker <= 4)
      {
        setGarlic(garlic ===  "" ? "active" : "");
        setGarlic1(garlic1 ===  "" ? "Garlic" : "");
        if(garlic === "")
        {
          setChecker(checker + 1)
        }
        else
        {
          setChecker(checker - 1)
        }
      }
      if(checker >= 5 && garlic === "active")
      {
        setGarlic(garlic ===  "" ? "active" : "");
        setGarlic1(garlic1 ===  "" ? "Garlic" : "");
        setChecker(checker - 1)
      }
    }
    const toggleOnions = () => {
      if(checker <= 4)
      {
        setOnions(onions ===  "" ? "active" : "");
        setOnions1(onions1 ===  "" ? "Onions" : "");
        if(onions === "")
        {
          setChecker(checker + 1)
        }
        else
        {
          setChecker(checker - 1)
        }
      }
      if(checker >= 5 && onions === "active")
      {
        setOnions(onions ===  "" ? "active" : "");
        setOnions1(onions1 ===  "" ? "Onions" : "");
        setChecker(checker - 1)
      }
    }
    const toggleTomatoes = () => {
      if(checker <= 4)
      {
        setTomatoes(tomatoes ===  "" ? "active" : "");
        setTomatoes1(tomatoes1 ===  "" ? "Diced Tomatoes" : "");
        if(tomatoes === "active")
        {
          setChecker(checker + 1)
        }
        else
        {
          setChecker(checker - 1)
        }
      }
      if(checker >= 5 && tomatoes === "active")
      {
        setTomatoes(tomatoes ===  "" ? "active" : "");
        setTomatoes1(tomatoes1 ===  "" ? "Diced Tomatoes" : "");
        setChecker(checker - 1)
      }
    }

    const sendInfo = useCallback(async () => {
      // don't send again while we are sending
      if (isSending) return
      // update state
      setIsSending(true)
      // send the actual request
      const app = new Realm.App({id: "pizzapalace-hyock"});
      const credentials = Realm.Credentials.anonymous();
    
      const user = await app.logIn(credentials);
      await user.functions.ToppingsCreator(Pepperoni1,sausage1,chicken1,peppers1,blackolives1,garlic1,onions1,tomatoes1);
      
      // once the request is sent, update state again
      setIsSending(false)
    }, [Pepperoni1,sausage1,chicken1,peppers1,blackolives1,garlic1,onions1,tomatoes1, isSending])

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
                  <Button onClick={toggleAccordion} className={`${Pepperoni}`}>
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
                <BtnWrap>
                  <Button onClick={sendInfo}> Click To Save </Button>
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