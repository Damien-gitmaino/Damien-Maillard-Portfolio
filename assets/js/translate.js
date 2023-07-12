const language = navigator.language || navigator.userLanguage;

if (language === "en-EN" || language === "en") {
    fetch('./assets/json/translate/en.json')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            json.data.forEach(element => document.getElementById(element.id).textContent = element.content);
        })
        .catch(error => {
            console.log('Une erreur s\'est produite lors de l\'importation du fichier JSON :', error);
        });

}