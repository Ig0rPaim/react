import { useEffect, useState } from "react";

function Nutricao(){
    const [dicas, setDicas] = useState([]);
    useEffect(()=>{
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        fetch(url).then((response)=> response.json()).then((myjson) => {
            setDicas(myjson);
        }).catch(()=>{
            alert("erro ao consultar");
        })
    }, []);

    return(
        <div>
           <header>
            <strong>React Nutri</strong>
            </header>
            {dicas.map((item)=>{
                return(
                <article key={item.id} className="post">
                <strong className="titulo">{item.titulo}</strong>
                <img src={item.capa} alt={item.titulo} className="capa" />
                <p className="subtitulo">
                {item.subtitulo}
                </p>
                <a className="botao">Acessar</a>
                </article>
                )
            })}
        </div>
    );

}export default Nutricao;

// A API `fetch` é uma interface moderna em JavaScript usada para fazer requisições HTTP assíncronas no navegador. Ela permite que você busque recursos como dados de APIs de forma simples e eficiente, substituindo as antigas APIs baseadas em `XMLHttpRequest`.

// ### Principais Características da API `fetch`:

// 1. **Promessas**: A API `fetch` usa Promises, o que facilita o manuseio de requisições assíncronas. Com Promises, você pode usar métodos como `.then()` e `.catch()` para lidar com o sucesso e o erro da requisição, tornando o código mais legível e fácil de manter.

// 2. **Sintaxe Simples**: A sintaxe da `fetch` é mais direta e limpa comparada ao `XMLHttpRequest`. A `fetch` retorna um objeto `Response` que contém métodos para ler o conteúdo da resposta, como `json()`, `text()`, `blob()`, entre outros.

// 3. **Suporte a Métodos HTTP**: A `fetch` suporta todos os métodos HTTP (GET, POST, PUT, DELETE, etc.), permitindo a realização de diferentes tipos de operações.

// 4. **Customização das Requisições**: A `fetch` aceita um segundo argumento opcional que é um objeto de configuração, permitindo personalizar a requisição (definir cabeçalhos, método HTTP, corpo da requisição, modo de autenticação, etc.).

// ### Exemplo de Uso Básico:

// Aqui está um exemplo básico de como usar `fetch` para fazer uma requisição GET:

// ```javascript
// fetch('https://api.exemplo.com/dados')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Erro na requisição');
//     }
//     return response.json(); // Converte a resposta para JSON
//   })
//   .then(data => {
//     console.log(data); // Manipula os dados recebidos
//   })
//   .catch(error => {
//     console.error('Erro ao buscar os dados:', error);
//   });
// ```

// ### Explicação do Código:

// - **`fetch('https://api.exemplo.com/dados')`**: Faz uma requisição GET para o URL especificado.
// - **`.then(response => response.json())`**: Converte a resposta para JSON, que é uma operação assíncrona. 
// - **`.catch(error => {...})`**: Captura qualquer erro que ocorrer durante a requisição ou durante o processamento da resposta.

// ### Exemplos de Configurações Avançadas:

// #### Requisição POST com Configuração:

// ```javascript
// fetch('https://api.exemplo.com/dados', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ nome: 'João', idade: 30 })
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Erro ao enviar os dados:', error));
// ```

// ### Explicações sobre o Exemplo POST:

// - **`method: 'POST'`**: Define o método HTTP da requisição.
// - **`headers`**: Define os cabeçalhos da requisição, como o tipo de conteúdo.
// - **`body: JSON.stringify(...)`**: Serializa o corpo da requisição para JSON.

// ### Vantagens da API `fetch`:

// - **Assíncrono e Fácil de Usar**: Usa Promises, o que simplifica o código e melhora a legibilidade.
// - **Maior Controle**: Permite abortar requisições e trabalhar com streams de resposta.
// - **Suporte a Modo CORS**: Suporta requisições cross-origin com controle granular sobre segurança.

// ### Limitações da API `fetch`:

// - **Tratamento de Erros**: A `fetch` apenas rejeita a promessa em falhas de rede; respostas HTTP com status de erro (como 404 ou 500) ainda resolvem a Promise, exigindo verificação adicional.
// - **Falta de Suporte em Alguns Navegadores Mais Antigos**: Embora amplamente suportada, alguns navegadores mais antigos não suportam `fetch`, necessitando polyfills.

// A `fetch` é uma ferramenta poderosa e flexível para trabalhar com requisições HTTP e é amplamente utilizada em aplicações modernas da web para comunicação com servidores e APIs.


//##############################################################################################################################################################################################




// async function postData() {
//     try {
//       const response = await fetch('https://api.exemplo.com/dados', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ nome: 'João', idade: 30 })
//       });
  
//       if (!response.ok) {
//         throw new Error('Erro na requisição');
//       }
  
//       const data = await response.json();
//       console.log('Dados enviados:', data);
//     } catch (error) {
//       console.error('Erro ao enviar os dados:', error);
//     }
//   }
  
//   postData();



  