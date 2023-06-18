# Quiz-React

<h1>React Library를 이용한 개인 프로젝트입니다.</h1>

![1 Home](https://github.com/selloriwoo/Quiz-React/assets/39435633/c8e5c9b2-09aa-4dcd-8723-ff89f986f8f9)

<h3>본 프로젝트는 https://github.com/selloriwoo/Quiz-Spring 의 서버를 연동한 것입니다. </h3>

1. **Package**<br />
   + React-router-dom (BrowserRouter, Routes, Route, Link, useNaviagate, useLocation)
   + react (useEffect, useState)
   + http-proxy-middleware
   + axios
2. **html, css, javascript Library**<br />
   + Bootstrap
   + Google Font


## 상세 구현 내용

<details>
<summary>접기/펼치기</summary>

##퀴즈 풀기

![2 Quiz](https://github.com/selloriwoo/Quiz-React/assets/39435633/08696a00-ff25-476b-b45b-186edf4f66cb)
+ axios로 Restful Api를 사용하여 get 메서드로 퀴즈 문제를 불러온다.
+ 내가 고른 선택지를 axios Post 메서드로 보내어 서버에서 내가 고른 정답과 퀴즈 정답을 비교하여 맞는지 판단.
+ 맞으면 맞춘 문제가 1씩 증가하며 View에 맞춘문제를 보여주며 문제는 총 10문제를 풀게 만들었다.

##퀴즈 결과

![3 Result](https://github.com/selloriwoo/Quiz-React/assets/39435633/348cfd52-ad46-44da-9c14-ffd5d54692da)
+총 맞춘 문제 갯수를 넘겨 받아서 화면에 보여준다.

</details>
