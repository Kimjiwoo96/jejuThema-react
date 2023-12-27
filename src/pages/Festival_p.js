import Maintext from "../component/kjw/Maintext";
import Festival from "../component/kjw/Festival";

function Festival_p(commonData){
    return(
        <>
            <Maintext
                title="진행중인 행사"
                subTitle="뭘 해야할지 모르겠다면 여기를 주목해주세요!"
            ></Maintext>
            <Festival
                commonData = {commonData.commonData}
            ></Festival>

        </>
    );
}

export default Festival_p;