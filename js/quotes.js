const quotes=[
    {
        quote:"지윤이는 절대 정태꺼다",
        author:"-무명의 미남"
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
        quote:"너가 너무너무 좋아 너도 그랬으면 좋겠다",
        author:"-지윤이가 보고싶어서 앨범을 들어가는 정태가"
    },
    {
        quote:"항상 오빠 장난 잘 들어줘서 고마워",
        author:"-자기만 보면 장난치고 싶어지는 말썽꾸러기가"
    },
    {
        quote:"지윤이랑 뽀뽀하고 싶다 못한지 너무 오래됐어",
        author:"-지윤이의 입술이 그리운 오빠가"
    },
    {
        quote:"오빠가 하자는거 항상 하려고 해줘서 고마워 지윤이도 하고 싶은거 생기면 꼭 말해줘",
        author:"-자기가 같이 하고 싶은거라면 다 할 수 있어!!"
    },
    {
        quote:"우리 둘이 같이 나온 사진들만 넣어봤는데 오빠 사진도 좀 넣을걸 그랬나?",
        author:"-그래두 500일 기념 페이지니까! 같이 나온게 좋다는 정태구니가"
    },
    {
        quote:"지윤이 정말 이쁘다 그치? 나도 그렇게 생각해",
        author:"-눈이 높은 한 소년이... 라고 하면 어디서 돌 맞나? 25살 아조씨가"
    },
    {
        quote:"지윤이는 표정이 참 다양해서 좋아 항상 나를 놀라고 웃게 만들어줘",
        author:"-너무 좋아 항상 짜릿해"
    },
    {
        quote:"지윤이는 표정이 참 다양해서 좋아 항상 나를 놀라고 웃게 만들어줘",
        author:"-너무 좋아 항상 짜릿해"
    },
]

const quote = document.querySelector(".quotes span:first-child"); 
const author = document.querySelector(".quotes span:last-child");


// Math.random(), Math.ceil(), Math.floor()  , ~~.length
const todaysQuote=quotes[Math.floor((Math.random()*quotes.length))]

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;