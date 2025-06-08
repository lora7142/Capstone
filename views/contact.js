import html from "html-literal";
import FB from "url:../assets/img/FB.png";
import IG from "url:../assets/img/IG.png";
import LI from "url:../assets/img/LI.png";

export default () => html`
  <section id="contact">
    <h2>Contact</h2>
    <div><b>Lora Paro</b></div>
    <div>
      <b>E: </b><a href="mailto:loraparo@gmail.com">loraparo@gmail.com</a>
    </div>
    <table>
      <tr>
        <td>
          <a href="https://www.facebook.com/share/1HE3i7kR3d/?mibextid=wwXIfr"
            ><img id="FB" src="${FB}"
          /></a>
        </td>
        <td>
          <a
            href="https://www.instagram.com/lora.paro?igsh=MzJpbmJxZnI1Zmpu&utm_source=qr"
            ><img id="IG" src="${IG}"
          /></a>
        </td>
        <td>
          <a href="www.linkedin.com/in/lora-paro-ma-44b00014"
            ><img id="LI" src="${LI}"
          /></a>
        </td>
      </tr>
    </table>
  </section>
`;
