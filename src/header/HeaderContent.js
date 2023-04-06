import './Header.scss';
import logo from '../img/image-all.png';

function HeaderContent() {
    return (
        <div className="header-content">
            <div className="logo-header">
                <img className="logo-content" src={logo} alt='' />
            </div>
            <div className="category-header">
                <ul className="category-list">
                    <li className="category-item">
                        <a href="">VỀ ALISA</a>
                    </li>
                    <li className="category-item">
                        <a href="">ĐIỂM KHÁC BIỆT</a>
                    </li>
                    <li className="category-item">
                        <a href="" >CHƯƠNG TRÌNH HỌC</a>
                    </li>
                    <li className="category-item">
                        <a href="">TIẾNG ANH DOANH NGHIỆP</a>
                    </li>
                    <li className="category-item">
                        <a href="">HỌC VIÊN</a>
                    </li>
                    <li className="category-item">
                        <a href="">TỦ SÁCH ALISA</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderContent;
