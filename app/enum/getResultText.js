const RENT='RENT';

function getTitleText(value){
    if(value==="rent"){
        return "保养抄表";
    }
    if(value==="device"){
        return "添加新设备";
    }
    if(value==="report"){
        return "维修报告";
    }
    if (value === "memo"){
        return "备忘录"
    }
}

export default {
    RENT,
    getTitleText,
}