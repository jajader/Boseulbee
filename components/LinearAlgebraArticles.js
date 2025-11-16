let articles = {};
articles[1] = {
    id: 1,
    cat: "LinearAlgebra",
    title: "대칭행렬의 서로 다른 고유값에 대한 고유벡터는 수직이다 증명",
    date: "2025년 11월 14일",
    content: "대칭행렬 $A$는 $A^T = A$를 만족한다. $A$의 고윳값이 2개 이상 존재한다고 하자. 그리고 $A$의 서로 다른 고유값 $λ_1, λ_2$에 대한 고유벡터를 각각 $\\rm{\\bold{v_1, v_2}}$" +
        "라고 하자. 그러면 고유값의 정의에 의해 $$A\\rm{\\bold{v_1}}=λ_1\\rm{\\bold{v_1}}, A\\rm{\\bold{v_2}}=λ_2\\rm{\\bold{v_2}}$$가 성립한다. 이제 $\\rm{\\bold{v_1, v_2}}$가" +
        " 서로 수직임을 증명하자." + "$$λ_1\\rm{\\bold{v_1\\cdot v_2}}=(λ_1\\rm{\\bold{v_1}})^T\\rm{\\bold{v_2}}=(A\\rm{\\bold{v_1}})^T\\rm{\\bold{v_2}}=\\rm{\\bold{v_1^T}}A\\rm{\\bold{v_2}}=" +
        "\\rm{\\bold{v_1^T}}λ_2\\rm{\\bold{v_2}}=λ_2\\rm{\\bold{v_1^T}}\\rm{\\bold{v_2}}=λ_2\\rm{\\bold{v_1\\cdot v_2}}$$가 성립하고, $λ_1\\neqλ_2$" +
        "이므로 $\\rm{\\bold{v_1\\cdot v_2}}=0$, 즉 $\\rm{\\bold{v_1, v_2}}$은 서로 수직이다."
    ,preview: "대칭행렬 $A$는 $A^T = A$를 만족한다. $A$의 고윳값이 2개 이상 존재한다고 하자. 그리고 $A$의 서로 다른 고유값 $λ_1, λ_2$에 대한 고유벡터를 각각 ..."

}

articles[2] = {
    id: 2,
    cat: "LinearAlgebra",
    title: "",
    date: "",
    content: ""
    ,preview: ""
}
articles[3] = {
    id: 3,
    cat: "LinearAlgebra",
    title: "",
    date: "",
    content: ""
    ,preview: ""
}
articles[4] = {
    id: 4,
    cat: "LinearAlgebra",
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
