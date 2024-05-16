# Automação de Testes com Cypress para o Dog Walk
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/wxmariixw/dog-walker-automation-tests/blob/main/README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/wxmariixw/dog-walker-automation-tests/blob/main/README.en.md)

Este projeto consiste em uma automação de testes utilizando Cypress para o site [Dog Walk](https://walkdog.vercel.app/), um site que simula um cadastro para ser Passeador de cachorros.

## Pré-requisitos
- Cypress
- Node.js
- NPM

## Instalação
1. Clone este repositório para o seu ambiente local:
``` bash
git clone https://github.com/wxmariixw/dog-walker-automation-tests.git
```
2. Navegue até o diretório do projeto:
```bash
cd dog-walk-automation-tests
```
3. Instale as dependências do projeto:
```bash
npm install
```
### Documentações úteis
Irei também deixar disponível aqui algumas documentações que podem ser úteis caso falte algum requisito:
- [Cypress](https://www.cypress.io/)
- [NPM](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en)

## Executando os Testes
- Para executar os testes via terminal, utilize o seguinte comando:
```bash
npm run test
```

- Para executar os testes via GUI do Cypress, utilize o seguinte comando:
```bash
npm run gui-test
```

Isso iniciará o Cypress e executará todos os testes.

## Estrutura do Projeto
- cypress/downloads
- cypress/e2e - Onde se encontram todos os planos de testes e2e
- cypress/fixtures - Arquivos de mídia, como imagens e PDFs
- cypress/support - Arquivos de suporte, como configurações e comandos

# Contribuindo
Sinta-se à vontade para contribuir com melhorias neste projeto. Basta criar um fork do repositório, fazer suas alterações e enviar um pull request.
