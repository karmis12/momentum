const quotes=[
    {
        quote:"지윤이는 절대 정태꺼다",
        author:"-문정태"
    },
    {
        quote:"지윤이는 매운거 못 먹는데 매운거 먹는걸 좋아한다. 그리고 나는 그런 지윤이를 좋아한다",
        author:"-매워하는 지윤이를 흐뭇하게 바라보는 정태"
    },
    {
        quote:"지윤이는 인생네컷과 같은 즉석 사진관에서 사진 찍는걸 좋아한다",
        author:"-500일에 지윤이랑 즉석사진관에서 사진 찍어야겠다고 다짐하는 정태씨"
    },
    {
        quote:"지윤아 정말 사랑해",
        author:"-지윤이 없이는 못 사는 정태가"
    },
    {
        quote:"지윤이는 한 번 잠들면 깊게 잠든다. 오빠가 뭘해도 잘 안 일어난다.",
        author:"-지윤이가 잘 때 내가 뭐했게?? ㅎㅎ"
    },
    {
        quote:"무슨 일 있으면 나를 찾아줘 온 세상을 적으로 돌리더라도 항상 지윤이 편이 되어줄게 ",
        author:"-지윤이에게 힘이 되어주고 싶은 정태"
    },
    {
        quote:"벌써 500일이라니... 이건 결혼각이야 완전 각이야 그치? 그치!!!!?",
        author:"-웨딩드레스를 알아보고 있는 정태씨"
    },
    {
        quote:"",
        author:"hij"
    },
    {
        quote:"i",
        author:"ijk"
    }
]

const quote = document.querySelector(".quotes span:first-child"); 
const author = document.querySelector(".quotes span:last-child");


// Math.random(), Math.ceil(), Math.floor()  , ~~.length
const todaysQuote=quotes[Math.floor((Math.random()*quotes.length))]

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;