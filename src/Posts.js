import React , { useState }  from "react";
import { Link, useLocation } from "react-router-dom";

const Posts = (props) => {

  const location1 = useLocation();
  const data1 = location1.state;
  console.log(data1);

  const [showDetails, setShowDetails] = useState(false);

  const showDetailsHandler = () => {
    setShowDetails(true)
  }

  const hideDetailsHandler = () => {
    setShowDetails(false)
  }

  return (
    <div>
      {props.posts.map((p) => {
      
          let postDate = new Date(p.publishDate).toLocaleDateString();
          let postTime = new Date(p.publishDate).toLocaleTimeString();
        

        return (
          <div className="post">
          
            
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
              <div >
                <p>
                  {p.owner.firstName} {p.owner.lastName}
                </p>
                <img src={p.image} alt="" />
                
                
              </div>
           
              </Link>
              {!showDetails && <button className="detail-btn" onClick={showDetailsHandler}>show details</button>}

             {showDetails && <div className="right">
              <p>{postDate + " " + postTime}</p>
                <p> likes {p.likes}</p>
                <div>
                  {p.tags.map((t) => {
                    return <button>{t}</button>;
                  })}
                </div>
                <p>{p.text}</p>
                <button className="detail-btn" onClick={hideDetailsHandler}>hide details</button>
              </div>
           
           
                }
            
           
         
          </div>
        );
      })}
      
       {data1 ? (  <div className="post">
              <div className="left">
                <p>
                  {data1.name} {data1.lastName}
                </p>
                <img src={data1.image} alt="" />
              </div>
              <div className="right">
                <p>{data1.date.toLocaleDateString() + ' ' + data1.date.toLocaleTimeString()}</p>
              <p>{data1.name + " " + data1.name}</p>
                <p> likes {data1.name}</p>
                <div>
                  {/*data1.map((t) => {
                    return <button>{t}</button>;
                  })*/}
                </div>
                <p>{data1.comment}</p>
              </div>
            </div>) : "" }
    </div>
  );
};

export default Posts;
