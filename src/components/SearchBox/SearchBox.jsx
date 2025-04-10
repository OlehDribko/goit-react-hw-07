import { useDispatch } from "react-redux";
import style from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/contactsSlice";

const SearchBox = () => {
  const dispathc = useDispatch();
  const searchName = useSelector(selectFilter);
  return (
    <div>
      <p>Find contacts by neme</p>
      <input
        type="text"
        id="search"
        value={searchName}
        onChange={(event) => dispathc(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
