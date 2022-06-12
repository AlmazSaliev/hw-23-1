import './AllStyle.css'
export const Header = (props) => {
    function btn(type) {
        props.func(type)
    }
    
    return (

        <div className="header-box">
            <div className='header'>
              <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmish-Q8yd2m50gmFqQAf3hpXP5c0OzBHA_A&usqp=CAU" alt="logo mi"/>
              </div>
              <div className="btn">
                <button onClick={() => { btn('product'); btn('filter') }}>Porduct</button>
                {props.btn && <button onClick={() => btn('img')}>{props.name}</button>}
                {(props.btn && <button onClick={() => btn('box')}>Box</button>) || <button onClick={() => btn('login')}>Restration</button>}
            </div>  
            </div>
            
        </div>
    )
}