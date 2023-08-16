import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {

    const [postLists, setPostList] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch('https://localhost:44328/api/Blog/GetPost');
            const data = await response.json();
            console.log(data);
            setPostList(data);

        };
        getPosts();
    });

    const commentfn = () => {
        navigate("/comments");

    };
    return <div className="homePage"> 
    {
        postLists.map((post) => {
            return <div key={post.id} className="post">
            <div className="postHeader">
                <div className="title"> <h1> {post.title} </h1></div>

            </div>
            <div className="postBody">
            <div className="postTextContainer"> {post.body} </div>
            <div className="postAuthorContainer">
            <div className="postAuthor">By {post.postAuthor}  </div>
            <i class="far fa-comment-alt" onClick={commentfn} style={{ color: 'blue' , marginLeft: '30px', fontSize: '20px'}} ></i>
            </div>
            </div>
            </div>
                

            
             
        }

        )
        
    } 
    

    </div>;
}

export default Home;