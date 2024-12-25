import "../../styles/Contacts.css";

function Contacts() {
  return (
    <div className="main_contact" id="contacts">
      <div className="text_contact">
        <img
          src="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
        />
      </div>
      <div className="text_contact about_contant">
        <p className="into_contancts">Need Help?</p>
        <p>
          Feel free to reach out to me anytime for any software services you may
          need.
        </p>
        <ul className="details_contact">
          <li>
            <img src="location.png" alt="icon" />
            <p>Front-end Development</p>
          </li>
          <li>
            <img src="location.png" alt="icon" />
            <p>Back-end Development</p>
          </li>
          <li>
            <img src="location.png" alt="icon" />
            <p>Schema Design</p>
          </li>
        </ul>
      </div>
      <div className="text_contact contacts">
        <p>Contact Me</p>
        <ul className="details_contact">
          <li>
            <img src="location.png" alt="icon" />
            <p>Indore, Madhya Pradesh</p>
          </li>
          <li>
            <img src="gmail.png" alt="icon" />
            <p>hashshamkhan8@gmail.com</p>
          </li>
          <li>
            <img src="linkedin.png" alt="icon" />
            <p>www.linked.com/in/hashsham123</p>
          </li>
          <li>
            <img src="phone.png" alt="icon" />
            <p>9826772278</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
