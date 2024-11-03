import styled from 'styled-components';

const FooterSection = styled.section`
  background: #10182F;
  border-radius: 6px;

  .footer-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3.5rem;
    padding: 60px;
  }

  .footer-col {
    h4 {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 400;
    }

    .links {
      margin-top: 20px;

      li {
        list-style: none;
        margin-bottom: 10px;

        a {
          text-decoration: none;
          color: #bfbfbf;
          &:hover {
            color: #fff;
          }
        }
      }
    }

    p {
      margin: 20px 0;
      color: #bfbfbf;
      max-width: 300px;
    }

    form {
      display: flex;
      gap: 5px;

      input {
        height: 40px;
        border-radius: 6px;
        background: none;
        width: 100%;
        outline: none;
        border: 1px solid #7489C6;
        caret-color: #fff;
        color: #fff;
        padding-left: 10px;
        
        &::placeholder {
          color: #ccc;
        }
      }

      button {
        background: #fff;
        outline: none;
        border: none;
        padding: 10px 15px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        transition: 0.2s ease;

        &:hover {
          background: #cecccc;
        }
      }
    }

    .icons {
      display: flex;
      margin-top: 30px;
      gap: 30px;
      cursor: pointer;

      i {
        color: #afb6c7;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    position: relative;
    bottom: 0;
    left: 0;
    transform: none;
    width: 100%;
    border-radius: 0;

    .footer-row {
      padding: 20px;
      gap: 1rem;
    }

    .footer-col {
      form {
        display: block;

        input, button {
          width: 100%;
        }

        button {
          margin: 10px 0 0 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
<section className="footer">
    <div className="containers">
    <div className="footer-row">
    <div className="footer-col">
      <h4>Info</h4>
      <ul className="link">
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Compressions</a>
        </li>
        <li>
          <a href="#">Customers</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Collection</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Explore</h4>
      <ul className="link">
        <li>
          <a href="#">Free Designs</a>
        </li>
        <li>
          <a href="#">Latest Designs</a>
        </li>
        <li>
          <a href="#">Themes</a>
        </li>
        <li>
          <a href="#">Popular Designs</a>
        </li>
        <li>
          <a href="#">Art Skills</a>
        </li>
        <li>
          <a href="#">New Uploads</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Legal</h4>
      <ul className="link">
        <li>
          <a href="#">Customer Agreement</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">GDPR</a>
        </li>
        <li>
          <a href="#">Security</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Media Kit</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Newsletter</h4>
      <p>
        Subscribe to our newsletter for a weekly dose of news, updates, helpful
        tips, and exclusive offers.
      </p>
      <form action="#">
        <input type="text" placeholder="Your email" required="" />
        <button type="submit">SUBSCRIBE</button>
      </form>
      <div className="icons"></div>
    </div>
  </div>
    </div>

</section>
  );
}
