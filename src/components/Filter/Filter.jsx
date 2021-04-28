import style from './filter.module.css';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';

function Filter() {
  const name = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));
  return (
    <label className={style.filter}>
      Find contacts by name:
      <input
        className={style.input}
        type="text"
        value={name}
        onChange={onChange}
      />
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
