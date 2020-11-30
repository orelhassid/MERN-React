import React, { useEffect, useState, useContext } from "react";
import { Box, Button, Paper, TextField, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
// import { useDispatch, useSelector } from "react-redux";
import { PostsContext } from "../../contexts/PostsContext";
import { createPost, updatePost } from "../../actions/posts";
import defaultImage from "../../assets/images/defaultImage.js";
/**
 * Fields: [Title, Message, Creator, Tags, File]
 */
function CreatePostsForm() {
  const initData = {
    title: "",
    message: "",
    creator: "",
    tags: "",
    file: "",
  };
  const [data, setData] = useState(initData);
  const { dispatch } = useContext(PostsContext);

  const { title, message, creator, tags } = data;

  const handleSubmit = (event) => {
    event.preventDefault();

    formatData();
    dispatch(createPost(data));

    setData(initData);
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };
  const formatData = () => {
    let tags = data.tags.replace(/\s/g, "").split(",");
    tags = tags.filter((tag) => tag !== "");
    data.tags = tags;

    if (!data.file) {
      data.file = defaultImage;
    }
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6"></Typography>
        <TextField
          label="Title"
          name="title"
          value={title}
          onChange={handleChange}
          variant="filled"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Message"
          name="message"
          value={message}
          onChange={handleChange}
          variant="filled"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Creator"
          name="creator"
          value={creator}
          onChange={handleChange}
          variant="filled"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Tags"
          name="tags"
          value={tags}
          onChange={handleChange}
          variant="filled"
          margin="normal"
          fullWidth
        />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            handleChange({ currentTarget: { name: "file", value: base64 } })
          }
        />
        <Box textAlign="center">
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default CreatePostsForm;
