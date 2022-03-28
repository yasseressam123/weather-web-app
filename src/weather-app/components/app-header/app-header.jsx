import './app-header.css'
const AppHeader = ()=>{
    return(
        <div className='app-header'>
            <h1>INSTAWEATHER</h1>
            <div>
                <div>
                    <button>C</button>
                </div>
                <div>
                    <button>F</button>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;