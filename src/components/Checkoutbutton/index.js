import React, {useState, useEffect, useCallback} from 'react'
import { Button } from '../ButtonElements4'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, BtnWrap, ImgWrap, Img } from './Checkoutbutton';
import { animateScroll as scroll } from 'react-scroll';
import * as Realm from "realm-web";

const Checkoutbutton = ({lightBg, id, imgStart, buttonLabel1, alt, img, primary, dark, dark2, toggle}) => {

  const [size, setSize] = useState([]);
  const [crust, setCrust] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [beverages, setBeverage] = useState([]);
  const [isSending, setIsSending] = useState(false)

  const sendInfo = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setIsSending(true)
    // send the actual request
    const app = new Realm.App({id: "pizzapalace-hyock"});
    const credentials = Realm.Credentials.anonymous();
  
    const user = await app.logIn(credentials);
    const thingy = await user.functions.SizeSetter();
    setSize(() => [thingy])
    const thingy2 = await user.functions.CrustSetter();
    setCrust(() => [thingy2])
    const thingy3 = await user.functions.SaucesSetter();
    setSauces(() => [thingy3])
    const thingy4 = await user.functions.ToppingsSetter();
    setToppings(() => [thingy4])
    const thingy5 = await user.functions.BeveragesSetter();
    setBeverage(() => [thingy5])
    // once the request is sent, update state again
    setIsSending(false)
  }, [size, crust, sauces, toppings, beverages, isSending])
  

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