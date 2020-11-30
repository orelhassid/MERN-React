import React, { useContext } from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import { PostsContext } from "../../contexts/PostsContext";
import Post from "./Post/Post";

function Posts() {
  const { posts } = useContext(PostsContext);

  return (
    <div>
      <Typography variant="h3">Posts</Typography>
      <Grid container spacing={2} alignItems="center">
        {posts.map((post) => (
          <Grow key={post._id} in>
            <Grid item>
              <Post post={post} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;
