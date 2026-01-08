function App() {
  const handleClick = () => {
    alert("Button checked!");
  };

  return (
    <div className="container">
      <label htmlFor="name">Enter Name</label>
      <input type="text" id="name" />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
