import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

import CoverImage2 from "../../assets/icons/CoverImage2.png";
import coverImage1 from "../../assets/icons/coverImage1.png";

const IconLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const IconContainer = styled.div`
  margin-right: 5px;
`;

const Wrapper = styled.div`
  display: grid;
  border: 1px solid red;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  height: 740px;
  // position: relative;
  margin: 0;
  @media (max-width: 768px) {
    height:1300px;
    grid-template-columns: 1fr;
  }
`;
// const BlockContainer = styled.div`
//   margin: 5px;
// `;

const BlockContainer = styled.div`
  border: 1px solid red;
  margin: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: stretch; /* Ensure children stretch to full width */
  justify-content: space-between; /* Distribute space evenly between children */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
// const ImageBlock = styled(BlockContainer)`
//   width: 100%;
//   height: 40%px;
//   display: flex;
//   border: 1px solid #ddd;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 0px;
//   border-radius: 5px;
//   // margin-right: 400px;
//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;
const ImageBlock = styled(BlockContainer)`
  width: 100%;
  height: 300px;
  display: flex;
  // border: 1px solid #ddd;
  border: 1px solid red;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  border-radius: 5px;
  @media (max-width: 768px) {
    height: 200px;
    grid-template-columns: 1fr;
  }
`;
const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

// const FlexContainer = styled.div`
//   display: flex;
//   justify-content: normal;
//   height: 160px;
//   border-radius: 10px;
//   margin-bottom: 20px;
// `;
const FlexContainer = styled.div`
  display: flex;
  border: 1px solid red;
  justify-content: normal;
  height: 360px;
  border-radius: 10px;
  margin-left: 10px;
  // margin-bottom: 20px;
  @media (max-width: 768px) {
    height: 360px;
  }
`;

const Block = styled.div`
  border: 1px solid #ddd;
  width: 50%; /* Set the width to 50% */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: normal;
  border-radius: 5px;
  background-color: #1c7ed6;
`;

// const Block = styled(BlockContainer)`
//   border: 1px solid #ddd;
//   width: 50%;
//   height: 330px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: normal;
//   border-radius: 5px;
//   margin-left: 15px;
// `;

const HalfBlock = styled(BlockContainer)`
  flex: 1;
  max-width: 100%; /* Adjust the maximum width as needed */
  height: 50%;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  justify-content: center;
  border-radius: 5px;
  margin-top: 10x;
`;

// const HalfBlock = styled(BlockContainer)`
//   width: 300px;
//   height: 160px;
//   display: flex;
//   align-items: center;
//   border: 1px solid #ddd;
//   justify-content: center;
//   border-radius: 5px;
// `;

const ImageCover = styled.div`
  width: 98%;
  height: 98px%;
  // display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  // margin-top: 10px;
  border: 1px solid red;
  border-radius: 5px;
`;

// const Block1 = styled(BlockContainer)`
//   border: 1px solid #ddd;
//   width: 98%;
//   height: 160px;
//   border-radius: 5px;
//   display: flex;
//   margin-top:0px;
//   justify-content: normal;
// `;
const Block1 = styled(BlockContainer)`
  border: 1px solid red;
  width: 98%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: normal;
`;
const QuarterBlock = styled(BlockContainer)`
  flex: 1;
  width: 100%;
  height: 160px;
  border: 1px solid #ddd;
  margin-bottom: 0px;
  margin-top: 0px;
  border-radius: 5px;
`;

const TopPage = () => {
  return (
    <Wrapper>
      <ImageBlock>
        <ImageContent src={coverImage1} alt="Image" className="img" />
      </ImageBlock>

      <FlexContainer>
        <Block>
          Another BlockLorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed vitae mauris nec ligula tempus condimentum. Fusce suscipit libero
          ac ligula vulputate, vitae Random Text Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed vitae mauris nec ligula tempus
          condimentum. Fusce suscipit libero ac ligula vulputate, vitae Random
          Text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vitae mauris nec ligula Random Text Lorem ipsum dolor sit amet,{" "}
        </Block>
        <div style={{ flex: 1 }}>
          <HalfBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            mauris nec ligula tempus condimentum. Fusce suscipit libero ac
            ligula vulputate, vitae
          </HalfBlock>
          <HalfBlock>
            Random Text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed vitae mauris nec ligula tempus condimentum. Fusce suscipit
            libero ac ligula vulputate, vitae
          </HalfBlock>
        </div>
      </FlexContainer>
      <BlockContainer
        style={{
          marginTop: "-50px",
          height: "420px",
        }}
      >
        <div style={{ display: "flex", flex: 1, height: "100px" }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flex: 1,
                margin: "10px 0",
                height: "170px",
              }}
            >
              <QuarterBlock>
              <IconLink href="https://www.linkedin.com/company/curaaid/" target="_blank" rel="noopener noreferrer">
              <IconContainer>
                <FaLinkedin size={24} />
              </IconContainer>
              LinkedIn
            </IconLink>
              </QuarterBlock>
              <QuarterBlock>
                <IconLink href="https://www.linkedin.com/company/curaaid/">
                  <IconContainer>
                    <FaInstagram size={24} />
                  </IconContainer>
                  Instagram
                </IconLink>
              </QuarterBlock>
            </div>
            <Block1>
              Random Text Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed vitae mauris nec ligula tempus condimentum. Fusce
              suscipit libero ac ligula vulputate,
            </Block1>
          </div>
          <Block style={{ flex: 1, fontSize:12, fontFamily: "'Roboto Slab', serif" , }}>
            Another Block Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed vitae mauris nec ligula tempus condimentum. Fusce suscipit
            libero ac ligula vulputate, vitae
          </Block>
        </div>
      </BlockContainer>
      <ImageCover>
        <ImageContent src={CoverImage2} alt="Image" className="img" />
      </ImageCover>
    </Wrapper>
  );
};

export default TopPage;
