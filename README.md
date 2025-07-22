# 📝 Formulário de Candidato Interativo

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

## 🎯 Sobre o Projeto

Um formulário de candidato moderno e responsivo desenvolvido com HTML, CSS e JS Vanilla, utilizando Tailwind CSS para um design elegante e profissional. O formulário permite que candidatos enviem suas informações pessoais, formação acadêmica, habilidades técnicas e soft skills de forma intuitiva e organizada.

## ✨ Funcionalidades

- 📋 **Formulário Completo**: Coleta informações pessoais, acadêmicas e profissionais
- 🎨 **Design Responsivo**: Adapta-se perfeitamente a diferentes tamanhos de tela
- 🎯 **Interface Moderna**: Design limpo e profissional com Tailwind CSS
- 📱 **Mobile-First**: Otimizado para dispositivos móveis
- 🎨 **Animações Suaves**: Transições e efeitos visuais elegantes
- 📤 **Upload de Arquivos**: Suporte para envio de foto de perfil e currículo em PDF
- ✅ **Design Limpo**: Interface moderna sem dependências de JavaScript

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização avançada e responsiva
- **JavaScript (Vanilla)** - Interatividade e manipulação DOM
- **Tailwind CSS** - Framework CSS utilitário para design rápido
- **Google Fonts (Inter)** - Tipografia moderna e legível

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/formulario_candidato_html_tailwind.git
   cd formulario_candidato_html_tailwind
   ```

2. **Abra o arquivo**

   - Simplesmente abra o arquivo `index.html` em seu navegador
   - Ou use um servidor local:

   ```bash
   # Com Python
   python -m http.server 8000

   # Com Node.js (se tiver o http-server instalado)
   npx http-server
   ```

3. **Acesse no navegador**
   - Abra `http://localhost:8000` (se usando servidor local)
   - Ou abra diretamente o arquivo `index.html`

## 📁 Estrutura do Projeto

```
formulario_candidato/
├── index.html          # Arquivo principal do formulário
├── README.md           # Este arquivo
├── package.json        # Configurações do projeto
└── assets/             # Pasta para futuros assets (imagens, etc.)
```

## 🎨 Seções do Formulário

### 📝 Informações Pessoais

- Nome completo
- Endereço de e-mail

### 🎓 Formação Acadêmica

- Graduação
- Instituição de ensino

### 💪 Destaque de Habilidades

- **Hard Skills**: HTML5, CSS3, JavaScript, TypeScript, Python, Golang
- **Soft Skills**: Comunicação, Trabalho em Equipe, Resolução de Problemas, Liderança, Adaptabilidade

## 💻 Conceitos de Programação Demonstrados

### 🔄 **Loops**

```javascript
// Loop forEach para criar elementos dinamicamente
skills.forEach((skill) => {
  const label = document.createElement("label");
  // ... criação do elemento
});
```

### 🔀 **Condicionais**

```javascript
// Verificação condicional de campos
if (nome.trim() !== "") {
  // Processa o formulário
} else {
  // Mostra erro
}
```

### ⚙️ **Funções**

```javascript
// Função para popular hard skills
function populateHardSkills(skills) {
  // Lógica de criação de elementos
}

// Função para lidar com envio
function handleFormSubmit(event) {
  // Lógica de processamento
}
```

### 🎯 **Manipulação DOM**

- **Criar**: `document.createElement()`
- **Ler**: `document.getElementById().value`
- **Atualizar**: `element.innerHTML`, `element.appendChild()`
- **Deletar**: `element.remove()`

## 🎯 Características Técnicas

- **Responsividade**: Grid system adaptativo
- **Acessibilidade**: Labels semânticos e estrutura HTML5
- **Performance**: Carregamento otimizado com CDN
- **UX/UI**: Design moderno com transições CSS
- **Cross-browser**: Compatível com todos os navegadores modernos
- **JavaScript Vanilla**: Sem dependências externas de JS
- **Manipulação DOM**: Criação, leitura, atualização e remoção de elementos

## 🔧 Personalização

O projeto é facilmente personalizável:

- **Cores**: Modifique as variáveis CSS no arquivo `index.html`
- **Fontes**: Altere a fonte do Google Fonts
- **Campos**: Adicione ou remova campos conforme necessário
- **Estilo**: Personalize as classes do Tailwind CSS
- **Funcionalidades**: Adicione novas interações JavaScript
- **Habilidades**: Modifique as arrays `hardSkills` e `softSkills`

## 🎓 Aprendizado

Este projeto demonstra:

1. **Fundamentos JavaScript**: Loops, condicionais, funções
2. **Manipulação DOM**: CRUD de elementos HTML
3. **Event Handling**: Listeners de eventos
4. **CSS Moderno**: Tailwind CSS e responsividade
5. **HTML Semântico**: Estrutura acessível e bem organizada

## 🙏 Agradecimentos

- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS incrível
- [Google Fonts](https://fonts.google.com/) - Tipografia de qualidade
- [MDN Web Docs](https://developer.mozilla.org/) - Documentação JavaScript

---

<div align="center">

⭐ **Se este projeto te ajudou, considere dar uma estrela!** ⭐

</div>
