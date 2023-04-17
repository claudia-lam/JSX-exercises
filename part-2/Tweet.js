function Tweet({username, name, date, message}) {
  return (
    <div>
      <b>{name}</b> <small>@{username} on {date}</small>
      <p>{message}</p>
    </div>
  );
}