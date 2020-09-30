window.onload = function(){
    var sum_player = sessionStorage.getItem('sum_player');
    sum_player = JSON.parse(sum_player);
    console.log(sum_player);
    var content = document.getElementById('content'),
        btn = document.getElementById('btn');

    for(var i = 0;i < sum_player.length;i++){
        var div = document.createElement('div');
        var text = document.createTextNode(sum_player[i]);
        div.appendChild(text);
        content.appendChild(div);
        div.style.float = 'left';
        div.style.width = '80px';
        div.style.height = '80px';
        div.style.lineHeight = '80px';
        div.style.backgroundColor = '#f5c97b';
        div.style.border = '3px solid rgb(255, 255, 255)';
        div.style.margin = '40px 10px 0px 23px';
        div.style.textAlign = 'center';
        div.style.fontSize = '20px';
    }

    btn.onclick = function(){
        var str = JSON.stringify(sum_player);
            sessionStorage.setItem('sum_player',str);
            // console.log(str);
            window.location.href = 'taiben.html';
    }
}