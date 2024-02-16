import Paper from "@mui/material/Paper";
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
  // border: 2px solid #ddd;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  height: 600px;
  // position: relative;
  margin: 0;
  @media (max-width: 768px) {
    height: 1200px;
    grid-template-columns: 1fr;
  }
`;
// const BlockContainer = styled.div`
//   margin: 5px;
// `;

const BlockContainer = styled.div`
  // border: 2px solid #ddd;
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
  height: 250px;
  display: flex;
  // border: 1px solid #ddd;
  border: 2px solid #ddd;
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
  // border: 2px solid #ddd;
  justify-content: normal;
  height: 300px;
  border-radius: 10px;
  margin-left: 10px;
  // margin-bottom: 20px;
  @media (max-width: 768px) {
    height: 360px;
  }
`;

const Block = styled.div`
  border: 2px solid #ddd;
  width: 50%; /* Set the width to 50% */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: normal;
  border-radius: 5px;
  background-color: #10d6d6;
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
  max-width: 98%; /* Adjust the maximum width as needed */
  height: 48%;
  display: flex;
  align-items: center;
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
  height: 70%;
  // display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  // margin-top: 10px;
  border: 2px solid #ddd;
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
  // border: 1px solid #ddd;
  fontsize: 1rem;
  width: 97%;
  height: 55%;
  border-radius: 5px;
  display: flex;
  justify-content: normal;
`;
const QuarterBlock = styled(BlockContainer)`
  flex: 1;
  width: 100%;
  height: 125px;
  // border: 2px solid #ddd;
  margin-bottom: 0px;
  margin-top: 0px;
  border-radius: 5px;
  // transform: translateX(-50%);
  justify-content: center; /* horizontally center */
  align-items: center; /* vertically center */
`;

const TopPage = () => {
  return (
    <Wrapper>
      <ImageBlock>
        <ImageContent src={coverImage1} alt="Image" className="img" />
      </ImageBlock>
      <FlexContainer>
        <Block>
          Another BlockLorem ipsum dolor sit amet, consectetur adipiscing
          elit.Sed vitae mauris nec ligula tempus condimentum.Fusce suscipit
          libero ac ligula vulputate, vitae Random Text Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Sed vitae mauris nec ligula tempus
          condimentum.Fusce suscipit libero ac ligula vulputate, vitae Random
          Text Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed vitae
          mauris nec ligula Random Text Lorem ipsum dolor sit amet,{" "}
        </Block>{" "}
        <div style={{ flex: 1 }}>
          <HalfBlock>
            <Paper elevation={3} style={{ height: "100%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed vitae
              mauris nec ligula tempus condimentum.Fusce suscipit libero ac
              ligula vulputate, vitae{" "}
            </Paper>{" "}
          </HalfBlock>
          <HalfBlock>
            <Paper elevation={3} style={{ height: "100%" }}>
              {" "}
              Random Text Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.Sed vitae mauris nec ligula tempus condimentum.Fusce suscipit
              libero ac ligula vulputate, vitae{" "}
            </Paper>{" "}
          </HalfBlock>{" "}
        </div>{" "}
      </FlexContainer>{" "}
      <BlockContainer
        style={{
          marginTop: "-30px",
          height: "320px",
        }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flex: 1,
                margin: "0px 0",
                height: "100px",
              }}
            >
              <Paper elevation={3} style={{ width: "45%", margin: "5px" }}>
                <QuarterBlock>
                  <IconLink
                    href="https://www.linkedin.com/company/curaaid/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconContainer>
                      <FaLinkedin size={50} color="#0077B5" />
                    </IconContainer>{" "}
                  </IconLink>{" "}
                </QuarterBlock>{" "}
              </Paper>{" "}
              <Paper elevation={3} style={{ width: "45%", margin: "5px" }}>
                <QuarterBlock>
                  <IconLink href="https://www.linkedin.com/company/curaaid/">
                    <IconContainer>
                      <FaInstagram size={50} color="#ED2285" />
                    </IconContainer>{" "}
                  </IconLink>{" "}
                </QuarterBlock>{" "}
              </Paper>
            </div>{" "}
            <Paper
              elevation={3}
              style={{
                width: "95%",
                height: "50%",
                fontFamily: "Roboto Slab, serif",
                fontSize: "0.9rem",
              }}
            >
              <Block1>
                <span
                  style={{
                    fontSize: "1.3rem",
                    textAlign: "left",
                    marginBottom: "5px",
                  }}
                >
                  {" "}
                  Video Testomonials{" "}
                </span>
                Random Text Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.Sed vitae mauris nec ligula tempus condimentum.{" "}
              </Block1>{" "}
            </Paper>
          </div>{" "}
          <Block
            style={{
              flex: 1,
              fontSize: 12,
              fontFamily: "'Roboto Slab', serif",
              backgroundColor: "#09CE6C",
            }}
          >
            Another Block Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Sed vitae mauris nec ligula tempus condimentum.Fusce suscipit
            libero ac ligula vulputate, vitae{" "}
          </Block>{" "}
        </div>{" "}
      </BlockContainer>{" "}
      <ImageCover style={{ marginTop: "10px", height: "280px" }}>
        <ImageContent src={CoverImage2} alt="Image" className="img" />
      </ImageCover>{" "}
    </Wrapper>
  );
};

export default TopPage;
