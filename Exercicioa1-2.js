<button class='botao' id='btnCriar' onClick="gerarQuadrado()">Gerar novo</button>
<div id="app">
    <div class="box"></div>
</div>

<script>
    var btnCriar = document.querySelector('#btnCriar')  
    function gerarQuadrado() {

    var boxElement = document.createElement("div");
    boxElement.style.width = '180px';
    boxElement.style.height = '180px';
    boxElement.style.margin = '10px';
    boxElement.style.backgroundColor = '#f00';

    boxElement.classList.add('box');

    document.body.appendChild(boxElement);
    }    
</script>
