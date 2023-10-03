console.log(
  `Somos un salón de belleza exclusivamente para mujeres, especializado en uñas, peinados, maquillaje para eventos y relajantes mascarillas. Queremos que nuestras clientas nos encuentren en línea y descubran nuestras ofertas. También tenemos un apartado de 'Trabaja con nosotros' para quienes deseen unirse a nuestro talentoso equipo.`
);

const nav = document.querySelector("nav");

let anchoPantalla =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

console.log(anchoPantalla);

window.addEventListener("resize", () => {
  let anchoPantalla =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  console.log(anchoPantalla);
  if (anchoPantalla > 900) {
    nav.classList = " nav1 ";
  } else {
    nav.classList = " nav2 ";
  }
});
