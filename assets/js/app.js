let removeIcon ='<i class="fas fa-trash"></i>';
let doneIcon ='<i class="far fa-check-circle"></i>';
let data;

// console.log(localStorage);
console.log(localStorage);

if (localStorage.getItem('todoList')){
    data = JSON.parse(localStorage.getItem('todoList'));
    for(let taskName of data.li){
        addTaskToDOM(taskName);
    }
} else {
    data = {
        li: [],
        done: [],
    };
}

let add = document.getElementById('add');
add.addEventListener('click', function(){
    let taskName = document.getElementById('task').value;
// 入力タスクを変数に入れてから、タスク入力欄のユーザーが入れた入力を消す。
    document.getElementById('task').value = '';
//ユーザーが入力した値を保存する
    data.li.push(taskName);
    localStorage.setItem('todoList', JSON.stringify(data));

    addTaskToDOM(taskName);

})


function addTaskToDOM(taskName){
//タスク名を入れたliタグをnotyetに追加する
    let li = document.createElement('li');
    li.append(taskName);
    document.getElementById('not-yet').appendChild(li);

//ボタンを表示させる場所
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    li.appendChild(buttons);

//削除ボタンをつける
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;
    buttons.appendChild(remove);

//完了ボタンをつける
    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = doneIcon;
    buttons.appendChild(done);


//削除ボタンが押されたら行う処理
    remove.addEventListener('click', removeTask);

//完了ボタンが押されたらdoneセクションへ移動する処理
    done.addEventListener('click', doneTask);
}


// -----------------関数---------------------
//削除ボタンが押されたら行う処理
function removeTask(){
        let task = this.parentNode.parentNode;
        task.remove();
    }
//完了ボタンが押されたらdoneセクションへ移動する処理
function doneTask(){
        let task = this.parentNode.parentNode;
        document.getElementById('done').appendChild(task);
    }
