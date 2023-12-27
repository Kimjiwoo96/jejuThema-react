import React from 'react'
import CommentConStyle from "../../scss/kjw/CommentCon.module.scss"

function CommentCon() {
    return (
        <div className={CommentConStyle.commentCon}>
            <div className={CommentConStyle.commentinfo}>
                <section>
                    <p className={CommentConStyle.userId}>이건내아이디</p>
                    <span className={CommentConStyle.commentDate}>2023.12.23</span>
                </section>

                <span className={CommentConStyle.delBtn}>삭제</span>
            </div>
            <div className={CommentConStyle.commentCons}>
                <p class="content">왜 안되는거야 나를 화나게 하지마</p>
            </div>
        </div>    
    )
}

export default CommentCon
