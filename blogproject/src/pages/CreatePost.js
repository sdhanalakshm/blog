import React, { useEffect, useState } from "react";
import axios from "axios";
//import { auth } from "../firebase-config"
import { useNavigate } from "react-router-dom";
//import user from "./Login";

function CreatePost( {isAuth}) {
const [title, setTitle] = useState("");
const [postText, setPostText] = useState("");

// const [image, setImage] = useState(null);

// const handleImageUpload = (event) => {
//   setImage(event.target.files[0]);
// };

let navigate = useNavigate();
//const author = userState ? userState : auth.currentUser.displayName;
const createPost = async () => {
    try{
        const response = await axios.post('https://localhost:44328/api/Blog/CreatePost',
        {
            "title": title,
            "body": postText,
            "postAuthor": localStorage.getItem("userName")
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
   if(!isAuth){
    navigate("/login");
   }
},[]

)

    return (
    <div className="createPostPage"><div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
            <label> Title:</label>
            <input placeholder="Title..." 
            onChange={(event) => {
                setTitle(event.target.value);
            }}
            />
        </div>
        <div className="inputGp">
            <label> Post:</label>
            <textarea placeholder="Type here the description of your post" 
            onChange={(event) => {
                setPostText(event.target.value);
            }}
            />
        </div>
        {/* <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div> */}
        <button onClick={createPost}>Submit Post</button>
        </div>
    </div>
    );
}

export default CreatePost;