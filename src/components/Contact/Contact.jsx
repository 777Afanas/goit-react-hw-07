import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps/";

export default function Contact({ info }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactItem}>
      <div className={css.info}>
        <p className={css.text}>
          <FaUser />
          {info.name}
        </p>
        <p className={css.text}>
          <FaPhone />
          {info.number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(info.id))}
      >
        Delete
      </button>
    </div>
  );
}
