
# Devnology E-commerce - Guia Completo de Instalação e Execução

Plataforma E-Commerce completa que integra produtos fornecidos por duas API's externas, com opção de pesquisa, filtro, selecionar por categorias, adicionar ao carrinho e finalizar a compra. Todas as compras são persistidas no banco de dados, e o usuário pode ter acesso a sua lista de compras na aplicação. 
O projeto foi estruturado em apenas um repositório, com as 3 pastas que compõem todos os serviços. São elas: 
- /backend
- /devnology-web
- /devnology-mobile


## Pré Requisitos

- [Git](https://git-scm.com/downloads "Git")
- [Node.js 18+](https://nodejs.org/ "NodeJs")
- [Android Studio](https://developer.android.com/studio "Android Studio") (necessário para versão mobile, pode ser outro emulador android também)
- [Java JDK 11+](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html "Java JDK")


## Portas Utilizadas
| Serviço   | Porta       | 
| :---------- | :--------- | 
| `Backend` | `localhost:3000` |
| `Frontend Web (Vite)` | `localhost:5173` | 
## Passo a passo para execução

### 1. Clone o projeto

```bash
  git clone https://github.com/seu-usuario/devnology-ecommerce.git
  cd devnology-ecommerce
```
### 2. Configurar e executar o Backend (NestJS)

```bash
  cd backend
  npm install
  npm run start
```
### 3. Configurar e executar o Frontend Web (React + Vite)

Em um novo terminal na pasta do repositório:
```bash
  cd devnology-web
  npm install
  npm run dev
```

### 4. Configurar e executar o App Mobile (Flutter)

#### Configuração do ambiente mobile

Testado com os seguintes componentes instalados no Android Studio, mas deve rodar com outras SDK's ou API's também:
 - Android Emulator
 - Android Emulator
 - Android Emulator Hypervisor Driver
 - Android SDK Build-Tools 35+
 - Android SDK Platform-Tools
 - Google Play Intel x86_64 Atom System Image
 - Sources for Android 35

Com o emulador já aberto, em um novo terminal na pasta do repositório digite:
```bash
  cd devnology-mobile
  flutter pub get
  flutter run
```


## Decisões técnicas

A proposta do teste era uma aplicação completa, incluindo um sistema web e uma aplicação mobile integradas ao mesmo backend, para utilização em ambos dispositivos. O backend foi desenvolvido em Nest por pura curiosidade, já trabalhava anteriormente com Node e tive certa facilidade de compreender e aplicar os conceitos em Nest para esse projeto, que tinha um backend simples. O banco de dados escolhido para persistência das informações foi o SQLite, um banco simples para uma aplicação simples, porém funcional. 
Para o desenvolvimento da aplicação Web, foi escolhido o básico Vite + React, com react-router-dom para navegação fluída entre as páginas e estilizado com a ajuda do Tailwind.
Para o mobile, desenvolvi a aplicação em Flutter como sugerido, tentando trazer o máximo da identidade visual aplicada na versão Web para o mobile, dando a impressão correta de se tratar do mesmo serviço em dispositivos diferentes. Como não possuía muita experiência em Flutter, desenvolvi o básico e tentei entender ao máximo os conceitos dos Widgets e como aplicar as propriedades e como utilizar a hierarquia corretamente. 
Foi uma jornada completa para construir esses 3 serviços que trabalham juntos, em pouco tempo, foi desafiador porém o resultado final foi bem recompensador. Obrigado pela oportunidade! 

