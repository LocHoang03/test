import logo from '../img/img-2.jpg';
import './Header.scss';

function ImgHeader() {
    return (
        <div className="header-img">
            <img className="img-introduce-header" src={logo} alt='' />
        </div>
    );
}

export default ImgHeader;
