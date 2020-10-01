window.onload = function(){
    var sum_player = sessionStorage.getItem('sum_player');
    sum_player = JSON.parse(sum_player);
    console.log(sum_player);

    var one_day = document.getElementById('one_day'),
        kill = document.getElementById('kill'),
        one_show_kill = document.getElementById('one_show_kill'),
        one_show_vote = document.getElementById('one_show_vote')
        ghost_say = document.getElementById('ghost_say'),
        play_say = document.getElementById('play_say'),
        vote = document.getElementById('vote'),
        one_handle = document.getElementById('one_handle'),
        taiben_page = document.getElementById('taiben_page'),
        kill_page = document.getElementById('kill_page'),
        body = document.body,
        back = document.getElementById('back');
    

    one_show_kill.style.textAlign = 'center';
    one_show_vote.style.textAlign = 'center';
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

    back.onclick = function(){
        window.location.href = 'Diary.html';
    }
    kill.onclick = function(){
        // ishidden = true;
        if(this.style.backgroundColor === 'rgb(131, 176, 154)'){
            alert('请进行游戏下一项活动');
            
        }else{
            taiben_page.style.display = 'none';
            kill_page.style.display = 'block';
            body.style.backgroundColor = '#29bde0';
            this.style.backgroundColor = 'rgb(131,176,154)';
        }
    }

    ghost_say.onclick = function(){
        if(this.style.backgroundColor === 'rgb(131, 176, 154)'){
            alert('请进行游戏下一项活动');
            
        }else{
            alert('请死者亮明身份并且发表遗言');
            this.style.backgroundColor = '#83b09a';
        }
    }

    play_say.onclick = function(){
        if(this.style.backgroundColor === 'rgb(131, 176, 154)'){
            alert('请进行游戏下一项活动');
        }else{
            alert('玩家依次发言讨论');
            this.style.backgroundColor = '#83b09a';
            
        }
    }

    vote.onclick = function(){
        if(this.style.backgroundColor === 'rgb(131, 176, 154)'){
            alert('请进行游戏下一项活动');
        }else{
            // ishidden = true;
            taiben_page.style.display = 'none';
            kill_page.style.display = 'block';
            this.style.backgroundColor = '#83b09a';
            // content1_1.style.display = 'none';
            one_handle.style.display = 'none';
        }
    }



    var sure = document.getElementById('sure');
    
    
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
    // var a= 0;
    for(var i=0;i<all_juese.length;i++){
            all_juese[i].onclick = function(){
            var cur_text = this.innerHTML;
            if(iskill){
                if(cur_text === '杀手'){
                    alert('你是杀手不能杀手本职业，请选择其他玩家杀手');
                }else{
                    if(this.style.backgroundColor !== 'rgb(131, 176, 154)'){
                        this.style.backgroundColor = '#83b09a';
                        killer_pep.push(cur_text);
                        //console.log(killer_pep);
                        // a++;
                        iskill = !iskill;
                        // for(var j=0;j<killer_pep.length;j++){
                        //     if(killer_pep[j] === '平民'){
                        //         num_killed_pep++;
                        //     }
                        // }
                        num_killed_pep++;
                        one_show_kill.innerText = cur_text +'被杀手杀死了';
                    }else{
                        alert('当前玩家已死亡，请选择其他玩家');
                    }
                }
                }else{
                    if(this.style.backgroundColor !== 'rgb(131, 176, 154)'){
                        this.style.backgroundColor = '#83b09a';
                        killer_pep.push(cur_text);
                        if(cur_text === '杀手'){
                            num_killed_killer++;
                        }else{
                            num_killed_pep++;
                        }

                        // for(var h=0;h<killer_pep.length;h++){
                        //     if(killer_pep[h] === '平民'){
                        //         num_killed_pep++;
                        //     }
                        // }
                        // for(var f=0;f<killer_pep.length;f++){
                        //     if(killer_pep[f] === '平民'){
                        //         num_killed_killer++;
                        //     }
                        // }
                        // a++;
                        iskill = !iskill;
                        one_show_vote.innerText = cur_text +'被投票投死了';
                    }else{
                        alert('当前玩家已死亡，请选择其他玩家')
                    }
                }
            console.log(killer_pep);
            console.log(num_killed_pep);
            console.log(num_killed_killer);
            }
    }
    
    // var content1_1 = document.getElementById('content1_1');
    var b = 0;
    var china_num = ["二","三","四","五","六","七","八","九","十一","十二","十三","十四","十五","十六","十七","十八"];
    var isadd = false;
    // var o = 2;
    sure.onclick = function(){
        var add_ishiadden = true;
        if((num_killed_killer === sum_num_killer) || (sum_num_killer - num_killed_killer) >= (sum_num_pep - num_killed_pep)){
            window.location.href = 'result.html';
        }else{
            // one_handle.style.display = 'none';
            // ishidden = !ishidden;
            if(isadd){
                var div_outer = document.createElement('div'),
                div_inner_one = document.createElement('div'),
                div_inner_two = document.createElement('div');

            // div_outer.id = 'content1_' + o;
            // div_outer.className = 'content1_' + o;
            // o++;

            div_inner_one.style.width = '95%';
            div_inner_one.style.height = '50px';
            div_inner_one.style.lineHeight = '50px';
            div_inner_one.style.margin = '10px auto';
            div_inner_one.style.border = '3px solid #dddddd';
            div_inner_one.style.textAlign = 'center';
            div_inner_one.style.color = '#14b7dd';
            div_inner_one.style.fontSize = '20px';
            div_inner_one.style.fontWeight = '600';
            div_inner_one.style.backgroundColor = 'rgb(255,255,255)';
            
            var inner_one_text = document.createTextNode('第'+ china_num[b] +'天');
            b++;
            div_inner_one.appendChild(inner_one_text);

            // div_inner_two.className = "content1_" + o;
            // div_inner_two.id = "content1_" + o;
            // div_inner_two.setAttribute('id','content1_'+o);
            // o++;
            div_inner_two.style.width = '95%';
            div_inner_two.style.margin = '10px auto';
            div_inner_two.style.border = '3px solid #dddddd';
            div_inner_two.style.backgroundColor = 'rgb(255,255,255)';
            

            var kill_tag = document.createElement('div');
            var kill_tag_text = document.createTextNode('杀手杀人');
            kill_tag.appendChild(kill_tag_text);
            kill_tag.style.width = '65%';
            kill_tag.style.height = '40px';
            kill_tag.style.lineHeight = '40px';
            kill_tag.style.backgroundColor = '#24a7c6';
            kill_tag.style.margin = '30px auto 15px';
            kill_tag.style.color = 'rgb(255,255,255)';
            kill_tag.style.textAlign = 'center';

            var show_kill_tag = document.createElement('div');
            

            var ghost_say_tag = document.createElement('div');
            var ghost_say_text = document.createTextNode('亡灵发表遗言');
            ghost_say_tag.appendChild(ghost_say_text);

            var play_say_tag = document.createElement('div');
            var play_say_text = document.createTextNode('玩家依次发言');
            play_say_tag.appendChild(play_say_text);

            var vote_tag = document.createElement('div');
            var vote_text = document.createTextNode('全民投票');
            vote_tag.appendChild(vote_text);

            var show_vote_tag = document.createElement('div');

            div_inner_two.appendChild(kill_tag);
            div_inner_two.appendChild(show_kill_tag);
            div_inner_two.appendChild(ghost_say_tag);
            div_inner_two.appendChild(play_say_tag);
            div_inner_two.appendChild(vote_tag);
            div_inner_two.appendChild(show_vote_tag);

            var add_tag = [ghost_say_tag,play_say_tag,vote_tag];
            for(var m=0;m<add_tag.length;m++){
                add_tag[m].style.width = '65%';
                add_tag[m].style.height = '40px';
                add_tag[m].style.lineHeight = '40px';
                add_tag[m].style.backgroundColor = '#24a7c6';
                add_tag[m].style.margin = '15px auto';
                add_tag[m].style.color = 'rgb(255,255,255)';
                add_tag[m].style.textAlign = 'center';
            }

            div_outer.appendChild(div_inner_one);
            div_outer.appendChild(div_inner_two);

            div_inner_one.onclick = function(){
                if(add_ishiadden){
                    div_inner_two.style.display = 'none';
                    add_ishiadden = !add_ishiadden;
                }else{
                    div_inner_two.style.display = 'block';
                    add_ishiadden = !add_ishiadden;
                }
            }

            kill_tag.onclick = function(){
                if(this.style.backgroundColor !== 'rgb(131, 176, 154)'){
                    taiben_page.style.display = 'none';
                    kill_page.style.display = 'block';
                    body.style.backgroundColor = '#29bde0';
                    this.style.backgroundColor = '#83b09a';
                    // show_kill_tag.innerText = 
                    // show_kill_tag.style.textAlign = 'center';
                }else{
                    alert('请进行游戏下一项活动');
                }
            }

            ghost_say_tag.onclick = function(){
                if(this.style.backgroundColor !== 'rgb(131, 176, 154)'){
                    alert('请死者亮明身份并且发表遗言');
                    this.style.backgroundColor = '#83b09a';
                }else{
                    alert('请进行游戏下一项活动');
                }
            }

            play_say_tag.onclick = function(){
                if(this.style.backgroundColor !== 'rgb(131, 176, 154)'){
                    alert('玩家依次发言讨论');
                    this.style.backgroundColor = '#83b09a';
                }else{
                    alert('请进行游戏下一项活动');
                }
            }

            vote_tag.onclick = function(){
                if(this.style.backgroundColor !== 'rgb(131, 176, 154)'){
                    // var cur_id = document.getElementById(div_inner_two)
                    // var cur_class = document.getElementsByClassName(div_inner_two);
                    taiben_page.style.display = 'none';
                    kill_page.style.display = 'block';
                    this.style.backgroundColor = '#83b09a';
                    div_inner_two.style.display = 'none';
                    // cur_class[0].style.display = 'none';
                    // div_outer.id.style.display = 'none';
                    // cur_id.style.display = 'none';
                    // cur_id.style.display = 'none';

                }else{
                    alert('请进行游戏下一项活动');
                }
            }

            content1.appendChild(div_outer);
            
            // for(var p=1;p<o;p++){
            //     var conp = 'content1_' + p;
            //     [conp].style.display = 'none';
            // }
            }
            taiben_page.style.display = 'block';
            kill_page.style.display = 'none';
            isadd = !isadd;
        }
    }

    
}