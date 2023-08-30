import '../../src/App.css';
import Header from '../Components/Header';

function Profile(){
    return (
        <>
        <Header />
        <IconProfile />
        <Content />
        
        </>
    )
}

function IconProfile(){
    return(
        <>

        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <img className='rounded-circle' height='150px' width='150px' src="https://i.pinimg.com/236x/00/8b/e2/008be2dd2e3cbf5565bd1390d9b3ef77.jpg" />
            <h2 className='fw-semibold'>Nadiyah Atikah</h2>
            <p style={{ color: 'gray' }}>@ndyhtikh_</p>
            <div className="d-flex gap-4">
            <button className='bg-gray p-3 px-4 rounded-pill fw-semibold' style={{ border: 'none' }}>Share</button>
            <button className='bg-gray p-3 px-4 rounded-pill fw-semibold' style={{ border: 'none' }}>Edit Profile</button>
            </div>
        </div>
        </>
    )
}

function Content(){
    return (
        <>
            <div className="mt-4">
                <div className="yauda">
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/66/6c/e3/666ce302447359ee5e5bb6a2ec3d0e6e.jpg" alt="" />
                        <div className="text1">
                            <h2>Tes</h2>
                        </div>
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/66/6c/e3/666ce302447359ee5e5bb6a2ec3d0e6e.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/66/6c/e3/666ce302447359ee5e5bb6a2ec3d0e6e.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/66/6c/e3/666ce302447359ee5e5bb6a2ec3d0e6e.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/66/6c/e3/666ce302447359ee5e5bb6a2ec3d0e6e.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className='item' src="https://i.pinimg.com/236x/ac/9f/98/ac9f9823025120f50be07bac94bef57d.jpg" alt="" />
                    </a>
                </div>
            </div>
        
        
        </>
    )
}

export default Profile