import ReactStars from "react-rating-stars-component";
import React from "react";


const AddComment = (props)=> {
    const {text, vote} = props;

    return (
        <div id="root" className="Joke">
            <div className="comment-text">{text}</div>
            <div className='Joke-buttons'>
            <span className='Joke-votes'>
            <ReactStars
                class="stars"
                count={5}
                value={vote}
                size={24}
                activeColor="#ffd700"
                edit= {false}
            />
            </span>
            </div>
        </div>

        //document.getElementById("where-to-render")
    );
}
export default AddComment;