export default function PilotCard({
  pilot: { avatar, name, rank, spec, active },
}) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <p>Name: {name}</p>
      <p>Rank: {rank}</p>
      {active && <p>Spec: {spec}</p>}
      <p>Status: {active ? "active" : "retired"}</p>
    </div>
  );
}
