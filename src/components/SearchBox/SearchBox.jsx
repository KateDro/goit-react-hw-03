import css from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, onChange }) => {
  const userId = useId();
  return (
    <div className={css.search}>
      <label htmlFor={userId} className={css.title}>
        Faind contacts by name
      </label>
      <input
        id={userId}
        value={value}
        className={css.input}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
