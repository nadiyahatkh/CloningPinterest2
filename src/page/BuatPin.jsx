import Header from '../../src/Components/Header';
import '../../src/App.css';

function BuatPin(){
    return(
        <>
        <Header />
        <Form />
        </>
    )
}

function Form(){
    return(
        <div className="frm" >
        <div className="bg ">
            <div className="save">
                <button className='button'>save</button>
            </div>
            <div className="grd ">
                <div className="upld " >
                    <label className='label'>
                        <div className="d-flex align-items-center flex-column">
                        <i className="bi bi-arrow-up-circle-fill" style={{ fontSize: '22px' }}></i>
                        <h2 className='fw-semibold' style={{ fontSize: '22px' }}>Click To Upload</h2>
                        </div>
                    </label>
                    <button className='bg-gray p-3 px-5 mt-4 m-4 justify-content-center align-items-center rounded-pill fw-semibold' style={{ border: 'none' }}>Simpan dari situs</button>
                </div>
                <div className="col-md-10">
                    <div className="custom">
                        <div className="w-100">
                            <input className='input' type="text" placeholder='Add your Title' />
                            <h2 className='font'>The first 40 Charaters are 
                                what usually show up in feeds</h2>
                                <div className="d-flex text-center align-items-center mt-5">
                                <img className='rounded-circle' height='80px' width='80px' src="https://i.pinimg.com/236x/00/8b/e2/008be2dd2e3cbf5565bd1390d9b3ef77.jpg" />
                                <p className='tx'>Nadiyah Atikah</p>
                                </div>
                            <textarea className='textarea mt-5' placeholder='Tell everyone what your pin is about'></textarea>
                            <button className='bg-gray p-3 px-3 rounded-pill fw-semibold' style={{ border: 'none' }}>Tambahkan Teks Alternatif</button>
                            <input className='tautan' type="text" placeholder='Add a Destination Link' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BuatPin