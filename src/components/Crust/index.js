import React, { useState } from "react";
import { Button } from '../ButtonElements2'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, BtnWrap, ImgWrap, Img, Subtitle} from './CrustElements';

const types = ["Regular", "Stuffed", "Gluten-Free", "Asiago"];

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

const CrustSection = ({lightBg, id, imgStart, lightText, headline, alt, img, darkText, description}) => {
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

export default CrustSection
