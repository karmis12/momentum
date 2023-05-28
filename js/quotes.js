const quotes=[
    {
        quote:"실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.",
        author:"하버트 개서"
    },
    {
        quote:"우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.",
        author:"윌리엄 제임스"
    },
    {
        quote:"너 자신이 돼라. 다른 사람은 이미 있으니까",
        author:"오스카 와일드"
    },
    {
        quote:"우리는 나이가 들면서 변하는 게 아니다. 보다 자기 다워지는 것이다.",
        author:"린홀"
    },
    {
        quote:"승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
        author:"J.하비스"
    },
    {
        quote:"행동의 가치는 그행동을 끝까지 이루는 데 있다.",
        author:"칭기즈칸"
    },
    {
        quote:"최고에 도달하려면 최저에서 시작해라.",
        author:"P.시루스"
    },
    {
        quote:"모든 이의 마음을 얻으려고 계산된 글은 그 누구의 마음도 얻지 못한다.",
        author:"아들라이 E. 스티븐슨"
    },
    {
        quote:"오늘 할 수 있는 일을 내일로 미루지 마라.",
        author:"벤자민 프랭클린"
    },
    {
        quote:"모든 사람들로부터 사랑받지 않아도 된다.",
        author:"니체"
    },
    {
        quote:"위험은 자신이 무엇을 하는지 모르는 데서 온다.",
        author:"워런 버핏"
    },
    {
        quote:"아무런 위험을 감수하지 않는다면, 더 큰 위험을 감수하게 될 것이다.",
        author:"에리카 종"
    },
    {
        quote:"당신의 하루하루를 당신의 마지막 날이라고 생각하라.",
        author:"호라티우스"
    }
]

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

