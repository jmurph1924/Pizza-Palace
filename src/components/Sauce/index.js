import React, {useState, useCallback} from 'react'
import { Button } from '../ButtonElements2'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, BtnWrap, ImgWrap, Img, Subtitle } from './SauceElements';
import * as Realm from "realm-web";


const SauceSection = ({lightBg, id, imgStart, lightText, headline, alt, img, description, darkText}) => {

  const types = ["Marinara", "Alfredo", "Barbeque"];
  const [active, setActive] = useState();
  const [isSending, setIsSending] = useState(false)

function ToggleGroup() {
  return (
    <BtnWrap>
      {types.map((type) => (
        <Button active={active === type} onClick={() => {setActive(type); sendInfo()}}>
          {type}
        </Button>
      ))}
    </BtnWrap>
  );
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
  await user.functions.SaucesCreator(active);
  
  // once the request is sent, update state again
  setIsSending(false)
}, [active, isSending])

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <ToggleGroup />
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

export default SauceSection
