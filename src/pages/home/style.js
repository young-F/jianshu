import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  margin-right: 15px;
  padding-top: 30px;
  width: 705px;
  float: left;
  .banner-img {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    max-width: 100%;
    height: auto;
    width: 100%;
    border-radius: 2px;
    object-fit: cover;
  }
`;

export const HomeRight = styled.div`
  padding-top: 30px;
  width: 240px;
  float: right;
`;

export const TopicWrapper = styled.div`
  margin-top: 15px;
  overflow: hidden;
`;

export const TopicItem = styled.div`
  padding-right: 4px;
  box-sizing: border-box;
  background-color: #ccc;
  border-radius: 3px;
  float: left;
  color: #333;
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  img {
    overflow: hidden;
    width: 30px;
    height: 30px;
    margin-right: 4px;
  }
`;

export const ArticleWrapper = styled.div`
  margin-top: 15px;
`;

export const ArticleList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ArticleItem = styled.li`
  position: relative;
  line-height: 20px;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
`;

export const ImgWrapper = styled.a`
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  &.wrap-img {
    width: 150px;
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
  }
`;

export const ArticleItemContent = styled.div`
  &.content {
    padding-right: 165px;
  }
`;

export const ArticleItemTitle = styled.a`
  &.title {
    color: #333;
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ArticleItemAbstract = styled.p`
  &.abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;
export const ArticleItemMeta = styled.div`
  &.meta {
    padding-right: 0 !important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    a {
      margin-right: 10px;
      color: #b4b4b4;
      &::hover {
        color: #787878;
      }
    }
    a,
    &:hover {
      transition: 0.1s ease-in;
    }
    span {
      margin-right: 10px;
      color: #b4b4b4;
    }
  }
`;

export const ArticleItemIconSpan = styled.span`
  &.jsd-meta {
    color: #ea6f5a !important;
  }
  .iconfont {
    font-size: 12px;
  }
`;

export const ArticleItemIconA = styled.a`
  text-decoration: none;
  .iconfont {
    font-size: 14px;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
`;
export const RecommandWrapper = styled.div`
  margin: 30px auto;
  width: 280px;
`;

export const RecommandItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const BackTop = styled.div`
  font-size: 14px;
  color: #666;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 4px;
  box-sizing: border-box;
  text-align: center;
  display: block;
  line-height: 20px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  transition: 0.1s ease-in;
`;
