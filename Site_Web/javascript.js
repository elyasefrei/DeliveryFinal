
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const submitBtn = document.getElementById('submit-btn');
  
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Empêche l'envoi direct du formulaire
    
    // Vérifier que tous les champs sont remplis
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#bdc3c7';
      }
    });
    
    if (!isValid) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    
    // Demande de confirmation
    if (confirm('Êtes-vous sûr de vouloir soumettre ce formulaire ?')) {
      // Soumission du formulaire
      form.submit();
      alert('Formulaire soumis avec succès !');
    } else {
      alert('Soumission annulée.');
    }
  });
});




