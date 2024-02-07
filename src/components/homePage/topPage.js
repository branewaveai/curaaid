import React from "react";
import styled from "styled-components";
import CoverImage2 from "../../assets/icons/CoverImage2.png";
import coverImage1 from "../../assets/icons/coverImage1.png";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
// const BlockContainer = styled.div`
//   margin: 5px;
// `;

const BlockContainer = styled.div`
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
const ImageBlock = styled(BlockContainer)`
  width: 100%;
  height: 50%px;
  display: flex;
  border: 1px solid #ddd;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  border-radius: 5px;
  // margin-right: 400px;
  @media (max-width: 768px) {
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
  justify-content: normal;
  height: 50%px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Block = styled(BlockContainer)`
  border: 1px solid #ddd;
  width: 50%; /* Set the width to 50% */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: normal;
  border-radius: 5px;
  margin-left: 15px;
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

const ImageCover = styled(BlockContainer)`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-top: 50px;
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
  border: 1px solid #ddd;
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
        <Block>Another Block</Block>
        <div style={{ flex: 1 }}>
          <HalfBlock>Random Text</HalfBlock>
          <HalfBlock>Random Text</HalfBlock>
        </div>
      </FlexContainer>
      <BlockContainer
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ display: "flex",flex:1, margin: "0px 0" ,height:"170px"}}>
              <QuarterBlock>Random Text</QuarterBlock>
              <QuarterBlock>Random Text</QuarterBlock>
            </div>
            <Block1>Random Text</Block1>
          </div>
          <Block style={{ flex: 1 }}>Another Block</Block>
        </div>
      </BlockContainer>
      <ImageCover>
        <ImageContent src={CoverImage2} alt="Image" className="img" />
      </ImageCover>
    </Wrapper>
  );
};

export default TopPage;
