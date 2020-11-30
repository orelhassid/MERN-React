import { Container, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/layout";
import { PostsContext } from "../contexts/PostsContext";

function PostPage() {
  const params = useParams();
  const { posts } = useContext(PostsContext);

  const post = posts.find((post) => post._id === params.id);

  useEffect(() => {}, []);
  return (
    <Layout>
      {!post ? (
        "Loading..."
      ) : (
        <Container>
          <img src={post.file} width="100%" />
          <Typography variant="h2">{post.title}</Typography>
          <Typography variant="body1">{post.message}</Typography>
        </Container>
      )}
    </Layout>
  );
}

export default PostPage;
