function Avatar({name}) {
  const base_url = 'https://robohash.org/'
  const size = 200
  return (
    <img className='self-center ma3 w4' src={`${base_url}/${name}?set=set4&size=${size}x${size}`} alt={name} />
  );
}


export default Avatar;
