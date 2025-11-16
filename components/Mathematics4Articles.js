let articles = {};
articles[1] = {
    id: 1,
    cat: "Mathematics4",
    title: "쌍곡선 회전하기",
    date: "2025년 11월 15일",
    content: "$$\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=\\pm1$$가 그리는 도형은 쌍곡선임을 배웠다. 또 $xy=1$도 쌍곡선의 방정식임도 잘 알려져 있는 사실이다. 이 글에서는 회전변환을 이용하여" +
        " 쌍곡선을 $θ$만큼 회전했을 때 나타나는 쌍곡선의 방정식을 구하고, 그 특정한 경우가 $xy=t(t\\neq0)$임을 보이려 한다." +
        "$\\newline$ 점 $(x, y)$를 $θ$만큼 회전한 점 $(x', y')$은 아래와 같이 표현된다." +
        "$$\\left[\\begin{matrix}cosθ&-sinθ\\newline sinθ&cosθ\\end{matrix}\\right]\\left[\\begin{matrix}x\\newline y\\end{matrix}\\right]=\\left[\\begin{matrix}x'\\newline y'\\end{matrix}\\right]$$" +
        "즉 $\\begin{cases}x'=xcosθ-ysinθ\\newline y'=xsinθ+ycosθ\\end{cases}$이므로, $x', y'$에 대해 $x, y$를 구하면 $\\begin{cases}x=x'cosθ+y'sinθ\\newline y=-x'sinθ+y'cosθ\\end{cases}$이다. $\\newline$이를 쌍곡선의 방정식 $$\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=\\pm1$$에 대입하면" +
        "$$\\frac{(x'cosθ+y'sinθ)^2}{a^2}-\\frac{(-x'sinθ+y'cosθ)^2}{b^2}=\\pm1$$ 정리하면 $$x'^2\\left(\\frac{cos^2θ}{a^2}-\\frac{sin^2θ}{b^2}\\right)+x'y'\\left(\\frac{2sinθcosθ}{a^2}+\\frac{2sinθcosθ}{b^2} \\right)+y'^2\\left(\\frac{sin^2θ}{a^2}-\\frac{cos^2θ}{b^2}\\right)=\\pm1$$" +
        "그래서 $a=b$이고 $θ=\\frac{\\pi}{4}$일 때 위 식은 $$x'y'=\\pm\\frac{a^2}{2}$$즉 $xy=t(t\\neq0)$꼴이다."
    ,preview: "$$\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=\\pm1$$가 그리는 도형은 쌍곡선임을 배웠다. 또 $xy=1$도 쌍곡선의 방정식임도 잘 알려져 있는 사실이다. 이 글에서는 회전변환을 이용하여" +
        " 쌍곡선을 $θ$만큼 회전했을 때 나타나는 쌍곡선의 방정식을 구하고, 그 특정한 경우가 $xy=t(t\\neq0)$임을 보이려 한다...."

}

articles[2] = {
    id: 2,
    cat: "Mathematics4",
    title: "",
    date: "",
    content: ""
    ,preview: ""
}
articles[3] = {
    id: 3,
    cat: "Mathematics4",
    title: "",
    date: "",
    content: ""
    ,preview: ""
}
articles[4] = {
    id: 4,
    cat: "Mathematics4",
    title: "",
    date: "",
    content: ""
    ,preview: ""
}
articles[5] = {
    id: 5,
    cat: "LinearAlgebra",
    title: "",
    date: "",
    content: ""
    ,preview: ""
}
export default articles;
