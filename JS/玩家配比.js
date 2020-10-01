window.onload = function(){
    var num_player = document.getElementById('num_player'),
    num_killer = document.getElementById('num_killer'),
    num_pep = document.getElementById('num_pep'),
    go = document.getElementById('go'),
    back = document.getElementById('back');

    back.onclick = function(){
        window.location.href = 'index.html';
    }
    function shuffle(arr){
        var len = arr.length;
        for(var i = 0; i < len - 1; i++){
          var idx = Math.floor(Math.random() * (len - i));
          var temp = arr[idx];
          arr[idx] = arr[len - i - 1];
          arr[len - i -1] = temp;
        }
        return arr;
      }

    var sum_player = [];
    num_player.oninput = function(){
        var player_val = num_player.value;
        var number_killer = Math.floor(player_val/3);
        var number_pep = player_val - number_killer;

        if(player_val >= 4 && player_val <= 18){
            num_killer.innerText = number_killer;
            num_pep.innerText = number_pep;
            for(var i=0;i<number_killer;i++){
                sum_player.push('杀手');
            }
            
            for(var i=0;i<number_pep;i++){
                sum_player.push('平民');
            }
            
            shuffle(sum_player);
            
        }else{
            num_killer.innerText = '';
            num_pep.innerText = '';
        }
    };

    go.onclick = function(){
        if(num_player.value >= 4 && num_player.value <= 18){
            var str = JSON.stringify(sum_player);
            sessionStorage.setItem('sum_player',str);
            console.log(str);
            window.location.href = '查看身份.html';
        }else{
            alert('请输入正确的玩家数量');
        }
    }
}