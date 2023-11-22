let user = { name: "", email: "", category: [] };

function updateUser() {
  user.name = document.getElementById("name").value;
  user.email = document.getElementById("email").value;
  user.category = ["category1", "category2", "category3"]
    .map((id) => {
      const checkbox = document.getElementById(id);
      if (checkbox.checked) {
        return checkbox.value;
      }
      return null;
    })
    .filter((value) => value !== null);
}

function updateStepIndicator(step) {
  const stepIndicator = document.getElementById("step-counter_indicator");
  stepIndicator.innerHTML = "";
  for (let i = 1; i <= 3; i++) {
    const dot = document.createElement("span");
    dot.classList.add("step-counter_indicator-dot");
    if (i < step) {
      dot.classList.add("step-counter_indicator-completed");
    } else if (i === step) {
      dot.classList.add("step-counter_indicator-completed");
      dot.classList.add("step-counter_indicator-active");
    }
    stepIndicator.appendChild(dot);
  }
}

function nextStep(event, step) {
  event.preventDefault();
  updateUser();
  document.getElementById("step" + (step - 1)).classList.add("inactive");
  document.getElementById("step" + step).classList.remove("inactive");

  const stepCounter = document.getElementById("step-counter_text");
  stepCounter.innerText = step;

  updateStepIndicator(step);

  if (step === 3) {
    const summaryName = document.getElementById("summary-name");
    summaryName.innerText = user.name;
    const summaryEmail = document.getElementById("summary-email");
    summaryEmail.innerText = user.email;
    const summaryCategory = document.getElementById("summary-category");
    summaryCategory.innerHTML = user.category
      .map((category) => `<li>${category}</li>`)
      .join("");
  }
}

updateStepIndicator(1);
