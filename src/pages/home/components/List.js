import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import allActions from "../../../store/actions";
import {
  ArticleList,
  ArticleItem,
  ImgWrapper,
  ArticleItemContent,
  // ArticleItemTitle,
  ArticleItemAbstract,
  ArticleItemMeta,
  ArticleItemIconSpan,
  ArticleItemIconA,
  LoadMore,
} from "../style";

const mapStateToProps = (state) => ({
  articleList: state.home.articleList,
  pageMore: state.home.pageMore,
});

const mapDispatchToProps = (dispatch) => ({
  getMore(page) {
    dispatch(allActions.home.getMoreList(page));
  },
});

class List extends Component {
  render() {
    let { articleList, getMore, pageMore } = this.props;
    return (
      <ArticleList>
        {articleList &&
          articleList.map((item) => {
            return (
              <ArticleItem key={item.id}>
                <ImgWrapper
                  className="wrap-img"
                  href="/p/9ee83c58af2a"
                  target="_blank"
                >
                  <img className="img-blur-done" src={item.imgUrl} alt="120" />
                </ImgWrapper>
                <ArticleItemContent className="content">
                  <Link className="title" to="/detail">
                    {item.title}
                  </Link>
                  <ArticleItemAbstract className="abstract">
                    {item.desc}
                  </ArticleItemAbstract>
                  <ArticleItemMeta className="meta">
                    <ArticleItemIconSpan className="jsd-meta">
                      <i className="iconfont">&#xe63d;</i> {item.diamonds}
                    </ArticleItemIconSpan>
                    <ArticleItemIconA
                      className="nickname"
                      target="_blank"
                      href="/u/934eb3c67246"
                    >
                      {item.auth}
                    </ArticleItemIconA>
                    <ArticleItemIconA
                      target="_blank"
                      href="/p/9ee83c58af2a#comments"
                    >
                      <i className="iconfont">&#xe620;</i> {item.commen}
                    </ArticleItemIconA>
                    <ArticleItemIconSpan>
                      <i className="iconfont">&#xe613;</i> {item.collection}
                    </ArticleItemIconSpan>
                  </ArticleItemMeta>
                </ArticleItemContent>
              </ArticleItem>
            );
          })}
        <LoadMore onClick={() => getMore(pageMore)}>加载更多</LoadMore>
      </ArticleList>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
