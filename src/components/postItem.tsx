import { Link } from "gatsby";
import React, { useState, CSSProperties } from "react";
import styled, { css } from "styled-components";
import Color from "../constants/color";
import PostModel from "../model/PostModel";

interface Props {
  post: PostModel;
}

const PostItem = ({ post }: Props) => {
  const { title, path, date, subtitle } = post;
  const [over, setOver] = useState(false);

  return (
    <Container
      onMouseEnter={() => {
        setOver(true);
      }}
      onMouseLeave={() => {
        setOver(false);
      }}
    >
      <Link to={path} style={{ width: "100%", height: "100%" }}>
        <BorderBox color={over ? Color.blue : Color.white}>
          <ContentBox>
            <Title>{title}</Title>
            <SubtitleBox>
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </SubtitleBox>
            <MetaContainer>
              <DateText>{date}</DateText>
              <ReadMore>{over && <span>Read More</span>}</ReadMore>
            </MetaContainer>
          </ContentBox>
        </BorderBox>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 170px;
  border: 1px solid;
  padding: 10px;
  margin: 10px 0px 10px 0px;
  background-color: ${Color.white};
`;

const BorderBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 10px;
  ${(props) =>
    props.color &&
    css`
      border: 1px solid ${props.color};
    `}
`;
const ImgBox = styled.img`
  width: 130px;
  height: 130px;
  margin-right: 10px;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;
const Title = styled.h2`
  padding: 0;
  margin-bottom: 0;
  border-bottom-width: 0;
`;
const SubtitleBox = styled.div`
  flex-grow: auto;
`;
const Subtitle = styled.span`
  font-size: 16px;
  color: ${Color.gray75};
`;
const DateText = styled.span`
  color: ${Color.gray75};
  font-size: 13px;
`;
const MetaContainer = styled.div``;

const ReadMore = styled.div`
  height: 30px;
  float: right;
  color: ${Color.blue};
`;

export default PostItem;