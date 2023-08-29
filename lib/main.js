document.addEventListener("DOMContentLoaded", function () {
  brIco = document.getElementById("br-lang");

  enIco = document.getElementById("en-lang");

  function translate(lang) {
    if (lang === "en") {
      overviewComponent = document.getElementById("overview");

      overviewComponent.innerHTML =
        "In search of professional realignment " +
        "based on my academy collation and professional experience. " +
        "A young enthusiastic, in the journey of knowledgment and networking." +
        "<br> <span class='joke'>" +
        " <a href='https://ko-fi.com/matheusdsm' target='_blank'> " +
        "Can you buy me a coffee? :) </a> </span>";

      gradeComponent = document.getElementById("graduations");

      gradeComponent.innerHTML =
        "<hr>" +
        "<h1>Academy Education</h1>" +
        "<hr>" +
        "•	ETEC <b>(Escola Técnica Estadual de Itanhaém)</b>, " +
        " Class: <b>Web Developer</b>, " +
        "<b>Conclusion: 2016.</b> <br> <br>" +
        "•	ETEC <b>(Escola Técnica Estadual de Itanhaém)</b>, " +
        " Class: <b>Systems Development</b>, " +
        "<b>Conclusion: 2023.</b>" +
        "<hr>" +
        "<h1>Certifies / Extracurricular Courses</h1>" +
        "<hr>" +
        '<img src="images/curso-midias-digitais-ufes.jpg" height="300" alt="Certified in Social Midia Communication by UFES." srcset="">' +
        '<img src="images/curso-introducao-desenvolvimento-moderno.jpg" height="300" alt="Certified in Modern Software Developement by DIO." srcset="">' +
        '<img src="images/curso-educacao-financeira-enap.jpg" height="300" alt="Certified in Finanical Education by ENAP." srcset="">' +
        '<img src="images/curso-banco-de-dados-ifsul.jpg" height="300" alt="Certified in Database by IFSul." srcset="">';

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
