# Write my TO DO

## 개요  
Todo를 작성하고 확인할 수 있는 Kanban형식의 투두리스트  
Todo = item  
Board = Column  

## 기능  
- Todo 단계 별 Board 생성 및 삭제  
- Todo list 작성, 수정 및 삭제  
- Todo list 목록 자유로운 순서 정렬  
- Board간 자유로운 순서 정렬   

## 기술스택  
React.js, Typescript, Recoil, react-hook-form, styled-components, AWS S3  

## 🖥️  
👉[사이트](http://writemytodo.s3-website.ap-northeast-2.amazonaws.com/)  
![site](https://user-images.githubusercontent.com/97449025/210833566-4b54d38b-2929-4e26-8634-d3eee9da09bb.png)


## 사용한 라이브러react.js
- react beautiful dnd   
```
Todo list와 Column 이동을 위하여 사용하였습니다. 
```  
- styled-components  
```
컴포넌트에 스타일을 바로 삽입하기 위해 사용하였습니다. 
```  
- recoil  
```
React의 상태관리를 위해 사용하였습니다.
```  
- react-hook-form
```
register 함수를 사용해 조금 더 단순한 상태관리를 위해 사용하였습니다. (Todo 추가기능)
```
- clsx
```
State에 따른 컴포넌트 숨김, 나타냄을 위해 사용하였습니다. 
```


## 실행방법  
```npm i @types/styled-components
npm install recoil
npm install react-hook-form
npm i clsx
npm start
```


## 기능 설명  
[SOLUTION.md](https://github.com/yeeahG/ToDos/blob/main/SOLUTION.md)
