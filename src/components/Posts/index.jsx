import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Spinner } from "../Spinner";
import { getPostsFetch } from "../../api";
import { Post } from "./Post";
import { EmptyWall } from "./EmptyWall/index";

export const Posts = ({ username }) => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["getPosts"] });
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["getPosts"],
    queryFn: async () => {
      const res = await getPostsFetch();
      if (res.ok) {
        const responce = await res.json();
        return responce;
      }
    },
  });

  if (isError) return <>{error}</>;
  //const myPosts = data && data.filter((el) => el.user === username);

  return (
    <>
      {data ? (
        data.length ? (
          data.map((post) => (
            <Post
              key={post.id}
              content={post.content}
              likes={post.total_likes}
              id={post.id}
              isLike={post.is_fan}
              user={post.user}
              time={post.timestamp}
            />
          ))
        ) : (
          <EmptyWall />
        )
      ) : isLoading ? (
        <Spinner />
      ) : (
        <EmptyWall />
      )}
    </>
  );
};
