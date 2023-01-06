# 사용한 기술
ReactJs, Typescript, Recoil, styled-components, AWS S3

# 문제해결 방법  
기본적으로 TODO, DOING, DONE의 컬럼이 생성되어 있고 , 이 컬럼은 삭제 후 본인이 원하는 컬럼으로 생성가능합니다. 생성은 갯수에 상관없이 만들 수 있습니다. 4개를 넘어가는 컬럼은 자동으로 두번째 줄로 정렬됩니다. 컬럼의 순서는 자유롭게 변경이 가능합니다. 
컬럼 내부에 Todo를 작성할 수 있습니다. 새로운 Todo list를 추가하고 수정이 가능하며, Todo task는 컬럼 내부에 자유롭게 이동이 가능하며 컬럼 간 이동도 가능합니다. 
모든 데이터는 새로고침을 하여도 그대로 유지됩니다. 

- 칸반 아이템  
Drag n Drop library를 사용하여 칸반 내 아이템의 이동을 구현(자유로운 이동가능)  
React recoil의 RecoilState를 이용하여 데이터(Todo)의 상태를 관리(삭제, 수정)  
Task의 이름을 수정하려면 글자를 클릭 후, Enter를 입력  
모든 기능은 Event Handler를 사용하여 구현

- 칸반 컬럼  
Drag n Drop library를 사용하여 칸반 간 이동을 구현  
React recoil의 RecoilState를 이용하여 데이터(Board)의 상태를 관리(삭제, 수정)
List의 이름을 수정하려면 글자를 클릭 후, Enter를 입력 
모든 기능은 Event Handler를 사용하여 구현

- 데이터  
localstorage과 Recoil state를 사용하여 데이터를 저장하고 변화하는 데이터도 저장
