window.onload = function(){
    var sum_player = sessionStorage.getItem('sum_player');
    sum_player = JSON.parse(sum_player);
    console.log(sum_player);
    var insert = document.getElementById('insert');
    
    var iskill = true;
    var killer_pep = [];
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
        div.onclick = function(){
            if(iskill){
                if(text === '杀手'){
                    alert('你是杀手不能杀手本职业，请选择其他玩家杀手')
                }else{
                    this.style.backgroundColor = '#83b09a';
                    killer_pep.push(text);
                    iskill = !iskill;
                }
            }else{
                this.style.backgroundColor = '#83b09a';
                killer_pep.push(text);
                iskill = !iskill;
            }
        }
    }
}