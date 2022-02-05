function SearchBox({onSearch}) {
  return (
    <div className='tc'>
      <input className='pa3 ba b--green bg-lightest-blue br3'
        type='search'
        placeholder='Search your cat friends'
        onChange={(event) => onSearch(event.target.value)}
      />
      </div>
  );
}

export default SearchBox;
