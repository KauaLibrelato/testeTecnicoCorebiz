# Galeria de Arte e Fotografia - Unsplash API

![Exemplo de Interface](https://github.com/user-attachments/assets/48e2f762-ce0d-460b-b805-0d4f44f3c9a2)


Um aplicativo React Native para busca e visualização de fotos de alta qualidade usando a API do Unsplash, com simulação de compra de imagens artísticas.

## 📌 Features

- 🔍 Busca por termos específicos (paisagens, arquitetura, etc.)
- 🖼️ Listagem infinita de imagens
- 📱 Duas telas principais: Pesquisa e Detalhes
- 💳 Simulação de compra com preços fictícios
- 🚀 Performance otimizada com cache e lazy loading

## 🛠️ Tecnologias

**App:**
- React Native
- Expo Go
- TypeScript

**Bibliotecas Principais:**
- Axios - Cliente HTTP
- React Query - Gerenciamento de estado e cache
- React Navigation - Navegação entre telas
- FlashList - Listagem performática
- Expo Image - Exibição otimizada de imagens
- Styled Components - Estilização

**Testes:**
- Jest - Testes unitários

## ⚙️ Configuração do Ambiente

1. **Pré-requisitos**
   - Node.js v22.2.0
   - Expo CLI
   - Yarn ou npm

2. **Instalação**
   ```bash
   git clone https://github.com/KauaLibrelato/testeTecnicoCorebiz.git
   cd testeTecnicoCorebiz
   yarn 
   # Ou
   npm install
   ```

3. **Variáveis de ambiente**
    ```bash
    API_URL=https://api.unsplash.com/
    ACCESS_KEY=sua_chave_aqui
    ```
Obtenha sua chave em: [Unsplash Developers](https://unsplash.com/developers)

## ⚙️ Executando o projeto
1. Iniciar o servidor de desenvolvimento
    ```bash
    yarn start
    ```

## 🧪 Testes (83.3% de cobertura)
1. Para executar testes com e sem relatório de cobertura
    ```bash
    yarn test
    # Para ver cobertura dos testes
    yarn test --coverage
    ```
![image](https://github.com/user-attachments/assets/533bd76c-7463-4e24-9ed5-58b4215e72b4)
![image](https://github.com/user-attachments/assets/c82ad6a2-2f51-4446-9ec4-de2945446f57)


## 📂 Estrutura do Projeto
1. Estrutura principal
    ```bash
    src/
   ├── @types/          # Definições de tipos de imagens e svgs
   ├── assets/          # Arquivos estáticos (imagens, fonts, etc.)
   ├── components/      # Componentes reutilizáveis
   ├── infra/           # Infraestrutura e configurações base
   ├── routes/          # Configuração de navegação e rotas
   ├── screens/         # Telas/páginas do aplicativo
   ├── services/        # Integrações com API e serviços externos
   ├── theme/           # Estilos globais, temas e configurações de design
   ├── utils/           # Utilitários, helpers e funções auxiliares
   ```

2. Outros diretórios importantes
    ```bash
    __mocks__/               # Dados mockados para testes
    __tests__/               # Testes automatizados
    node_modules/        # Dependências do projeto
    ```

3. Arquivos principais
    ```bash
    App.tsx              # Ponto de entrada do aplicativo
    package.json         # Configurações e dependências do projeto
    .env                 # Variáveis de ambiente
    README.md            # Documentação do projeto
    ```

## 📱 Telas

#### 1. Tela de Pesquisa
- Campo de busca
- Listagem infinita de imagens
- Exibição de thumbnails e informações básicas

![IMG-20250324-WA0005](https://github.com/user-attachments/assets/5961a6fd-7caa-479d-a510-3afe5a1b298b)
![IMG-20250324-WA0006](https://github.com/user-attachments/assets/62feb14e-5290-4f66-b22a-a4baa7df92e5)

#### 2. Tela de Detalhes
- Imagem em alta resolução
- Metadados completos (fotógrafo, descrição, categoria)
- Botão de compra com preço fictício

![IMG-20250324-WA0007](https://github.com/user-attachments/assets/020908a3-a366-415a-b959-b674176e013a)
![IMG-20250324-WA0008](https://github.com/user-attachments/assets/d4346976-719b-4e6a-af41-e345c94a1ec5)

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](./LICENSE) para detalhes.

## ✉️ Contato
Kauã Librelato da Costa - kaualibrelatodacosta@gmail.com

Link do Projeto: https://github.com/KauaLibrelato/testeTecnicoCorebiz

