
function getRank(score:number) {
    if(score<2){
        return {
            "name":"bronze III",
            "image":"bronzesheild.svg"
        }
    }
    if(score<5){
        return {
            "name":"bronze II",
            "image":"bronzesheild.svg"
        }
    }
    if(score<8){
        return {
            "name":"bronze I",
            "image":"bronzesheild.svg"
        }
    }
    if(score<10){
        return {
            "name":"silver III",
            "image":"silversheild.svg"
        }
    }
    if(score<13){
        return {
            "name":"silver II",
            "image":"silversheild.svg"
        }
    }

    if(score<20){
        return {
            "name":"silver I",
            "image":"silversheild.svg"
        }
    }
    if(score<30){
        return {
            "name":"Gold",
            "image":"goldsheild.svg"
        }
    }
    if(score<50){
        return {
            "name":"platinum",
            "image":"platinumsheild.svg"
        }
    }
}