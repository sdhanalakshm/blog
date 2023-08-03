import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function MyBlog() {

    const [postLists, setPostList] = useState([]);
    //const {userState, useContext} = useContext(user);
    let navigate = useNavigate();
    //const author = userState ? userState : auth.currentUser.displayName;
    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch('https://localhost:44328/api/Blog/GetPost');
            const data = await response.json();
            //console.log(data);
            setPostList(data.filter(user => user.postAuthor.toLowerCase() === localStorage.getItem("userName")));
            console.log(setPostList.postAuthor);
            
            

        };
        getPosts();
    });

    const commentfn = () => {
        navigate("/comments");

    };
    return <div className="homePage"> 
    {
        
        postLists.map((post) => {
            return <div className="post">{""}
            <div className="postHeader">
                <div className="title"> <h1> {post.title} </h1></div>

            </div>
            <div className="postTextContainer"> {post.body} </div>
            <h3>@{post.postAuthor}  </h3>
            <div className="comment-btn-right"><button onClick={commentfn}>Comments</button></div>
                </div>

            
            
        }

        )
        
    } 
    

    </div>;
}

export default MyBlog;