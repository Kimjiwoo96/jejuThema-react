import { useEffect, useState , useRef } from "react"
import CommitStyle from "../../scss/kjw/Comment.module.scss"
import CommentCon from "./CommentCon"

function Comment(){

    const [nicknameValue, setNicknameValue] = useState("")
    const [commentConText, setcommentConText] = useState("")
    const [commentdata, setCommentdata] = useState([]); // 댓글등록시 글쓴이 데이터 array


    const commentRegistration = (e) => {
        e.preventDefault()

        if(confirm("댓글을 등록하시겠습니까?")){
            setCommentdata((prev) => [{ nicknameValue, commentConText }, ...prev])
            alert("댓글이 등록되었습니다")
        };
        
        // console.log("이것을 DB로 넘겨야함", commentdata)
    }


    const nicknameChange = (event) => {
        setNicknameValue(event.target.value);
    }

    const commentConTextChange = (event) => {
        setcommentConText(event.target.value);
    }


    return(
        <>
            <div className={CommitStyle.Comment}>
                <form action="">
                    <div className={CommitStyle.CommentWrite1}>
                        <label for="nickname">이름/닉네임</label>
                        <input
                         type="text"
                         id="nickname"
                         name="nickname"
                         value={nicknameValue}
                         onChange={nicknameChange}
                         />
                    </div>
                    <div className={CommitStyle.CommentWrite2}>
                        <textarea
                        name=""
                        id=""
                        cols="30" rows="10"
                        placeholder="내용을 적어주세요"
                        onChange={commentConTextChange}
                        ></textarea>
                        <button
                            onClick={(event) => {
                                commentRegistration(event);
                            }}
                        >등록</button>
                    </div>
                </form>  

                <CommentCon
                    commentdata = {commentdata}
                ></CommentCon>
             

            </div>
        </>
    );
}

export default Comment