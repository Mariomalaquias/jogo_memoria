# Jogo da Memória

Este projeto é um jogo da memória desenvolvido usando [Next.js](https://nextjs.org), um popular framework React. O aplicativo foi criado como parte do curso da B7Web, que foca no ensino de técnicas modernas de desenvolvimento web.

## Desenvolvimento

O desenvolvimento deste jogo da memória envolveu várias etapas importantes:

1. **Configuração do Projeto**: O projeto foi iniciado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), fornecendo uma base sólida para construir uma aplicação Next.js.

2. **Arquitetura Baseada em Componentes**: O aplicativo é construído usando componentes React, tornando o código modular, reutilizável e mais fácil de manter.

3. **Estilização**: A interface do jogo é estilizada usando módulos CSS, garantindo que os estilos sejam limitados a componentes individuais e não vazem para outras partes da aplicação.

4. **Gerenciamento de Estado**: O estado do jogo é gerenciado usando os recursos de gerenciamento de estado embutidos do React, como os hooks `useState` e `useEffect`.

5. **Lógica do Jogo**: A lógica central do jogo da memória, incluindo embaralhamento de cartas, lógica de correspondência e funcionalidade de reinicialização do jogo, é implementada em JavaScript.

## Tecnologias Utilizadas

- **Next.js**: Um framework React para construir aplicações web renderizadas no servidor e geradas estaticamente.
- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **JavaScript**: A principal linguagem de programação usada para a lógica do jogo.
- **CSS Modules**: Para estilizar os componentes de forma modular e sustentável.

## Informações do Curso

Este jogo da memória foi desenvolvido como parte do curso da B7Web, que oferece treinamento abrangente em desenvolvimento web moderno. O curso cobre vários tópicos, incluindo:

- Fundamentos de React e Next.js
- Arquitetura baseada em componentes
- Gerenciamento de estado no React
- Técnicas de estilização
- Melhores práticas para construir aplicações web escaláveis

## Começando

Para executar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev