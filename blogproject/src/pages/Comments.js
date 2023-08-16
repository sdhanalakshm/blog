import React, { useEffect, useState } from "react";
import axios from "axios";
//import { auth } from "../firebase-config"
import { useNavigate } from "react-router-dom";

function Comments(){

    const [commentLists, setCommentList] = useState([]);
    const [addComments, setaddComments] = useState([]);
    //const createdAt = new Date(comment.createdAt).toLocaleDateString();

    let navigate = useNavigate();
    
    const addCommentsfn = async () => {
        try{
            const response = await axios.post('https://localhost:44328/api/Blog/AddComments',
            {
                "comments": addComments,
                "post_id": 4,
                "commentsAuthor": localStorage.getItem("userName")
              }
            );
            console.log(response.data);
    
        }
        catch (error) {
            console.error(error);
    
        }
        navigate("/");
    };

    useEffect(() => {
        const getComments = async () => {
            const response = await fetch('https://localhost:44328/api/Blog/GetComments?id=4');
            const data = await response.json();
            console.log(data);
            
            setCommentList(data);

        };
        getComments();
    });
return <div className="comment">
      
    
       <div className="cpCtsContainer">
        
        <h3 style={{color: "blue"}}>Write Comments</h3>
        
        <div className="inputCtsGp">
            
            <textarea placeholder="Type here the comments..." 
            onChange={(event) => {
                setaddComments(event.target.value);
            }}
            />
        </div>
        <button className="write" onClick={addCommentsfn}>Write</button>
        </div>

         {
        commentLists.map((comment) => {
            return <div className="comment">
                <div className="comment-image-container">
        <img src="/user-img.png" />
      </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.commentsAuthor} </div>
                    <div> {comment.dateCreated} </div>
                </div>
                <div className="comment-text">    {comment.comment1}  </div>
            </div>
            </div>
            
        }

        )
        
        } 


    </div>;
}

export default Comments;