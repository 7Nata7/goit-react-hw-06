import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { getFilters, getUsers } from "../../redux/selectors";

export default function ContactList() {
  const users = useSelector(getUsers);
  const filters = useSelector(getFilters);

  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filterUsers.map((user) => (
        <li key={user.id} className={css.contactItem}>
          <Contact user={user} />
        </li>
      ))}
    </ul>
  );
}
