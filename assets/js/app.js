let removeIcon ='<i class="fas fa-trash"></i>';
let doneIcone ='<i class="far fa-check-circle"></i>';




let add = document.getElementById('add');
add.addEventListener('click', function(){
    console.log(1);
    let taskName = document.getElementById('task').value;
    console.log(taskName);

//タスク名を入れたliタグをnotyetに追加する

    let li = document.createElement('li');
    li.append(taskName);
    console.log(li);


})
