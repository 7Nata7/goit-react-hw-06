import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

export default function Contact({ user: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactItem}>
      <div className={css.userInfo}>
        <p className={css.userName}>
          <IoMdPerson className={css.contactIcon} />
          {name}
        </p>
        <p className={css.userPhone}>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
}
