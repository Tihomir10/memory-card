function Game(props) {
  return (
    <div className='container'>
      {props.array.map(obj => {
        return (
          <div className='box'>
            <img src={obj.link} />
          </div>
        )
      })}
    </div>
  )
}

export default Game;