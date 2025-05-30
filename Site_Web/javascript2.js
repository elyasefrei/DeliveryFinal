document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  const utilisateur = localStorage.getItem("user_" + email);

  if (!utilisateur) {
    alert("Aucun compte trouvé avec cet email.");
    return;
  }

  const userData = JSON.parse(utilisateur);

  if (userData.password === password) {
    alert("Connexion réussie, bon retour " + userData.prenom + " !");
    // Tu peux maintenant rediriger vers la page d'accueil ou une page "dashboard"
    window.location.href = "../html/Accueil.html";
  } else {
    alert("Mot de passe incorrect.");
  }
});