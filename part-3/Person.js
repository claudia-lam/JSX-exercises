function Person({name, age, hobbies}) {
  return (
    <div>
      <h1>{name.length < 8 ? name : name.slice(0, 6)}</h1>
      <h2>Age: {age}</h2>
      <h3>{age > 18 ? "Please go vote!" : "You must be 18"}</h3>
      <h3>
        <ul>
          {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
      </h3>
    </div>

  );
}