import React, { Component } from "react";
import { connect } from "react-redux";
import { TopicItem } from "../style";

const mapStateToProps = (state) => ({
  topicList: state.home.topicList,
});

class Topic extends Component {
  render() {
    let { topicList } = this.props;
    return (
      <>
        {topicList.map((item) => {
          return (
            <TopicItem key={item.id}>
              <img
                src={item.src_1x}
                srcSet={`${item.src_2x} 2x, ${item.src_3x} 3x`}
                alt=""
              />
              {item.title}
            </TopicItem>
          );
        })}
      </>
    );
  }
}

export default connect(mapStateToProps, null)(Topic);
