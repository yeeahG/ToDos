# 사용한 기술
ReactJs, Typescript, Recoil, styled-components, AWS S3

# 문제해결 방법
- 칸반 아이템  
Drag n Drop library를 사용하여 칸반 내 아이템의 이동을 구현(자유로운 이동가능)  
React recoil의 RecoilState를 이용하여 데이터(Todo)의 상태를 관리(삭제, 수정)  
Task의 이름을 수정하려면 글자를 클릭 후, Enter를 입력  
모든 기능은 Event Handler를 사용하여 구현

- 칸반 컬럼  
Drag n Drop library를 사용하여 칸반 간 이동을 구현  
React recoil의 RecoilState를 이용하여 데이터(Board)의 상태를 관리(삭제)
List의 이름을 수정하려면 글자를 클릭 후, Enter를 입력  
모든 기능은 Event Handler를 사용하여 구현

- 데이터  
localstorage과 Recoil state를 사용하여 데이터를 저장하고 변화하는 데이터도 저장
