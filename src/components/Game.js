function Game(props) {
  return (
    <div className='container'>
      {props.array.map(obj => {
        return (
          <div className='box' onClick={props.handleClick}>
            <img src={obj.link} id={obj.id} />
            <p>{obj.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Game;