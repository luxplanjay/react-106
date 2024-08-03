import { useState } from "react";

export default function UseMemoExample() {
  const [users, setUsers] = useState([
    { id: 1, name: "Jacob" },
    { id: 2, name: "Lancer" },
    { id: 3, name: "Meridian" },
    { id: 4, name: "Kornwall" },
    { id: 5, name: "Nathaniel" },
  ]);
  const [nameFilter, setNameFilter] = useState("");

  const addUser = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: crypto.randomUUID(), name: generateRandomName() },
    ]);
  };

  const changeFilter = (event) => {
    setNameFilter(event.target.value);
  };

  console.log("Filtering users");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      <button onClick={addUser}>Add random user</button>
      <input type="text" value={nameFilter} onChange={changeFilter} />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomName() {
  const names = [
    "John",
    "Jane",
    "Michael",
    "Michelle",
    "David",
    "Emily",
    "Chris",
    "Ashley",
    "James",
    "Patricia",
    "Robert",
    "Linda",
    "Mark",
    "Barbara",
    "Thomas",
    "Elizabeth",
    "Matthew",
    "Jennifer",
    "Anthony",
    "Jessica",
  ];

  return names[getRandomInt(0, names.length - 1)];
}
