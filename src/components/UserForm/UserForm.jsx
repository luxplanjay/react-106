import css from "./UserForm.module.css";

export default function UserForm({ onAdd }) {
  return (
    <form className={css.form}>
      <div className={css.formGroup}>
        <label>Username:</label>
        <input className={css.input} type="text" name="username" />
      </div>

      <div className={css.formGroup}>
        <label>Email:</label>
        <input className={css.input} type="email" name="email" />
      </div>

      <div className={css.formGroup}>
        <label>Role:</label>
        <select className={css.input} name="role">
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className={css.formGroup}>
        <label>Comment:</label>
        <textarea className={css.input} name="comment"></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
