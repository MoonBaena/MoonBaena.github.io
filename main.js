let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #5C5CEF;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #5C5CEF;">Estudiante de Ingeniería en Aeronáutica y aprendiendo sobre Robótica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
