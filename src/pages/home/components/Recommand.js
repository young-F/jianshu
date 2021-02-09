import React, { Component } from "react";
import { RecommandWrapper, RecommandItem } from "../style";
export default class Recommand extends Component {
  render() {
    return (
      <RecommandWrapper>
        <RecommandItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"></RecommandItem>
        <RecommandItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"></RecommandItem>
        <RecommandItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"></RecommandItem>
        <RecommandItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"></RecommandItem>
      </RecommandWrapper>
    );
  }
}
