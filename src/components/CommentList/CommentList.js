import ReactStars from "react-rating-stars-component";
import React from "react";
import AddComment from "../addComment/AddComment";
import { useState } from "react";
import "../../index.css";


const CommentList = () => {

    const [comment, setComment] = useState("");
    const [vote, setVote] = useState(0);
    const [comments, setComments] = useState([]);

    const componentRef = React.useRef();
    const starsRef = React.useRef();
    const ratingChanged = (newRating) => {

        setVote(newRating);
    };

    const handleSubmit = (event) => {

        if (comment.length === 0 && vote === 0) {
            alert("Lütfen yorum yapınız ve yıldız veriniz.");
            event.preventDefault();
        } else if (comment.length < 3 && vote === 0) {
            alert("Lütfen yorumunuzu 3 karakterden daha uzun olacak şekilde düzenleyiniz ve yıldız veriniz.");
            event.preventDefault();
        } else if (comment.length === 0 && vote !== 0) {
            alert("Lütfen yorum yapınız.");
            event.preventDefault();
        } else if (comment.length < 3 && vote !== 0) {
            alert("Yorumunuz 3 karakterden daha küçük olamaz.");
            event.preventDefault();
        } else if (comment.length > 0 && vote === 0) {
            alert("Lütfen yıldız veriniz.");
            event.preventDefault();
        }
        else {
            let c = { text: comment, vote: vote }
            let cArray = [...comments, c];

            setComments(cArray);
            setComment("")
            componentRef.current.value = ""
            //starsRef.current.value=0

            event.preventDefault();
        }
    }
    const handleChange = (event) => {
        console.log("change occured");
        setComment(event.target.value)
    }

    return (
        <div id="root" class="CommentList">
            <div className='JokeList-sidebar'>
                <h1 className='JokeList-title'>Yorumlar</h1>
                <img src='https://img.icons8.com/bubbles/2x/comments.png' />
                <form onSubmit={handleSubmit}>
                <ReactStars
                    ref={starsRef}
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
                <textarea onChange={handleChange} ref={componentRef} />
                <input className='JokeList-getmore' type="submit">
                </input>
                </form>
            </div>
            {/* <h2>Yorumlar</h2> */}
            <div className='JokeList-jokes'>
            {comments.length === 0 ? (<p>Henüz hiç yorum yok.</p>) : (comments.map(c => (
                <AddComment text={c.text} vote={c.vote} />
            )))}
            </div>
            {/* <form onSubmit={handleSubmit}> */}

                {/* <ReactStars
                    ref={starsRef}
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                /> */}

                {/* <textarea onChange={handleChange} ref={componentRef}/> */}
                {/* <input type="submit"></input> */}
            {/* </form> */}
        </div>


    );
}
export default CommentList;