// Nascondi tutte le foto
function nascondiTutteLeFoto() {
    var tutteLeFoto = document.getElementsByClassName('foto');
    for (var i = 0; i < tutteLeFoto.length; i++) {
      tutteLeFoto[i].classList.add('nascosta');
    }
  }
  
// Mostra solo le foto con la classe specificata
function mostraFotoPerClasse(stessaClasse) {
  nascondiTutteLeFoto(); // Nascondi tutte le foto prima di mostrare quelle desiderate
  var fotoDaMostrare = document.getElementsByClassName(stessaClasse);
  for (var i = 0; i < fotoDaMostrare.length; i++) {
    fotoDaMostrare[i].classList.remove('nascosta');
  }
}
  
  // Toggle tra l'assegnazione e la rimozione di una classe su un link
function toggleClasse(link, classe) {
  if (link.classList.contains(classe)) {
    link.classList.remove(classe);
  } else {
    link.classList.add(classe);
  }
}

// Rimuovi la classe "active" da tutti i link tranne quello selezionato
function rimuoviClasseActive(daRimuovere, contesto) {
  var links = contesto.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    if (links[i] !== daRimuovere) {
      links[i].classList.remove('active');
    }
  }
}