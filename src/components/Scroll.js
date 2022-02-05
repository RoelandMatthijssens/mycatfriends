function Scroll({children}) {
  return (
    <div style={{overflowY: 'scroll'}}>
      {children}
    </div>
  );
}

export default Scroll;
