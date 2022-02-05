import SearchBox from './SearchBox'
import '../styles/TopNav.css'

function TopNav({onSearch}) {
  return (
    <div className='TopNav tc mb3'>
      <h1 className='f1'> My Cat Friends </h1>
      <SearchBox onSearch={onSearch}/>
    </div>
  );
}

export default TopNav;
