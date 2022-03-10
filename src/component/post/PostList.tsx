import React from "react";
import { useParams } from "react-router-dom";
import { loadPosts, postsData } from "../../redux/slice/postsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { Loader } from "../common/Loader";
import { Error } from "../common/Error";
import { NoData } from "../common/NoData";
import { PostCard } from "./PostCard";

import { post } from "./../../types.d/common.types.d";

type TPostParam = {
  topicId: string;
};

export const PostList: React.FC = () => {
  const { postList, loading, error } = useAppSelector(postsData);

  const dispatch = useAppDispatch();

  let { topicId } = useParams() as TPostParam;

  React.useEffect(() => {
    dispatch(loadPosts(topicId));
  }, [topicId, dispatch]);

  if (loading.status) return <Loader loading={loading} />;
  if (error.status) return <Error error={error} />;
  if (postList.length <= 0) return <NoData />;

  return (
    <div className="row">
      {postList.map((post: post) => (
        <PostCard key={post.pid} post={post} />
      ))}
    </div>
  );
};
