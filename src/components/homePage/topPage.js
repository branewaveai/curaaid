// File: TopPage.js
import React from 'react';
import styled from 'styled-components';
import CoverImage2 from "../../assets/icons/CoverImage2.png";
import coverImage1 from "../../assets/icons/coverImage1.png";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Equal width columns */
  max-width: 100%;
  margin: 0;
`;

const BlockContainer = styled.div`
  margin: 10px; /* Add margin to create space around the blocks */
`;

const ImageBlock = styled(BlockContainer)`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid #ddd;
  border-radius: 15px; /* Optional: Add border-radius for a rounded appearance */
  margin-right: 40px; /* Add margin-bottom for spacing */
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%; /* Ensure the image takes up the entire space */
  object-fit: cover;
  border-radius: 20px; /* Optional: Add border-radius for a rounded appearance */
  &.img {
    /* Add specific styles for the img element */
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  // border: 1px solid #ddd;
  border-radius: 15px; /* Optional: Add border-radius for a rounded appearance */
  margin-bottom: 20px; /* Add margin-bottom for spacing */
`;

const Block = styled(BlockContainer)`
  width: 50%; /* Equal width columns */
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left :20px;
  
  // border: 1px solid red;
  border-radius: 15px; /* Optional: Add border-radius for a rounded appearance */
`;

const Block1 = styled(Block)`
  height: 320px; /* Adjust the height of Block1 */
  // border: 1px solid red;
  width:95%;
`;

const ImageCover = styled(BlockContainer)`
  width: 95%;
  height: 280px; /* Adjust the height of the cover image */
  // border: 1px solid #bbb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:20px;
  margin-top:40px;
  border-radius: 15px; /* Optional: Add border-radius for a rounded appearance */
`;

const TopPage = () => {
  return (
    <Wrapper>
      <ImageBlock>
        <ImageContent src={coverImage1} alt="Image" className="img" />
      </ImageBlock>
      <FlexContainer>
        <Block>Random Text</Block>
        <Block>Random Text</Block>
      </FlexContainer>
      <Block1>Random Text</Block1>
      <ImageCover>
      <ImageContent src={CoverImage2} alt="Image" className="img" />
      </ImageCover>
    </Wrapper>
  );
};

export default TopPage;
