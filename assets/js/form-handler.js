// Configuration Firebase (remplacez par vos infos)
const firebaseConfig = {
    apiKey: "VOTRE_CLE_API",
    authDomain: "VOTRE_PROJET.firebaseapp.com",
    databaseURL: "https://VOTRE_PROJET.firebaseio.com",
    projectId: "VOTRE_PROJET",
    storageBucket: "",
    messagingSenderId: "NUMERO_SENDER"
};

// Initialisation Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Gestion du formulaire
document.getElementById('inscriptionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nom = e.target.nom.value;
    const email = e.target.email.value;
    
    // Envoi des données
    database.ref('inscriptions/').push({
        nom: nom,
        email: email,
        date: new Date().toISOString()
    })
    .then(() => {
        document.getElementById('inscriptionForm').classList.add('hidden');
        document.getElementById('confirmation').classList.remove('hidden');
    })
    .catch((error) => {
        console.error("Erreur : ", error);
        alert("Une erreur est survenue");
    });
});
