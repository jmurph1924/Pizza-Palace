import React, { useState } from "react";
import { Button } from '../ButtonElements2'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';

const types = ["Extra Large", "Large", "Medium", "Small"];

function ToggleGroup() {
  const [active, setActive] = useState();
  return (
    <BtnWrap>
      {types.map((type) => (
        <Button active={active === type} onClick={() => setActive(type)}>
          {type}
        </Button>
      ))}
    </BtnWrap>
  );
}

const InfoSection = ({lightBg, id, imgStart, lightText, headline, darkText, description, buttonLabel1, buttonLabel2, buttonLabel3, buttonLabel4, alt, img, primary, dark, dark2, toggle }) => {
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
