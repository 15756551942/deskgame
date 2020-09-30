window.onload = function(){
    var sum_player = sessionStorage.getItem('sum_player');
    sum_player = JSON.parse(sum_player);
    console.log(sum_player);

    var one_day = document.getElementById('one_day'),
        kill = document.getElementById('kill'),
        one_show = document.getElementById('one_show'),
        ghost_say = document.getElementById('ghost_say'),
        play_say = document.getElementById('play_say'),
        vote = document.getElementById('vote'),
        one_handle = document.getElementById('one_handle'),
        taiben_page = document.getElementById('taiben_page'),
        kill_page = document.getElementById('kill_page'),
        body = document.body;
    
    var ishidden = true;
    one_day.onclick = function(){
        if(ishidden){
            one_handle.style.display = 'none';
            ishidden = !ishidden;
        }else{
            one_handle.style.display = 'block';
            ishidden = !ishidden;
        }
    }

    kill.onclick = function(){
        taiben_page.style.display = 'none';
        kill_page.style.display = 'block';
        body.style.backgroundColor = '#29bde0';
        this.style.backgroundColor = '#83b09a'
    }

    ghost_say.onclick = function(){
        this.style.backgroundColor = '#83b09a';
    }

    play_say.onclick = function(){
        this.style.backgroundColor = '#83b09a';
    }

    vote.onclick = function(){
        taiben_page.style.display = 'none';
        kill_page.style.display = 'block';
        this.style.backgroundColor = '#83b09a';
    }



    var sure = document.getElementById('sure');
    
    var a= 0;
    for(var i = 0;i < sum_player.length;i++){
        var div = document.createElement('div');
        var text = document.createTextNode(sum_player[i]);
        div.appendChild(text);
        insert.appendChild(div);
        div.style.float = 'left';
        div.style.width = '80px';
        div.style.height = '80px';
        div.style.lineHeight = '80px';
        div.style.backgroundColor = '#f5c97b';
        div.style.border = '3px solid rgb(255, 255, 255)';
        div.style.margin = '40px 10px 0px 24px';
        div.style.textAlign = 'center';
        div.style.fontSize = '20px';
        div.className = 'juese'
    }

    // var num_pep = 0;
    var sum_num_killer = 0;
    for(var i=0;i<sum_player.length;i++){
        if(sum_player[i] === '杀手'){
            sum_num_killer++;
        }
    }

    var iskill = true;
    var killer_pep = [];
    var sum_num_pep = sum_player.length - sum_num_killer;
    var num_killed_pep = 0;
    var num_killed_killer = 0;
    var all_juese = document.getElementsByClassName('juese');

    for(var i=0;i<all_juese.length;i++){
        all_juese[i].onclick = function(){
            var cur_text = this.innerHTML;
            if(iskill){
                if(cur_text === '杀手'){
                    alert('你是杀手不能杀手本职业，请选择其他玩家杀手');
                }else{
                    this.style.backgroundColor = '#83b09a';
                    killer_pep.push(text);
                    a++;
                    iskill = !iskill;
                    for(var j=0;j<killer_pep.length;j++){
                        if(killer_pep[j] === '平民'){
                            num_killed_pep++;
                        }
                    }
                    for(var f=0;f<killer_pep.length;f++){
                        if(killer_pep[f] === '平民'){
                            num_killed_killer++;
                        }
                    }
                }
            }else{
                this.style.backgroundColor = '#83b09a';
                killer_pep.push(text);
                for(var h=0;h<killer_pep.length;h++){
                    if(killer_pep[h] === '平民'){
                        num_killed_pep++;
                    }
                }
                for(var f=0;f<killer_pep.length;f++){
                    if(killer_pep[f] === '平民'){
                        num_killed_killer++;
                    }
                }
                iskill = !iskill;
            }
        }
    }
    sure.onclick = function(){
        if((num_killed_killer === sum_num_killer) || sum_num_killer >= (sum_num_pep - num_killed_pep)){
            window.location.href = 'result.html';
        }else{
            taiben_page.style.display = 'block';
            kill_page.style.display = 'none';
        }
    }
}