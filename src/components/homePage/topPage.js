import React from 'react';
import styled from 'styled-components';
import CoverImage2 from "../../assets/icons/CoverImage2.png";
import coverImage1 from "../../assets/icons/coverImage1.png";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  max-width: 100%;
  margin: 0;
`;
const BlockContainer = styled.div`
  margin: 5px; 
`;

const ImageBlock = styled(BlockContainer)`
  width: 100%;
  height: 300px;
  display: flex;
  border: 1px solid #ddd;
  align-items: center;
  justify-content: center;
  margin-bottom:0px;
  border-radius: 10px; 
  // margin-right: 400px; 
`;
const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px; 
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: normal;
  height: 160px;
  border-radius: 15px; 
  margin-bottom: 20px; 
`;

const Block = styled(BlockContainer)`
  border: 1px solid #ddd;
  width: 50%;
  height: 330px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: normal; 
  border-radius: 15px; 
  margin-left:10px;
`;

const HalfBlock = styled(BlockContainer)`
  width: 300px;
  height: 160px;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  justify-content: center;
  border-radius: 15px; 
`;

const ImageCover = styled(BlockContainer)`
  width: 95%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-top: 50px;
  border-radius: 10px; 
`;
const Block1 = styled(BlockContainer)`
  border: 1px solid #ddd;
  width: 99%;
  height: 160px; 
  border-radius: 10px; 
  display: flex;
  justify-content: normal;
`;

const QuarterBlock = styled(BlockContainer)`
  width: 50%; 
  height: 140px;
  border: 1px solid #ddd;
  margin-bottom:0px;
  margin-top:0px;
  border-radius: 10px; 
`;

const TopPage = () => {
  return (
    <Wrapper>
      <ImageBlock>
        <ImageContent src={coverImage1} alt="Image" className="img" />
      </ImageBlock>

      <FlexContainer>
        <Block>Another Block</Block>
        <div>
          <HalfBlock>Random Text</HalfBlock>
          <HalfBlock>Random Text</HalfBlock>
        </div>
      </FlexContainer>
      <div>
      <div style={{display:'flex' , margin: '10px 0'}}>
        <QuarterBlock>Random Text</QuarterBlock>
        <QuarterBlock>Random Text</QuarterBlock>
      </div>
       <Block1>Random Text</Block1>
      </div>
      
      <ImageCover>
        <ImageContent src={CoverImage2} alt="Image" className="img" />
      </ImageCover>
    </Wrapper>
  );
};

export default TopPage;
