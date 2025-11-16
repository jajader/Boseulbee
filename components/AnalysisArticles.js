let articles = {};
articles[1] = {
    id: 1,
    cat: "Analysis",
    title: "유리수 집합은 최소상계 성질을 가질까?",
    date: "2025년 11월 13일",
    content: "순서체 $\\mathbb{F}$의 부분 집합 $B$가 어떤 $b \\in \\mathbb{F}$가 존재하여" +
        "$$ a \\in B \\Rightarrow a \\leq b$$" +
        "이면 $b$를 $B$의 상한(upper bound)라고 하고, 가능한 $b$의 최솟값을 최소상계, 상한이 존재하는 집합 $B$를 " +
        "위로 유계라고 한다. (아래로 유계도 비슷하다.)" +
        "$$\\newline$$ 어떤 집합 $A$의 위로 유계인 부분집합 $B$의 최소상계를 $A$가 항상 포함할 때, A가 최소상계 성질을 가진다(has least upper bound property)고 한다." +
        "$$\\newline$$ $\\bf{Example\\\ 1.}$ 유리수 집합은 최소상계 성질을 가지지 않는다." +
        "$$\\newline$$ 제곱하여 2보다 작은 유리수들의 집합을 $X$라고 하자. 제곱하여 2가 되는 유리수는 없으므로, $X$의 최소상계가 유리수 $p$라고 가정하면 $p^2>2$이거나 $p^2<2$이다." +
        "$$\\newline$$ ① $p^2<2$일 때 $\\newline$ $q=\\frac{2p+2}{p+2}$라고 하자. $q$는 유리수이며, $p<q$이고" +
        "$$ q^2=2+\\frac{2(p^2-2)}{(p+2)^2}<2$$ 이므로, $q \\in X$이다. 즉 $X$에 $p$보다 큰 원소가 있으므로 $p$는 $X$의 최소상계가 아니다." +
        "$$\\newline$$ ② $p^2>2$일 때 $\\newline$ $q=\\frac{2p+2}{p+2}$라고 하자. $q$는 유리수이며, $p>q$이고" +
        "$$ q^2=2+\\frac{2(p^2-2)}{(p+2)^2}>2$$ 이므로, q도 $X$의 상계. 즉 $p$는 $X$의 최소상계가 아니다." +
        "$$\\newline$$ 즉 $X$의 최소상계는 유리수 집합에 존재하지 않으며, 유리수 집합은 최소상계 성질을 가지지 않는다."
    ,preview: "순서체 $\\mathbb{F}$의 부분 집합 $B$가 어떤 $b \\in \\mathbb{F}$가 존재하여" +
        "$$ a \\in B \\Rightarrow a \\leq b$$" +
        "이면 $b$를 $B$의 상한(upper bound)라고 하고, 가능한 $b$의 최솟값을 최소상계, 상한이 존재하는 집합 $B$를 " +
        "위로 유계라고 한다. (아래로 유계도 비슷하다.)..."

}

articles[2] = {
    id: 2,
    cat: "Analysis",
    title: "",
    date: "",
    content: ""
    ,preview: ""
}
articles[3] = {
    id: 3,
    cat: "Analysis",
    title: "",
    date: "",
    content: ""
    ,preview: ""
}
articles[4] = {
    id: 4,
    cat: "Analysis",
    title: "",
    date: "",
    content: ""
    ,preview: ""
}

articles[5] = {
    id: 5,
    cat: "Analysis",
    title: "",
    date: "",
    content: ""
    ,preview: ""
}
export default articles;
