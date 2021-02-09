import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  TopicWrapper,
  ArticleWrapper,
  BackTop,
} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommand from "./components/Recommand";
import Writer from "./components/Writer";
import allActions from "../../store/actions";

const mapStateToProps = (state) => ({
  show: state.home.isBackTop,
});

const mapDispatchToProps = (dispatch) => ({
  getTopicList() {
    dispatch(allActions.home.getTopicList());
  },
  backTop() {
    let top = document.documentElement.scrollTop;
    if (top > 100) {
      dispatch(allActions.home.backTop(true));
    } else {
      dispatch(allActions.home.backTop(false));
    }
  },
});

class Home extends Component {
  componentDidMount() {
    this.props.getTopicList();
    window.addEventListener("scroll", this.props.backTop);
  }

  componentWillUnmount() {
    window.removeEventListener("sroll", this.props.backTop);
  }

  handleScrollTop = () => {
    console.log("window", window);
    window.scrollTo(0, 0);
  };

  render() {
    let { show, backTop } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://pic4.zhimg.com/v2-fa4452d7471328225376713d497cee16.png"
            alt=""
          />
          <TopicWrapper>
            <Topic />
          </TopicWrapper>
          <ArticleWrapper>
            <List />
          </ArticleWrapper>
        </HomeLeft>
        <HomeRight>
          <Recommand />
          <Writer />
        </HomeRight>
        {show ? (
          <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
