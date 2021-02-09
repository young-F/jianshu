import * as actionTypes from "../action-types";
const defaultState = {
  topicList: [],
  articleList: [],
  recommandList: [
    {
      id: 1,
      href: "mobile/campaign/day_by_day/join?from=home",
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png",
    },
    {
      id: 2,
      href: "mobile/club",
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
    },
    {
      id: 3,
      href: "mobile/books?category_id=284",
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
    },
    {
      id: 4,
      href: "mobile/publications",
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
    },
  ],
  pageMore: 1,
  isBackTop: false,
};

function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.TOPIC_LIST:
      state.topicList = action.topicList;
      state.articleList = action.articleList;
      state.recommandList = action.recommandList;
      break;
    case actionTypes.MORE_LIST:
      state.articleList = state.articleList.concat(action.data);
      state.pageMore = action.page;
      break;
    case actionTypes.SRCOLL_TOP:
      state.isBackTop = action.show;
      break;
    default:
  }
  return state;
}

export default homeReducer;
