const preservar = document.querySelector(".preservar");
const botaoSalvar = document.querySelector("#b2");
const tituloDoProjeto = document.querySelector("#text1");
const descricaoDoProjeto = document.querySelector("#text2");
const corDoProjeto = document.querySelector("#b1");
const pegaLinguagem = document.querySelector(".linguagem");
const areaCdg = document.querySelector("#parteCode");

const mudaCor = document.getElementById('b1')
const mudaFundo = document.getElementById('caixa')
const bordaDoCard = document.getElementById('bordaDoCard') 

corDoProjeto.addEventListener("input", function (evento) {
	let corzinha = evento.target.value;
	preservar.style = `background: ${corzinha}`;
}); 

// preservar.addEventListener("change", (evento) => {
//     let mudaraCor = evento.target.value; 
//     bordaDoCard.style = `background: ${mudaraCor}`
// })


function criarProjeto() {
	var projetinho = {
		// id: atribuiID(), // vou criar
		detalhesDoProjeto: {
			nome: tituloDoProjeto.value,
			descricao: descricaoDoProjeto.value,
			cor: corDoProjeto.style.backgroundcolor,
			language: pegaLinguagem.value,
			code: areaCdg.querySelector("code").innerText,
		},
	};

    let corDoCard = document.querySelector(".preservar").style.backgroundColor;
    !corDoCard ? corDoCard = '#6BD1FF' : null 
    let codee = document.querySelector('#parteCode').innerText; 

    let lingua = document.querySelector('.linguagem').value

	console.log("projetinho", projetinho);

        $("#cardsCriados").append(`<div class="cardizins">  
    <div id="bordaDoCard" style="background: ${corDoCard};">
        <div class="barraSuperior">
            <div id="vermelho">
            <img src="../imagens/vermelho.png" alt="">
            </div>
            <div id="amarelo">
                <img src="../imagens/amarelo.png" alt="">
            </div>
            <div id="verde">
                <img src="../imagens/verde.png" alt="">
            </div>
        </div id="recebeConteudo">
            <code class="preview-hljs ${pegaLinguagem.value} hljs language-${lingua}" contenteditable="true" aria-label="Editor de código">${codee}</code>
        </div>
        
        <div onmouseover="mOver(this)" onmouseout="mOut(this)" id="descritivo">
            <div id="descricaoProjeto" >
                <h1>${projetinho.detalhesDoProjeto.nome}<h1>
                <p>${projetinho.detalhesDoProjeto.descricao}<p> 
            </div>
            <img src="../imagens/comentario.png" id="comentario">
            <img src="../imagens/coracao.png" id="coracao">
    </div>`);

    if (projetinho.detalhesDoProjeto.nome == '') {
        alert('Informe o nome do projeto.')
        return false
    } else if (projetinho.detalhesDoProjeto.descricao == '') {
        alert('Por favor descreva o seu projeto.')
        return false
     } else if (codee == '') {
          alert('Desculpe, não encontramos código no seu projeto.')
          return false
    }
}

botaoSalvar.addEventListener("click", function (evento) {
	 criarProjeto();
     console.log(clicks);
});

var clicks = 0;
console.log(clicks);

const botaoVaiParaComunidade = document.querySelector("#comunidadeBot");
const botaoVaiParaEditor = document.querySelector("#editorBot");
const divLimpa = document.querySelector(".caixaDeTexto");
const recebeCard = document.querySelector("#cardsCriados");

botaoVaiParaComunidade.addEventListener("click", (evento) => {
	document.querySelector(".caixaDeTexto").style.display = "none";
	document.querySelector("#contemCards").style.display = "block";
});

botaoVaiParaEditor.addEventListener("click", (evento) => {
	document.querySelector(".caixaDeTexto").style.display = "block";
	document.querySelector("#contemCards").style.display = "none";
});

{/* <textarea id="conteudoInserido" class="preview-hljs ${lingua}"> ${codee}</textarea> */}