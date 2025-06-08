import html from "html-literal";
import LoraProfile from "url:../assets/img/profile.jpg";

export default () => html`
  <section id="about">
    <img class="headshot" src="${LoraProfile}" alt="Lora Paro Headshot" />
    <h2>About Me</h2>
    <p>
      I like a challenge and thrive when there’s a problem to solve. Learning
      new skills and software is no sweat! I once learned to use two different
      3D modeling programs within two months. Phew! During the pandemic I took
      up leather craft to challenge myself. I have created some cool pieces and
      am still learning something new every day.
    </p>
    <p>
      I’ve lived in St. Louis all my life. I even stayed local for university.
      Go LU Lions! When the weather is nice, you can catch me walking around the
      park, biking, playing pickleball, tennis or volleyball. I look forward to
      the summer when bands come to town and I can catch a live show. I also
      enjoy gardening and experimenting with different plants every year.
    </p>
    <h2>Interests</h2>
    <p>
      I like to bike, play tennis, play pickle ball, play volleyball, workout,
      garden, leather craft, and listen to music.
    </p>
  </section>
`;
