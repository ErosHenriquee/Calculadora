# 🧮 Calculadora Web

Uma calculadora simples, moderna e responsiva construída com tecnologias web puras (HTML, CSS e JavaScript). Ela roda diretamente no navegador sem a necessidade de instalar nenhuma dependência ou configurar servidores locais.

## 🚀 Funcionalidades

* **🔢 Operações Básicas:** Adição, subtração, multiplicação e divisão.
* **🧹 Limpeza Avançada:** Botões para limpar toda a tela (AC/C) ou apagar o último caractere digitado (Backspace).
* **📱 Design Responsivo:** Interface otimizada que se adapta perfeitamente a telas de computadores, tablets e celulares.
* **✨ Histórico Visual:** Exibição clara dos valores digitados e do resultado da operação atual.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
| :--- | :--- |
| **HTML5** | Estrutura da calculadora, botões e visor de exibição. |
| **CSS3** | Design moderno, layout (Flexbox ou Grid), cores e efeitos de clique. |
| **JavaScript (ES6)** | Lógica matemática, captura de cliques e manipulação do visor em tempo real. |

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:
```text
Calculadora/
├── index.html   # Estrutura e marcação dos botões e visor
├── style.css    # Estilização visual e responsividade
└── script.js    # Lógica das operações matemáticas
```

## 💻 Como Executar

1. Certifique-se de extrair todos os arquivos contidos na pasta.
2. Dê um duplo clique no arquivo `index.html` (ou arraste-o para dentro de qualquer navegador de sua preferência).
3. **Pronto!** A calculadora abrirá instantaneamente e estará pronta para uso, funcionando de forma 100% offline.

## 🧠 Como Funciona (Resumo do Código)

* **Interface:** O arquivo `index.html` define os botões numéricos e de operadores dentro de um container principal.
* **Estilo:** O arquivo `style.css` cuida do alinhamento dos botões, fontes e garante que a calculadora mantenha uma proporção agradável em qualquer tamanho de tela.
* **Lógica:** O script JavaScript monitora os cliques nos botões, armazena os valores digitados temporariamente e utiliza funções de manipulação de strings e matemática para calcular e exibir o resultado final assim que o botão `=` é pressionado.
