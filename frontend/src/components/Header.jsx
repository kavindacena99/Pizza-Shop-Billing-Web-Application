import logo from '../assets/logo.png';

function Header(){
    return(
        <div>
            <div className='text-center'>
                <img src={logo} alt="Public Image" className="img-fluid" />
            </div>
        </div>
    );
}

export default Header;