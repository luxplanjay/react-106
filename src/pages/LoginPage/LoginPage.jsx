import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function LoginPage() {
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />

      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
}
