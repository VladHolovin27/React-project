const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    onSubmit(query);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
