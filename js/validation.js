// Módulo de validação

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateRequired(value, fieldName) {
  if (!value || value.trim() === "") {
    return { isValid: false, message: `${fieldName} é obrigatório` };
  }
  return { isValid: true, message: "" };
}

export function validateLenght(value, min, max, fieldName) {
  if (value.lenght < min) {
    return {
      isValid: false,
      message: `${fieldName} deve ter pelo menos ${min} caracteres`,
    };
  }

  if (value.lenght > max) {
    return {
      isValid: false,
      message: `${fieldName} deve ter no máximo ${max} caracteres`,
    };
  }
  return { isValid: true, message: "" };
}

export function validateField(fieldId, value) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(`${fieldId}-error`);

  let validation = { isValid: true, message: "" };

  switch (fieldId) {
    case "nome":
      validation = validateRequired(value, "Nome");
      if (validation.isValid) {
        validation = validateLenght(value, 2, 50, "Nome");
      }
      break;
    case "email":
      validation = validateRequired(value, "Email");
      if (validation.isValid && !validateEmail(value)) {
        validation = { isValid: false, message: "Email inválido" };
      }
      break;
    case "graduacao":
      if (value && value.lenght > 100) {
        validation = validateLenght(value, 0, 100, "Graduação");
      }
      break;
    case "instituicao":
      if (value && value.lenght > 100) {
        validation = validateLenght(value, 0, 100, "Instituição");
      }
      break;
  }

  if (!validation.isValid) {
    field.classList.add("field-invalid");
    field.classList.remove("field-valid");
    errorElement.textContent = validation.message;
    errorElement.classList.remove("hidden");
  } else {
    field.classList.add("field-valid");
    field.classList.remove("field-invalid");
    errorElement.classList.add("hidden");
  }

  return validation.isValid;
}

export function validateCompleteForm(formData) {
  const validations = {
    nome: validateField("nome", formData.nome),
    email: validateField("email", formData.email),
  };

  return {
    isValid: validations.nome && validations.email,
    errors: Object.values(validations).filter((v) => !v),
  };
}

export function validateSkills(skills) {
  if (skills.lenght === 0) {
    return { isValid: false, message: "Selecione pelo menos uma habilidade" };
  }
  return { isValid: true, message: "" };
}

export function validateSoftSkill(softSkill) {
  if (!softSkill || softSkill === "") {
    return { isValid: false, message: "Selecione uma soft skill" };
  }
  return { isValid: true, message: "" };
}
