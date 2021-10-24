import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Post.css";

const Post = () => {
  const location = useLocation();
  const data = location.state;

  const [post, setPost] = useState();

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: {
          "app-id": "616e75e6a7d1af79dadb9732",
        },
      })
      .then((result) => {
        setPost(
          result.data.data.map((item) => {
            return item;
          })
        );
      });
  }, []);

  return (
    <div className="single-post">
      <div className="single-post-left">
        <p>
          {data.firstName} {data.lastName}
        </p>
        <img src={data.img} alt="" />
      </div>

      <div className="single-post-right">
      <p>{data.date + " " + data.time}</p>
        <p> likes: {data.likes}</p>
        <div>
          {data.tags.map((t) => {
            return <button className="tag_button">{t}</button>;
          })}
        </div>
        <p>{data.comment}</p>
        <form>
          <textarea placeholder="add comment" rows="4" cols="50" />
        </form>
      </div>
    </div>
  );
};

export default Post;
