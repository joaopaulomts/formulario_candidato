// 🎨 MÓDULO DE INTERFACE

export function updateCounter(fieldId, maxLength) {
  const field = document.getElementById(fieldId);
  const counter = document.getElementById(`${fieldId}-counter`);
  const currentLength = field.value.length;

  counter.textContent = `${currentLength}/${maxLength}`;

  if (currentLength > maxLength * 0.8) {
    counter.classList.add("text-orange-500");
    counter.classList.remove("text-gray-400");
  } else {
    counter.classList.remove("text-orange-500");
    counter.classList.add("text-gray-400");
  }
}

export function updatePreview(formData) {
  const previewContent = document.getElementById("preview-content");

  if (
    !formData.nome &&
    !formData.email &&
    !formData.graduacao &&
    !formData.instituicao &&
    formData.hardSkills.length === 0 &&
    !formData.softSkill
  ) {
    previewContent.innerHTML =
      '<div class="text-gray-500 italic">Preencha o formulário para ver o preview...</div>';
    return;
  }

  let previewHTML = '<div class="space-y-3">';

  if (formData.nome) {
    previewHTML += `<div><strong>Nome:</strong> ${formData.nome}</div>`;
  }

  if (formData.email) {
    previewHTML += `<div><strong>Email:</strong> ${formData.email}</div>`;
  }

  if (formData.graduacao) {
    previewHTML += `<div><strong>Graduação:</strong> ${formData.graduacao}</div>`;
  }

  if (formData.instituicao) {
    previewHTML += `<div><strong>Instituição:</strong> ${formData.instituicao}</div>`;
  }

  if (formData.hardSkills.length > 0) {
    previewHTML += `<div><strong>Hard Skills:</strong> ${formData.hardSkills.join(
      ", "
    )}</div>`;
  }

  if (formData.softSkill) {
    previewHTML += `<div><strong>Soft Skill:</strong> ${formData.softSkill}</div>`;
  }

  previewHTML += "</div>";

  previewContent.innerHTML = previewHTML;
  previewContent.classList.add("fade-in");
}

export function updateProgress(formData) {
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const submitBtn = document.getElementById("submit-btn");

  const totalFields = 6; // nome, email, graduacao, instituicao, hardSkills, softSkill
  let completedFields = 0;

  if (formData.nome) completedFields++;
  if (formData.email) completedFields++;
  if (formData.graduacao) completedFields++;
  if (formData.instituicao) completedFields++;
  if (formData.hardSkills.length > 0) completedFields++;
  if (formData.softSkill) completedFields++;

  const progress = Math.round((completedFields / totalFields) * 100);

  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${progress}%`;

  if (progress === 100) {
    submitBtn.disabled = false;
    submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.add("opacity-50", "cursor-not-allowed");
  }
}

export function showMessage(message, type = "info") {
  const messageDiv = document.createElement("div");
  messageDiv.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 slide-up`;

  switch (type) {
    case "success":
      messageDiv.className += " bg-green-500 text-white";
      break;
    case "error":
      messageDiv.className += " bg-red-500 text-white";
      break;
    case "info":
      messageDiv.className += " bg-blue-500 text-white";
      break;
  }

  messageDiv.textContent = message;

  document.body.appendChild(messageDiv);

  setTimeout(() => {
    if (messageDiv.parentNode) {
      messageDiv.remove();
    }
  }, 3000);
}

export function updateSkillsCounter(formData) {
  const selectedSkills = formData.hardSkills.length;
  const counterElement = document.getElementById("skills-counter");

  counterElement.textContent = `${selectedSkills} habilidade${
    selectedSkills !== 1 ? "s" : ""
  } selecionada${selectedSkills !== 1 ? "s" : ""}`;

  if (selectedSkills > 0) {
    counterElement.classList.add("text-green-600");
    counterElement.classList.remove("text-gray-500");
  } else {
    counterElement.classList.remove("text-green-600");
    counterElement.classList.add("text-gray-500");
  }
}

export function populateHardSkills(skills, formData, updateFunctions) {
  const hardSkillsContainer = document.getElementById("hard-skills-container");

  skills.forEach((skill) => {
    const label = document.createElement("label");
    label.className =
      "flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors";
    label.innerHTML = `
        <input type="checkbox" name="habilidades" value="${skill.toLowerCase()}" class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
        <span class="text-gray-700">${skill}</span>
    `;

    hardSkillsContainer.appendChild(label);

    const checkbox = label.querySelector("input");
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        if (!formData.hardSkills.includes(skill.toLowerCase())) {
          formData.hardSkills.push(skill.toLowerCase());
        }
      } else {
        formData.hardSkills = formData.hardSkills.filter(
          (s) => s !== skill.toLowerCase()
        );
      }

      updateFunctions.skillsCounter(formData);
      updateFunctions.preview(formData);
      updateFunctions.progress(formData);
    });
  });
}

export function populateSoftSkills(skills, formData, updateFunctions) {
  const softSkillSelect = document.getElementById("soft-skill-select");

  softSkillSelect.innerHTML =
    "<option selected disabled>Escolha uma opção</option>";

  skills.forEach((skill) => {
    const option = document.createElement("option");
    option.value = skill.toLowerCase();
    option.textContent = skill;

    softSkillSelect.appendChild(option);
  });

  softSkillSelect.addEventListener("change", (e) => {
    formData.softSkill = e.target.value;
    updateFunctions.preview(formData);
    updateFunctions.progress(formData);
  });
}

export function fillFormWithData(formData, updateFunctions) {
  document.getElementById("nome").value = formData.nome || "";
  document.getElementById("email").value = formData.email || "";
  document.getElementById("graduacao").value = formData.graduacao || "";
  document.getElementById("instituicao").value = formData.instituicao || "";

  formData.hardSkills.forEach((skill) => {
    const checkbox = document.querySelector(`input[value="${skill}"]`);
    if (checkbox) checkbox.checked = true;
  });

  if (formData.softSkill) {
    document.getElementById("soft-skill-select").value = formData.softSkill;
  }

  updateFunctions.counter("nome", 50);
  updateFunctions.counter("graduacao", 100);
  updateFunctions.counter("instituicao", 100);
  updateFunctions.skillsCounter(formData);
}
