import React from "react";
import { useParams } from "react-router-dom";
import { loadTopics, topicsData } from "../../redux/slice/topicsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { TopicCard } from "./TopicCard";
import { Loader } from "../common/Loader";
import { Error } from "../common/Error";
import { NoData } from "../common/NoData";

import { topic } from "./../../types.d/common.types.d";

type TtopicParam = {
  categoryId: string;
};

export const TopicList: React.FC = () => {
  const { topicList, loading, error } = useAppSelector(topicsData);

  const dispatch = useAppDispatch();

  const { categoryId } = useParams() as TtopicParam;

  React.useEffect(() => {
    dispatch(loadTopics(categoryId));
  }, [categoryId, dispatch]);

  if (loading.status) return <Loader loading={loading} />;
  if (error.status) return <Error error={error} />;
  if (topicList.length <= 0) return <NoData />;

  return (
    <div className="row">
      <ol className="list-group ">
        {topicList.map((topic: topic) => (
          <TopicCard key={topic.tid} topic={topic} />
        ))}
      </ol>
    </div>
  );
};
