import React from "react";
import { Link } from "react-router-dom";

const Posts = (props) => {
  return (
    <div>
      {props.posts.map((p) => {
      
          let postDate = new Date(p.publishDate).toLocaleDateString();
          let postTime = new Date(p.publishDate).toLocaleTimeString();
        

        return (
          <Link
            to={{
              pathname: `id/${p.id}`,
              state: {
                id: p.id,
                firstName: p.owner.firstName,
                lastName: p.owner.lastName,
                img: p.image,
                date: postDate,
                time: postTime,
                likes: p.likes,
                tags: p.tags,
                comment: p.text
              },
            }}
          >
            <div className="post">
              <div className="left">
                <p>
                  {p.owner.firstName} {p.owner.lastName}
                </p>
                <p>{postDate + " " + postTime}</p>
                <img src={p.image} alt="" />
              </div>
              <div className="right">
                <p> likes {p.likes}</p>
                <div>
                  {p.tags.map((t) => {
                    return <button>{t}</button>;
                  })}
                </div>
                <p>{p.text}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;
