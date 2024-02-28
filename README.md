# BeHouse

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)



> Site para compra, venda e aluguel de residências

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] Opção de salvar tarefa para ver depois
- [ ] Opção de postar novas casas no site
- [ ] Tornar a página responsiva
- [ ] Tarefa 4
- [ ] Tarefa 5

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Possui Node.js instalado no seu computador
- Possui VSCode instalado no seu computador

## 🚀 Instalando BeHouse

Para instalar e usar o BeHouse, siga estas etapas:

1- git clone <url do repositório>
2- Dentro do VSCode com o projeto aberto, vai instalar as dependências:
  - npm init para inicializar
  - npm install json-server -g => para instalá-lo globalmente na sua máquina
  - se estiver usando Windows, execute o Windows PowerShell como Administrador e faça essas alterações para poder usar o json-server no seu computador:
    - execute esse comando: Set-ExecutionPolicy RemoteSigned
    - O PowerShell pode solicitar confirmação para realizar a operação. Pressione "S" (Sim) ou "Y" (Yes) dependendo da linguagem do seu terminal e pressione Enter para confirmar.
    - Ao finalizar o uso da aplicação, é uma boa prática reverter a política de execução de scripts para o valor original para garantir a segurança do sistema. Você pode fazer
      isso definindo a política de execução de volta para "Restricted" com o seguinte comando: Set-ExecutionPolicy Restricted
    - Mas caso você queira utilizar o JSON Server novamente, será necessário alterar a política de execução para "RemoteSigned" mais uma vez.
  - Após tudo configurado, coloque o json-server para "assistir" aos dados do arquivo "db.json", que irá simular a API REST. Onde o db.json vai ser como um Banco de dados e
    o json-server vai fazer a função de uma API REST. Para colocar para "assistir" os dados: json-server --watch db.json
  - Após isso ele irá mostrar a porta que está usando, caso seja diferente da que foi usada por mim, altere e aproveite as funcionalidades da aplicação.
  - Tudo está pronto! Considero importante que instale a extensão "Live Server" no seu VSCode, para visualizar a aplicação pelo navegador em tempo real com as mudanças.



