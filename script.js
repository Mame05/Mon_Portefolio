(function(){
    emailjs.init("Cr7OYFwbeYlnYZqfO"); // Ta clé publique
  })();

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

  const form = this;
  const btn = form.querySelector("button");
  const msg = document.getElementById("form-message");

  btn.disabled = true;
  btn.textContent = "Envoi...";

    emailjs.sendForm('gmail_service', 'contact_template', form)
      .then(() => {
      msg.innerHTML = "<i class='fa-solid fa-circle-check'></i> Message envoyé avec succès !";
      msg.style.color = "green";
      msg.classList.add("show");
      form.reset();
    })
    .catch(() => {
      msg.innerHTML = "<i class='fa-solid fa-circle-xmark'></i> Erreur lors de l'envoi. Veuillez réessayer.";
      msg.style.color = "red";
      msg.classList.add("show");
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "Envoyer";
      // Retirer le message après 5 secondes (facultatif)
      setTimeout(() => {
        msg.classList.remove("show");
      }, 5000);
    });
});