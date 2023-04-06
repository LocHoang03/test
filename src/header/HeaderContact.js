import './Header.scss';

function HeaderContact() {
    return (
        <div className="header-contact">
            <ul className="list-contact">
                <li className="item-contact">
                    <div>
                        <i class="bi bi-telephone-fill"></i> &nbsp;
                        <a href="">012.345.6789</a>
                    </div>
                </li>
                <li className="item-contact">
                    <div>
                        <i class="bi bi-house-fill"></i>
                        <span>1: 17BT1 Bán đảo Linh Đàm</span>
                    </div>
                </li>
                <li className="item-contact">
                    <div>
                        <i class="bi bi-house-fill"></i>
                        <span>2: 20TT1, Liền kề 96 Nguyễn Huy Tưởng</span>
                    </div>
                </li>
                <li className="item-contact">
                    <div>
                        <i class="bi bi-house-fill"></i>
                        <span>
                            3: Liền Kề 38, Đại lộ Lenin, Thành phố Vinh, Nghệ An
                        </span>
                    </div>
                </li>
                <li className="item-contact">
                    <div>
                        <i class="bi bi-facebook"></i> &nbsp;
                        <i class="bi bi-youtube"></i> &nbsp;
                        <i class="bi bi-envelope-fill"></i>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default HeaderContact;
