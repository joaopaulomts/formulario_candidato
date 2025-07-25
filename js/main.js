// Arquivo principal que coordena todas as funcionalidades do sistema.

import { validateEmail, validateField } from "./validation.js";

import {
  updateCounter,
  updatePreview,
  updateProgress,
  showMessage,
  updateSkillsCounter,
  populateHardSkills,
  populateSoftSkills,
  fillFormWithData,
} from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const hardSkills = [
    "JavaScript",
    "Python",
    "HTML5",
    "CSS3",
    "Typescript",
    "Golang",
  ];
  const softSkills = [
    "Comunicação",
    "Trabalho em equipe",
    "Liderança",
    "Adaptabilidade",
    "Resolução de problemas",
  ];

  const form = document.getElementById("candidate-form");
  const formWrapper = document.getElementById("form-wrapper");
  const saveButton = document.getElementById("save-btn");

  let formData = {
    nome: "",
    email: "",
    graduacao: "",
    instituicao: "",
    hardSkills: [],
    softSkill: "",
  };

  function saveToLocalStorage() {
    try {
      localStorage.setItem("formulario_candidato", JSON.stringify(formData));
      showMessage("Dados salvos com sucesso! 💾", "success");
    } catch (error) {
      showMessage("Erro ao salvar dados. 😞", "error");
    }
  }

  function loadFromLocalStorage() {
    try {
      const saved = localStorage.getItem("formulario_candidato");
      if (saved) {
        formData = JSON.parse(saved);
        fillFormWithData(formData, updateFunctions);
        updatePreview(formData);
        updateProgress(formData);
        showMessage("Dados carregados com sucesso! 📥", "success");
      }
    } catch (error) {
      showMessage("Erro ao carregar dados. 😞", "error");
    }
  }

  const updateFunctions = {
    counter: updateCounter,
    preview: updatePreview,
    progress: updateProgress,
    skillsCounter: updateSkillsCounter,
  };

  function setupEventListeners() {
    const textFields = ["nome", "email", "graduacao", "instituicao"];

    textFields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);

      field.addEventListener("input", (e) => {
        const value = e.target.value;

        formData[fieldId] = value;

        if (fieldId === "nome") updateCounter(fieldId, 50);
        if (fieldId === "graduacao" || fieldId === "instituicao")
          updateCounter(fieldId, 100);

        updatePreview(formData);
        updateProgress(formData);
      });

      field.addEventListener("blur", (e) => {
        validateField(fieldId, e.target.value);
      });
    });

    const emailField = document.getElementById("email");
    const emailStatus = document.getElementById("email-status");

    emailField.addEventListener("input", (e) => {
      const email = e.target.value;
      if (email && validateEmail(email)) {
        emailStatus.textContent = "✅ Email válido";
        emailStatus.className = "text-green-500 text-xs";
      } else if (email) {
        emailStatus.textContent = "❌ Email inválido";
        emailStatus.className = "text-red-500 text-xs";
      } else {
        emailStatus.textContent = "";
        emailStatus.className = "text-gray-400 text-xs";
      }
    });

    saveButton.addEventListener("click", saveToLocalStorage);
    form.addEventListener("submit", handleFormSubmit);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const nomeInput = document.getElementById("nome");
    const nome = nomeInput.value;

    if (nome.trim() !== "") {
      const isNomeValid = validateField("nome", nome);
      const isEmailValid = validateField("email", formData.email);

      if (isNomeValid && isEmailValid) {
        localStorage.removeItem("formulario_candidato");

        form.remove();

        const successMessage = document.createElement("div");
        successMessage.className = "text-center p-8 slide-up";
        successMessage.innerHTML = `
          <h2 class="text-2xl font-bold text-green-600 mb-4">Obrigado, ${nome}!</h2>
          <p class="text-gray-600 mb-4">Seu currículo foi enviado com sucesso. Entraremos em contato em breve.</p>
          <div class="text-sm text-gray-500">
            <p>📧 Email: ${formData.email}</p>
            <p>🎓 Graduação: ${formData.graduacao || "Não informado"}</p>
            <p>🏫 Instituição: ${formData.instituicao || "Não informado"}</p>
            <p>💻 Skills: ${
              formData.hardSkills.length > 0
                ? formData.hardSkills.join(", ")
                : "Nenhuma selecionada"
            }</p>
            <p>🌟 Soft Skill: ${formData.softSkill || "Não selecionada"}</p>
          </div>
        `;

        const footer = formWrapper.querySelector("footer");
        formWrapper.insertBefore(successMessage, footer);
      } else {
        showMessage("Por favor, corrija os erros no formulário", "error");
      }
    } else {
      showMessage('Por favor, preencha o campo "Nome Completo"', "error");
      nomeInput.focus();
    }
  }

  // --- INICIALIZAÇÃO ---
  populateHardSkills(hardSkills, formData, updateFunctions);
  populateSoftSkills(softSkills, formData, updateFunctions);
  setupEventListeners();
  loadFromLocalStorage(); // Carrega os dados salvos ao iniciar

  // Atualizar contadores iniciais
  updateCounter("nome", 50);
  updateCounter("graduacao", 100);
  updateCounter("instituicao", 100);
  updateSkillsCounter(formData);
  updatePreview(formData);
  updateProgress(formData);
});
