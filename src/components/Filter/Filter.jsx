import style from './filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { contactsActions, contactsSelectors } from '../../redux/contacts';

const Filter = ({ value, onChange }) => (
  <label className={style.filter}>
    Find contacts by name:
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
