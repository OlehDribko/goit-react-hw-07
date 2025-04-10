import { useDispatch } from "react-redux";
import style from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.contactBox}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>

      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={style.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
