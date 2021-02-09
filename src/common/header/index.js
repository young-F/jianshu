import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import * as actionTypes from "../../store/action-types";
import allActions from "../../store/actions";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";
//这里是为了解决react严格模式下会报错：Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode
// 解决：https://stackoverflow.com/questions/60903335/warning-finddomnode-is-deprecated-in-strictmode-finddomnode-was-passed-an-inst
const nodeRef = React.createRef(null);

// 将store中的state注入到组件的props中
const mapStateToProps = (state) => {
  return {
    isFocus: state.header.isFocus,
    searchInfoList: state.header.searchInfoList,
    page: state.header.page,
    mouseIn: state.header.mouseIn,
    totalPage: state.header.totalPage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // actionType: actions.header,
  handleInputFocus(data) {
    console.log("data", data.length);
    data.length === 0 && dispatch(allActions.header.getSearchList());
    dispatch(allActions.header.searchFocus());
  },
  handleInputBlur() {
    dispatch(allActions.header.searchBlur());
  },
  handleMouseEnter() {
    dispatch(allActions.header.mouseEnterShow());
  },
  handleMouseLeave() {
    dispatch(allActions.header.mouseLeaveHidden());
  },
  handleChangePage(page, totalPage, node) {
    console.log("node", node);
    let originAngle = node.style.transform.replace(/[^0-9]/gi, "");
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    node.style.setProperty("transform", `rotate((${originAngle}+360)deg)`);
    if (page < totalPage) {
      dispatch(allActions.header.changePage(page + 1));
    } else {
      dispatch(allActions.header.changePage(1));
    }
  },
});
class Header extends React.Component {
  myRef = React.createRef();

  getSearchInfoList = () => {
    let {
      isFocus,
      searchInfoList,
      page,
      handleMouseEnter,
      handleMouseLeave,
      mouseIn,
      handleChangePage,
      totalPage,
    } = this.props;
    const pageList = [];
    // i应该等于当前的page
    if (searchInfoList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={i}>{searchInfoList[i]}</SearchInfoItem>
        );
      }
    }

    return (
      (isFocus || mouseIn) && (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() =>
                handleChangePage(page, totalPage, this.myRef.current)
              }
            >
              <i ref={this.myRef} className="iconfont switch">
                &#xe65f;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {/* {searchInfoList.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })} */}
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    );
  };

  render() {
    let {
      isFocus,
      handleInputFocus,
      handleInputBlur,
      searchInfoList,
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              nodeRef={nodeRef}
              in={isFocus}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                ref={nodeRef}
                className={isFocus ? "focus" : ""}
                onFocus={() => handleInputFocus(searchInfoList)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span
              className={isFocus ? "iconfont search focus" : "iconfont search"}
            >
              &#xe69d;
            </span>
            <span>&#xe69d;</span>
            {this.getSearchInfoList()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe708;</span>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
