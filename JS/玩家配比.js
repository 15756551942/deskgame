window.onload = function(){
    var num_player = document.getElementById('num_player'),
    num_killer = document.getElementById('num_killer'),
    num_pep = document.getElementById('num_pep'),
    go = document.getElementById('go');

    
    num_player.addEventListener('input',function (){
        var player_val = num_player.value;
        var number_killer = Math.floor(player_val/3);
        var number_pep = player_val - number_killer;
        var sum_player = [];
        if(player_val >= 4 && player_val <= 18){
            num_killer.innerText = number_killer;
            num_pep.innerText = number_pep;
            
            for(i=0;i<number_killer;i++){
                sum_player.push('杀手');
            }
            for(i=0;i<number_pep;i++){
                sum_player.push('平民');
            }
        }else{
            num_killer.innerText = '';
            num_pep.innerText = '';
        }
    });

    function getnum(){
        
    }
    
    //var sum_player = sum_player();
    //console.log(sum_player);

    go.onclick = function(){
        if(num_player.value >= 4 && num_player.value <= 18){
            window.location.href = '查看身份.html';
        }else{
            alert('请输入正确的玩家数量');
        }
    }
}