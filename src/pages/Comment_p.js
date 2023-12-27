import React from 'react'

import Comment from '../component/kjw/Comment';
import CommentCon from '../component/kjw/CommentCon';

function Comment_P() {

    const marginWrap ={boxSizing:"border-box",width:"1380px",margin:"0 auto",padding:"100px 0"}
    const marginBottom = {marginBottom:"100px",textAlign:"center"}
    return (
        <div style={marginWrap}>
            <h4 style={marginBottom}>제주도 최고의 여행지를 이웃과 함께 공유해보세요!</h4>
            <Comment></Comment>
            <CommentCon></CommentCon>
        </div>
    )
}

export default Comment_P;
