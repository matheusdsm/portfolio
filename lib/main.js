document.addEventListener("DOMContentLoaded", function () {
  brIco = document.getElementById("br-lang");

  enIco = document.getElementById("en-lang");

  function translate(lang) {
    if (lang === "en") {
      overviewComponent = document.getElementById("overview");

      overviewComponent.innerHTML =
        "In search of professional realignment " +
        "based on my academy collation <br> and professional experience. <hr>" +
        "A young enthusiastic, in the journey of knowledgment and networking." +
        "<br> <span class='joke'> Can you buy me a coffee? :) </span>";

      gradeComponent = document.getElementById("graduations");

      gradeComponent.innerHTML =
        "<h1>Academy Education</h1>" +
        "•	ETEC <b>(Escola Técnica Estadual de Itanhaém)</b>, " +
        " Class: <b>Web Developer</b>, " +
        "<b>Conclusion: 2016.</b> <br>" +
        "•	ETEC <b>(Escola Técnica Estadual de Itanhaém)</b>, " +
        " Class: <b>Systems Development</b>, " +
        "<b>Conclusion: 2023.</b>";

      projects = document.getElementById("projects");

      projects.innerHTML = "Projects";

      others = document.getElementById("others");

      others.innerHTML = "Others Informations";
    }
  }

  enIco.addEventListener("click", function () {
    translate("en");
  });

  brIco.addEventListener("click", function () {
    location.reload();
  });
});
