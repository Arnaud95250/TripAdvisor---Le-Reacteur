const $ = document;


$.addEventListener("DOMContentLoaded", () => {
    console.log("Page chargée"); // permet de savoir si ma page est bien chargé
  
    //   Détecter le click n'importe où sur la page
    $.addEventListener("click", () => {
        // console.log("click !!");
    });


    $.querySelector("#openMyModal").addEventListener("click", () => {
        //   Modifier la classe de la balise p
        $.querySelector(".hidden").classList.add("display");
      });

      $.querySelector("#openMyModal2").addEventListener("click", () => {
        //   Modifier la classe de la balise p
        $.querySelector(".hidden").classList.add("display");
      });
    
      $.querySelector("#closeMyModal").addEventListener("click", () => {
        $.querySelector(".hidden").classList.remove("display");
      });


    //   Ecoute de la soumission du formulaire
    $.querySelector("#contact-form").addEventListener("submit", async (event) => {
      console.log("Soumission du formulaire"); // je soumet mon formulaire au moment ou je clique sur mon bonton submit
  
      // Annule le comportement par défaut du formulaire (cad, le rafraîchissement de la page)
      event.preventDefault();
  
      // Les données du formulaire
      const data = {
        firstname: $.querySelector("#firstname").value,
        lastname: $.querySelector("#lastname").value,
        email: $.querySelector("#email").value,
        message: $.querySelector("#message").value,
      };
  
      console.log(data); // J'affiche le contenue de mon objet data dans la console de l'inspecteur
      const reponse = await axios.post("http://localhost:3000/get_formulaire", data);
        console.log(reponse);

        if(reponse.status === 200){
            alert("le formulaire à bien été envoyé")
        } else{
            alert("erreur")
        }
  });

function hide(){
    result = document.getElementById('div').style.display='none'; 
return result;
}

});
