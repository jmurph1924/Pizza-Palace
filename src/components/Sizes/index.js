import React, {useState, useCallback} from 'react'
import { Button } from '../ButtonElements2'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';
import * as Realm from "realm-web";


const InfoSection = ({lightBg, id, imgStart, lightText, headline, darkText, description, alt, img}) => {

  const types = ["Extra Large", "Large", "Medium", "Small"];
  const [active, setActive] = useState();
  const [isSending, setIsSending] = useState(false)

function activation(typer){
  setActive(typer)
  sendInfo()
}

function ToggleGroup() {
  
  return (
    <BtnWrap>
      {types.map((type) => (
        <Button active={active === type} onClick={() => activation(type)}>
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
    await user.functions.SizeCreator(active);
    
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

export default InfoSection
