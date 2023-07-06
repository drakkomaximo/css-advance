document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    document.querySelector(
      "#load-iframe-map"
    ).innerHTML = `<iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwindth="0" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3343.683001596476!2d-74.11304927552844!3d4.712337681018795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1688601583002!5m2!1ses!2sco"></iframe>
            `;
  }, 500);
});
