document.addEventListener("DOMContentLoaded", function () {
  brIco = document.getElementById("br-lang");

  enIco = document.getElementById("en-lang");

  function translate(lang) {
    if (lang === "en") {
      overviewComponent = document.getElementById("overview");

      overviewComponent.innerHTML =
        "<p> In search of professional realignment " +
        "based on my academy collation and professional experience. " +
        "A young enthusiastic, in the journey of knowledgment and networking." +
        "<br> <span class='joke'>" +
        " <a href='https://ko-fi.com/matheusdsm' target='_blank'> " + " <p> " +
        "Can you buy me a coffee? :) </p> </a> </span> </p>";

        // •	ETEC <b>(Escola Técnica Estadual de Itanhaém)</b> <br> <br> – Curso: <b>Desenvolvimento de Sistemas;</b> <br> <br> <b>Conclusão: 2023.</b>

      gradeComponent = document.getElementById("graduations");

      gradeComponent.innerHTML =
        "<hr>" +
        "<h1>Academy Education</h1>" +
        "<hr>" +
        "•	ETEC <b>(Escola Técnica Estadual de Itanhaém)</b> <br> <br> " +
        " – Class: <b>Systems Development;</b> <br> <br> " +
        "<b>Conclusion: 2023.</b>" +
        "•	ETEC <b>(Escola Técnica Estadual de Itanhaém)</b> <br> <br> " +
        " – Class: <b>Web Developer;</b> <br> <br> " +
        "<b>Conclusion: 2016.</b> <br> <br>" +
        "<hr>" +
        "<h1>Certificates / Extracurricular Courses</h1>" +
        "<hr>" +
        '<img src="images/curso-midias-digitais-ufes.jpg" alt="Certified in Social Midia Communication by UFES." srcset="">' +
        '<img src="images/curso-introducao-desenvolvimento-moderno.jpg" alt="Certified in Modern Software Developement by DIO." srcset="">' +
        '<img src="images/curso-educacao-financeira-enap.jpg" alt="Certified in Finanical Education by ENAP." srcset="">' +
        '<img src="images/curso-banco-de-dados-ifsul.jpg" alt="Certified in Database by IFSul." srcset="">';

      projects = document.getElementById("projects");

      projects.innerHTML = "Projects";

      others = document.getElementById("others");

      others.innerHTML = "Others Information";
    }
  }

  enIco.addEventListener("click", function () {
    translate("en");
  });

  brIco.addEventListener("click", function () {
    location.reload();
  });
});
