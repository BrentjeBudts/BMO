document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactformulier");
  const status = document.getElementById("formulier-status");
  const submitButton = form.querySelector('button[type="submit"]');
  
  form.addEventListener("submit", async (event) => {
  event.preventDefault();
  

  status.textContent = "Uw bericht wordt verzonden...";
  submitButton.disabled = true;
  
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form)
    });
  
    const result = await response.json();
  
    if (response.ok && result.success) {
      status.textContent = "Bedankt! Uw bericht is succesvol verzonden.";
      form.reset();
    } else {
      status.textContent =
        "Er ging iets mis bij het verzenden. Probeer het opnieuw.";
    }
  } catch (error) {
    status.textContent =
      "Verzenden is momenteel niet mogelijk. Probeer het later opnieuw.";
  } finally {
    submitButton.disabled = false;
  }
  
  });
  });
  