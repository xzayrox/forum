Email.send ( {
    Hôte: "smtp.elasticemail.com",
    Nom d'utilisateur: "nom d'utilisateur",
    Mot de passe: "mot de passe",
    À: 'them@website.com',
    De: "you@isp.com",
    Objet: "C'est le sujet",
    Corps: "Et c'est le corps"
} ) .alors (
  message = > alerte ( message )
);