import axios from "axios";
import allActions from ".";
import * as actionsType from "../action-types";

const topicList = (data) => ({
  type: actionsType.TOPIC_LIST,
  topicList: data.topicList,
  articleList: data.articleList,
  recommandList: data.recommandList,
});

export const getTopicList = () => {
  return (dispatch) => {
    axios
      .get("/api/home.json")
      .then((res) => {
        let data = res.data.data;
        dispatch(topicList(data));
      })
      .catch((err) => {
        console.log("err=====>", err);
      });
  };
};

export const getMoreList = (page) => {
  console.log(111);
  return (dispatch) => {
    axios.get("/api/loadMore.json?page=" + page).then((res) => {
      let data = res.data.loadMore;
      console.log("data==>", data);
      dispatch({
        type: actionsType.MORE_LIST,
        data,
        page: page + 1,
      });
    });
  };
};

export const backTop = (show) => ({
  type: actionsType.SRCOLL_TOP,
  show,
});
