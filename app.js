function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID "resultado-pesquisa"
    let section = document.getElementById("resultado-pesquisa");
  
    // Obtém o valor do campo de pesquisa
    let campPesquisa = document.getElementById("camp").value;
    console.log(campPesquisa);
  
    // Limpa o conteúdo anterior da seção

    if(!campPesquisa){
        section.innerHTML = "<p>nada foi encontrado</p>"
        return
    }

    campPesquisa = campPesquisa.toLowerCase()

    let titulo = "";
    let descricao = "";
    let tags = "";


    section.innerHTML = "";
  
    // Itera sobre cada objeto dentro do array "dados"
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
      // Verifica se o título contém a palavra pesquisada
      if (titulo.includes(campPesquisa) || descricao.includes(campPesquisa) || tags.includes(campPesquisa)) {
        // Cria uma string para armazenar o HTML de cada resultado
        let resultados = `
          <div class="item-resultado">
            <h1> <a href="#" target="_blank">${dado.titulo}</a></h1>
            <h3>atleta favorito</h3>
            <p class="descricao-meta">${dado.descricao} </p>
            <a href="${dado.link}" target="_blank">click aqui para mais informações</a>
          </div>
        `;
        // Adiciona o resultado à seção
        section.innerHTML += resultados;
      }
    }
    if(!resultados){
        resultados = "<p>nada foi encontrado</p>"
    }
  }
  