// import "./Paginate.sass";

function Paginate(props) {
  function handleClick(index, e) {
    props.handleClick(index);
  }
  const paginateButtons = [];
  for (let i = 1; i < props.number; i++) {
    if (props.selectNumber === i) {
      paginateButtons.push(<button className="bg-primary text-white w-8 h-8"> {i}</button>);
    } else {
      paginateButtons.push(
        <button onClick={() => handleClick(i)} className='bg-white w-8 h-8'> {i}</button>
      );
    }
  }
  return <div className="mx-auto mb-14 w-2/12 flex flex-1  justify-around"> {paginateButtons}</div>;
}

export default Paginate;
