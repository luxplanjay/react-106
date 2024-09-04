import { useSearchParams } from "react-router-dom";

export default function OwnerSearchForm() {
  const [params, setParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    params.set("owner", event.target.elements.owner.value);
    setParams(params);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="owner" />
      <button type="submit">Search</button>
    </form>
  );
}
