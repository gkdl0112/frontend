document.getElementById('search').addEventListener('click',function(){
    const query = document.getElementById('query').value
    const page = document.getElementById('page').value
    const size = document.getElementById('size').value
    //radio 버튼은 선택되었는지 
    let sort = document.getElementById('accuracy').checked
    if(sort == true) sort = 'accuracy'
    else sort = 'recency'
    //${...} 는 ... 이 변수, 수식, 함수 ... 결과값을 구해서 출력
    alert(`query=${query}&page=${page}&size=${size}&sort=${sort}`)
    search(query,page,size,sort)        //새로운 검색을 위한 함수 호출


})          //함수 끝

// search ('트와이스', 1, 10, 'accuracy')   //함수 정의보다 앞에서 호출하면 오류

const search = function(v1,v2,v3,v4){
            //비동기 통신을 위한 객체 생성
            const xhr = new XMLHttpRequest();

            //1.HTTP 요청 초기화 : method, url
            xhr.open("GET",`https://dapi.kakao.com/v2/search/vclip?query=${v1}&page=${v2}&size=${v3}&sort=${v4}`);  //size는 기본값 10
            //2.요청 header 설정
            xhr.setRequestHeader("Authorization", "KakaoAK 6dfa11928c885a9226c2739c68e18613");
            //      xhr.setRequestHeader()
            //3.HTTP요청 전송
            xhr.send();
            //4.onload 이벤트 : 요청에 대한 응답이 왔을 때 실행될 이벤트 핸들러 작성
            xhr.onload = function(){
            //응답코드가 200일때만
            if(xhr.status==200) {
                document.getElementById('list').innerHTML=''
                let $response = JSON.parse(xhr.response)
                let results = $response.documents   //author, datetime, title, url, play-time, thumbnail 속성으로 구성된 객체배열
                results.forEach(element => {         //results 배열의 각 값들을 순서대로 element가 참조하며 함수 실행합니다.
                const $ul = document.createElement('ul')    //새로운 ul태그요소 생성
                    // ${}:표현식기호-변수, 수식, 함수, ... 결과값이 있는 것에 사용가능
                    const temp = `<li>${element.author}</li>
                    <li>${element.title}</li>
                    <li>${element.datetime}</li>
                    <li>${element.play_time}</li>
                    <li><a href=${element.url} target="_blank"><img src=${element.thumbnail} width='200px'></li>`
                    //ulr은 a태그, thumbnail.은 img 태그에 속성값으로 활용할 수 있습니다.

                    $ul.innerHTML=temp                          //ul 태그 요소의 innerHTML 설정
                    document.getElementById('list').appendChild($ul) //ul 태그 요소를 <p id="list"></p>의 자식요소로 추가
                })  //foreach 끝
                };  //if 끝
            }   //onload 끝
}   //search 끝
search ('트와이스', 1, 10, 'accuracy')      //함수 호출