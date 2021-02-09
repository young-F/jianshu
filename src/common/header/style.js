import styled from "styled-components";
import logoPic from "../../static/logo.png";
export const HeaderWrapper = styled.div`
    height:58px;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
}
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: none;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  outline: none;
  border-radius: 19px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focus {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 50px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  margin: 9px 15px 0 15px;

  .search {
    color: #969696;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    position: absolute;
    right: 22px;
    top: 4px;
  }
  .iconfont {
    &.focus {
      background: #9b9b9b;
      color: #fff;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 48px;
  width: 240px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  //   &::before {
  //     position: absolute;
  //     background-color: #fff;
  //     box-shadow: 0 0 8px rgb(0 0 0 / 20%);
  //     content: "";
  //     left: 27px;
  //     width: 10px;
  //     height: 10px;
  //     transform: rotate(45deg);
  //     -ms-transform: rotate(45deg);
  //     -webkit-transform: rotate(45deg);
  //     top: -5px;
  //     z-index: -1;
  //   }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

export const SearchInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #969696;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
`;

export const SearchInfoSwitch = styled.span`
  font-size: 12px;
  cursor: pointer;
  .switch {
    vertical-align: middle;
    font-size: 30px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  color: #787878;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #969696;
  border-radius: 3px;
`;
