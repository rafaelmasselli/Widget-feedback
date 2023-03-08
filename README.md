<h1 align="center"> ⚡ Projeto widget ⚡</h1>

## Descrição

Um widget de feedback que permite aos usuários enviar comentários ou sugestões através de um formulário online, que é processado e encaminhado automaticamente para um endereço de e-mail virtual específico. Isso ajuda a melhorar a comunicação e a eficiência do processo de feedback.

![gif do widget dando um feedback](/.github/WidgetDoProjeto.gif)

## 📝 Requisitos

 para iniciar o projeto você vai precisar do <a href="https://nodejs.org/en/" target="_blank">Node js</a> para inicializar e do <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable" target="_blank">yarn</a> para instalar e iniciar o projeto

 para iniciar o projeto mobile e recomendado usar o <a href="https://expo.dev" target="_blank">expo</a>

 Para clonar o projeto você vai precisar do <a href="https://git-scm.com" target="_blank">git</a>

IDE para mexer no código : <a href="https://code.visualstudio.com" target="_blank">Vscode</a>

## Ferramentas usadas no desenvolvimento

- [x] React TS
- [x] React native TS
- [x] Node TS

## 🎲 Inciando o projeto

```bash
# Clonando o projeto
$ git clone https://github.com/rafaemasselli/WidgetFeedback

# Para iniciar o projeto você vai precisa do back-end rodando primeiro
# Entre na pasta server
$ cd server

# Instales as dependências
$ yarn

# Agora crie o banco sqlite
$ yarn prisma migrate:dev

# Agora inicie o back-end
$ yarn dev
```

### Agora entre em alguma das pastas "web" ou "mobile"

```bash
#  Instale as dependências

# mobile
$ expo install

# web
$ yarn

# Inicie o projeto

# mobile
$ expo start

# web
$ yarn dev
```

## Dependências usadas na web

- [x] axios
- [x] html2canvas
- [x] phosphor-react
- [x] vite

## Dependências usadas no mobile

- [x] expo
- [x] expo-file-system
- [x] react native iphone x helper
- [x] react native gesture handler
- [x] react native reanimated
- [x] react native view shot

## Dependências usadas no server

- [x] express
- [x] nodemailer
- [x] prisma
- [x] ts-node
- [x] ts-node-dev
