import "../styles/Employees.css";

function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Employee..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;