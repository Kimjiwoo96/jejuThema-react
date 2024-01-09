import React from 'react'
import CommentConStyle from "../../scss/kjw/CommentCon.module.scss"

function CommentCon({commentdata}) {

    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month  + '-' + day;

    console.log("??",typeof commentdata)

    return (
        <>
            {
            commentdata &&
                commentdata.map((el, idx) => (
                    <div className={CommentConStyle.commentCon} key={idx}>
                        <div>
                            <div className={CommentConStyle.commentinfo}>
                                <section>
                                    <p className={CommentConStyle.userId}>{el.nicknameValue}</p>
                                    <span className={CommentConStyle.commentDate}>{dateString}</span>
                                </section>
                                <span className={CommentConStyle.delBtn}>삭제</span>
                            </div>
                            <div className={CommentConStyle.commentCons}>
                                <p className="content">{el.commentConText}</p>
                            </div>
                        </div>
                    </div> 
                )) 
             }


                <div className={CommentConStyle.commentCon}>
                    <div>
                        <div className={CommentConStyle.commentinfo}>
                            <section>
                                <p className={CommentConStyle.userId}>나는 닉네임</p>
                                <span className={CommentConStyle.commentDate}>{dateString}</span>
                            </section>
                            <span className={CommentConStyle.delBtn}>삭제</span>
                        </div>
                        <div className={CommentConStyle.commentCons}>
                            <p className="content">댓글을 입력해보세요!</p>
                        </div>
                    </div>
                </div> 

        </> 
    )
}

export default CommentCon
