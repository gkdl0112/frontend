function valid_check(){
    const frm = document.forms[0];
    const name = frm.name
    const email = frm.email
    const password = frm.password
    const age = frm.age
    let isValid = true;

    if(name.value==''){
        alert('이름은 필수 입력입니다')
        name.focus()
        isValid=false
    } /*else*/

    if(password.value.length < 4){
        alert('패스워드는 4글자 이상입니다')
        password.focus()
        isValid=false
    }

    // 이메일은 기호 @와 .을 모두 포함해야 하는데 .은 마지막 위치는 아니다어야 한다.
    if(email.value=='' || email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1||email.value.endWith('.'))
    // email.value.indexOf('.') == email.value.length-1 이면 마지막에 .이 있다.
    {
        alert('이메일은 필수 입력이며 @ 를 포함해야 합니다.')
        email.focus()
        isValid=false
    }

    if(age.value < 15 || age.value > 99){
        alert('나이는 15~99 범위의 값이어야 합니다.')
        age.focus()
        isValid=false
    }

    //취미는 반드시 1개 이상을 선택하도록 조건 추가
    let cnt=0
    frm.hobby.forEach(value => {
        if(value.checked) 
        cnt++
    });

    if(cnt==0){
        alert('취미는 1개이상 선택하셔야 합니다.')
        isValid=false
    }


   /*
    if(email.value==''){
        alert('이메일은 필수 입력입니다')
        email.focus()
        isValid=false
    }
    */



    if(isValid){ //유효성 통과하여 제출한다.
        frm.action='13result.html'
        // frm.submit()
    } else{
        alert('유효성 통과 실패!!')
    }
}