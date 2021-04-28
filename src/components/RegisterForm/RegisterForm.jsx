import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import style from '../ContactForm/contactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default function RegisterForm() {
  const [name, setName] = useState('');
  const changeName = e => {
    setName(e.target.value);
  };
  const [email, setEmail] = useState('');
  const changeEmail = e => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const changePassword = e => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !email || !password) return toast('Please fill the form');

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Register page</h1>

      <form
        className={style.registerForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={style.label}>Name</label>
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          onChange={changeName}
        />
        <label className={style.label}>Email</label>
        <input
          className={style.input}
          type="email"
          name="email"
          value={email}
          onChange={changeEmail}
        />
        <label className={style.label}>Password</label>
        <input
          className={style.input}
          type="password"
          name="password"
          value={password}
          onChange={changePassword}
        />
        <button className={style.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
// class RegisterForm extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, email } = this.state;

//     if (!name) return toast('Please enter contact name');
//     if (!email) return toast('Please enter contact email');
//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div>
//         <h1>Register page</h1>

//         <form
//           className={style.registerForm}
//           onSubmit={this.handleSubmit}
//           autoComplete="off"
//         >
//           <label className={style.label}>Name</label>
//           <input
//             className={style.input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//           />
//           <label className={style.label}>Email</label>
//           <input
//             className={style.input}
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//           <label className={style.label}>Password</label>
//           <input
//             className={style.input}
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//           <button className={style.btn} type="submit">
//             Register
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterForm);
