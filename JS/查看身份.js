window.onload = function(){
    var sum_player = sessionStorage.getItem('sum_player');
    sum_player = JSON.parse(sum_player);
     console.log(sum_player);
    var top_code = document.getElementById('top_code'),
    hidden_bottom_code =document.getElementById('hidden_bottom_code'),
    show_bottom_code = document.getElementById('show_bottom_code'),
    hidden_btn = document.getElementById('hidden_btn'),
    show_btn = document.getElementById('show_btn'),
    identify = document.getElementById('identify'),
    hidden_img = document.getElementById('hidden_img'),
    show_img = document.getElementById('show_img'),
    back = document.getElementById('back');


    back.onclick = function(){
        window.location.href = '玩家配比.html';
    }
    var top_code_num = 1;
    top_code.innerText = top_code_num;
    hidden_bottom_code.innerText = top_code_num;

    hidden_btn.onclick = function(){
        if(top_code_num < sum_player.length){
            show_btn.style.display = 'block';
            hidden_img.style.display = 'none';
            show_img.style.display = 'block';
            identify.innerText = sum_player[top_code_num - 1];
            show_bottom_code.innerText = top_code_num + 1;     
            hidden_btn.style.display = 'none';
        }else{
            hidden_btn.style.display = 'none';
            show_btn.style.display = 'block';
            hidden_img.style.display = 'none';
            show_img.style.display = 'block';
            identify.innerText = sum_player[top_code_num - 1];     
            show_btn.innerText = '法官查看';
        }
    }

    show_btn.onclick = function(){
        if(top_code_num < sum_player.length){
            hidden_btn.style.display = 'block';
            hidden_img.style.display = 'block';
            show_img.style.display = 'none';
            identify.innerText = '';
            top_code_num++;
            top_code.innerText = top_code_num;
            hidden_bottom_code.innerText = top_code_num;
            show_btn.style.display = 'none';
        }else{
            var str = JSON.stringify(sum_player);
            sessionStorage.setItem('sum_player',str);
            // console.log(str);
            window.location.href = 'Diary.html';
        }
    }
}