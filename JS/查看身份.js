window.onload = function(){
    var sum_player = sessionStorage.getItem('sum_player');
    sum_player = JSON.parse(sum_player);
    // console.log(sum_player);
    var top_code = document.getElementById('top_code'),
    hidden_bottom_code =document.getElementById('hidden_bottom_code'),
    hidden_btn = document.getElementById('hidden_btn'),
    show_btn = document.getElementById('show_btn'),
    hidden_img = document.getElementById('hidden_img'),
    show_img = document.getElementById('show_img');

    var top_code_num = 1;
    top_code.innerText =top_code_num;
    hidden_bottom_code.innerText = top_code_num;
}