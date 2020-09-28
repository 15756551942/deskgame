window.onload = function(){
    var left = document.getElementById('left'),
        right = document.getElementById('right'),
        killgame = document.getElementById('killgame'),
        ghostgame = document.getElementById('ghostgame'),
        page_one = document.getElementById('page_one'),
        page_two = document.getElementById('page_two'),
        simp_ver = document.getElementById('simp_ver');

    var show = true;

    right.onclick = function(){
        if(show){
            killgame.style.display = 'block';
            ghostgame.style.display = 'none';
            page_one.style.backgroundColor = 'rgb(231, 231, 231)';
            page_one.style.color = 'rgb(0, 0, 0)';
            page_two.style.backgroundColor = '#ffc561';
            page_two.style.color = 'rgb(255, 255, 255)'
            show = !show;
        }
    }

    left.onclick = function(){
        if(show){
            killgame.style.display = 'none';
            ghostgame.style.display = 'block';
        }
        else{
            killgame.style.display = 'none';
            ghostgame.style.display = 'block';
            page_one.style.backgroundColor = '#ffc561';
            page_one.style.color = 'rgb(255, 255, 255)';
            page_two.style.backgroundColor = 'rgb(231, 231, 231)';
            page_two.style.color = 'rgb(0, 0, 0)';
            show = !show;
        }
    }

    simp_ver.onclick = function(){
        window.location.href="玩家配比.html";
    }
}