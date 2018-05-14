// Fonction de désactivation de l'affichage des "tooltips"

function cacherErreur() {

    var erreurs = document.querySelectorAll('.erreur'),
        taille = erreurs.length;

    for (var i = 0; i < taille; i++) {
        erreurs[i].style.visibility = 'hidden';
    }
	document.getElementById('submit').disabled = true;

}


// La fonction ci-dessous permet de récupérer la "tooltip" qui correspond à notre input

function getErreur(elements) {
	
    while (elements = elements.nextSibling) {
        if (elements.className === 'erreur') {
            return elements;
        }
    }

    return false;

}


// Fonctions de vérification du formulaire, elles renvoient "true" si tout est ok
var nbErreur = 0;
var check = {}; // On met toutes nos fonctions dans un objet littéral
var nomFaux = false;
var prenomFaux = false;
var loginFaux = false;
var mdpFaux = false;
var mdpVerifFaux = false;
var mailFaux = false;

function checkErreur(){
	if(nbErreur > 0){
		document.getElementById('submit').disabled = true;
	}else{
		document.getElementById('submit').disabled = false;
	}
}

check['lastname'] = function(id) {

    var nom = document.getElementById(id),
        erreur = getErreur(nom).style;

    if (nom.value.length >= 1) {
        nom.className = 'correct';
        erreur.visibility = 'hidden';
		
		if(nomFaux == true){
			nbErreur = nbErreur -1;
			nomFaux = false;
		}
		checkErreur();
        return true;
    } else {
        nom.className = 'incorrect';
        erreur.visibility = 'visible';
		document.getElementById('submit').disabled = true;
		if(nomFaux == false){
			nbErreur = nbErreur +1;
			nomFaux = true;
		}
		checkErreur();
        return false;
    }

};

check['firstname'] = check['lastname']; // La fonction pour le prénom est la même que celle du nom


check['username'] = function() {

    var login = document.getElementById('username'),
        erreur = getErreur(login).style;

    if (login.value.length >= 6) {
        login.className = 'correct';
        erreur.visibility = 'hidden';
		if(loginFaux == true){
			nbErreur = nbErreur -1;
			loginFaux = false;
		}
		checkErreur();
        return true;
    } else {
        login.className = 'incorrect';
        erreur.visibility = 'visible';
		if(loginFaux == false){
			nbErreur = nbErreur +1;
			loginFaux = true;
		}
		checkErreur();
        return false;
    }

};

check['userpwd'] = function() {

    var mdp = document.getElementById('userpwd'),
        erreur = getErreur(mdp).style;
		
	var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#$@!%&*?]{8,}/;

    if (regex.test(mdp.value)) {
        mdp.className = 'correct';
        erreur.visibility = 'hidden';
		if(mdpFaux == true){
			nbErreur = nbErreur -1;
			mdpFaux = false;
		}
		checkErreur();
        return true;
    } else {
        mdp.className = 'incorrect';
        erreur.visibility = 'visible';
		if(mdpFaux == false){
			nbErreur = nbErreur +1;
			mdpFaux = true;
		}
		checkErreur();
        return false;
    }

};

check['mdpVerif'] = function() {

    var mdp = document.getElementById('userpwd'),
        mdpVerif = document.getElementById('mdpVerif'),
        erreur = getErreur(mdpVerif).style;

    if (mdp.value == mdpVerif.value && mdpVerif.value != '') {
        mdpVerif.className = 'correct';
        erreur.visibility = 'hidden';
		if(mdpVerifFaux == true){
			nbErreur = nbErreur -1;
			mdpVerifFaux = false;
		}
		checkErreur();
        return true;
    } else {
        mdpVerif.className = 'incorrect';
        erreur.visibility = 'visible';
		if(mdpVerifFaux == false){
			nbErreur = nbErreur +1;
			mdpVerifFaux = true;
		}
		checkErreur();
        return false;
    }

};

check['useremail'] = function() {

    var mail = document.getElementById('useremail'),
        erreur = getErreur(mail).style;

    if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(mail.value)) {
		mail.className = 'correct';
        erreur.visibility = 'hidden';
		if(mailFaux== true){
			nbErreur = nbErreur -1;
			mailFaux = false;
		}
		checkErreur();
        return true;
    } else {
		mail.className = 'incorrect';
        erreur.visibility = 'visible';
		if(mailFaux == false){
			nbErreur = nbErreur +1;
			mailFaux = true;
		}
		checkErreur();
        return false;
    }

};


// Mise en place des événements

(function() { // Utilisation d'une IIFE pour éviter les variables globales.

    var myForm = document.getElementById('form'),
        inputs = document.querySelectorAll('input[type=text], input[type=password]'),
        inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
        inputs[i].addEventListener('keyup', function(e) {
            check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
        });
    }
/*
    myForm.addEventListener('submit', function(e) {

        var result = true;

        for (var i in check) {
            result = check[i](i) && result;
        }

        if (result) {
            
        }

      //  e.preventDefault();

    });

  */ 

})();



cacherErreur();