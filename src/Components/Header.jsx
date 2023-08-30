import '../../src/App.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <>
            <div className="hdr px-4">
      <div className="logo">
        <img src="src/assets/pinterest.png" style={{ width: 30, height: 30 }} alt="" />
      </div>
        <div className="d-flex">
          <HomePageButton label="Beranda" mode="light" onClick={ () => {} } />
          <JelajahiButton />
          <CreateButton />
          <div className="d-flex align-items-center justify-content-center-between" style={{ backgroundColor: "lightgray", borderRadius: 50, width: 860 }}>
            <form className="d-flex " role="search">
              <i className="bi bi-search  p-2 "></i>
              <input className="form-control me-5 my-2"  style={{width: "53vw", backgroundColor: "transparent" }} type="search" placeholder="Search" aria-label="Search" />
          </form>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center p-2" style={{ fontSize: "30px", color: "black" }}>
          <button className="icon-nav i bi-bell-fill"  onClick={() => {}} />
          <i className="icon-nav bi bi-chat-dots-fill" />
          <Link to="/Profil"><i className="icon-nav i bi-person-circle" style={{ color: 'black' }}  onClick={() => {}} /></Link>
          <i className="icon-nav bi bi-chevron-down"  onClick={() => {}} />
        </div>
    </div> 
        </>
    )
}

function HomePageButton(props){
    return(
      <div className="brnda" onClick={props.onClick} style={{backgroundColor: props.mode === 'light' ? 'black' : 'light', }}>
        <Link className="text-decoration-none" to="/"><span style={{color: props.mode === 'dark' ? 'white' : 'white', fontWeight: "bold"}} className="">{props.label}</span></Link>
      </div>
    )
  }
  
  function JelajahiButton(){
    return(
      <div className="jelajahi">
        <Link className='text-decoration-none' to="/Jelajahi"><a className="text-decoration-none" style={{ color: "black" }} href="#">Jelajahi</a></Link>
      </div>
    )
  }
  
  function CreateButton(){
    return(
      <div className="dropdown">
            <a className="dropdown-toggle text-decoration-none" style={{ color: "black" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Buat
            </a>
            <ul className="dropdown-menu">
              <li><Link className="text-decoration-none" to="/BuatPin"><button className="dropdown-item" href="#">Buat Pin</button></Link></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
            </ul>
          </div>
    )
  }

export default Header