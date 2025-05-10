/* Menu Burguer */
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a'); /* Permet au menu de se refermer aprés un click sur un lien */
  
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

     // Fermer le menu et retirer la croix après clic sur un lien
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
      });
    });
  });
/* Mail de contact */
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