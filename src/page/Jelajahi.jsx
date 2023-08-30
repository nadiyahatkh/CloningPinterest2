import '../../src/App.css';
import Header from '../Components/Header';

function Jelajahi(){
    return(
        <>
        <Header />
        <Main />
        </>
    )
}

function Main() {
    return (
        <>
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h5>30 Agustus 2023</h5>
            <h2>Daptkan Inpisrasi</h2>
        </div>
        
        <div className="mt-4">
                <div className="yauda">
                    <a href="#" className='gatau'>
                        <img className='item z-1 position-absolute' src="https://i.pinimg.com/236x/18/39/3c/18393cbdba7c39148ded0a80ebeb3cb3.jpg" alt="" />
                        <div className="z-2 position-absolute d-flex flex-column align-items-center" style={{ color: 'white', bottom: -50}}>
                            <h5>Indoor dan Outdoor</h5>
                            <h3>inspo foro prewed</h3>
                        </div>
                    </a>
                    <a href="#" className='gatau'>
                        <img className='item z-1 position-absolute' src="https://i.pinimg.com/236x/ff/d8/45/ffd8458d2598bfbc12dc8430c2cf0077.jpg" alt="" />
                        <div className="z-2 position-absolute" style={{ color: 'white', bottom: -50, paddingRight: '500px' }}>
                            <h5>sajian pesta atau gathering</h5>
                            <h3>85 Resep minuman unik & segar</h3>
                        </div>
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/6e/cf/69/6ecf698c4287649de72fab9c2e43b6e9.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/736x/3a/2a/76/3a2a76b82d555aff5c4f988019bfd3ca.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/d2/21/e9/d221e96b7af86a980c1c1172f42044a2.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/736x/22/65/65/226565df035d980f9011f1443c6304dc.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/2f/b5/cf/2fb5cf3b157c283b20627d41ad42872b.jpg" alt="" />
                    </a>
                </div>
            </div>

        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h5>30 Agustus 2023</h5>
            <h2>Daptkan Inpisrasi</h2>
        </div>

        <div className="mt-4">
                <div className="yauda">
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/0c/7f/41/0c7f41d7c806119c25f1fafd84efd591.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/736x/00/cd/a4/00cda4c0051630ab8eb7bbe478b5d7c6.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/62/40/23/624023224e1077f54b37be6ce8e25aad.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/e8/ca/87/e8ca87575a52e5c402beb59469a2a47e.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/66/6c/e3/666ce302447359ee5e5bb6a2ec3d0e6e.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/ac/9f/98/ac9f9823025120f50be07bac94bef57d.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/ac/9f/98/ac9f9823025120f50be07bac94bef57d.jpg" alt="" />
                    </a>
                </div>
            </div>
        
        <div className="d-flex flex-column justify-content-center align-items-center mt-4 p-5">
        <i className="bi bi-check-circle-fill" style={{ fontSize: '35px' }}/>
            <h5>Cukup sekian untuk hari ini</h5>
            <h2>Kembali lagi besok untuk mendapatkan lebih banyak inspirasi</h2>
            <button className='bg-gray p-3 px-3 rounded-pill fw-semibold mt-4' style={{ border: 'none' }}>Kunjungi sajian beranda</button>
        </div>
        </>
    )
}



export default Jelajahi