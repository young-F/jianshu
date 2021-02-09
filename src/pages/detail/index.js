import React, { Component } from "react";
import { connect } from "react-redux";
import { Content, DetailWrapper, Header } from "./style";

const mapStateToProps = (state) => ({
  title: state.detail.title,
  content: state.detail.content,
});

const mapDispatchToProps = (dispatch) => ({
  getDetailInfo() {
    dispatch();
  },
});

class Detail extends Component {
  render() {
    let { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
