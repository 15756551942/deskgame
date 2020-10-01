window.onload = function(){
    var home = document.getElementById('home'),
        btn = document.getElementById('btn');
    
    home.onclick = function(){
        window.location.href = 'index.html';
    }

    btn.onclick = function(){
        window.location.href = '玩家配比.html';
    }
}