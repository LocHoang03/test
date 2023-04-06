import './Content.scss';
import logo from '../img/image-wrapper.jpg';

function WrapperContent() {
    return (
        <div className="content-wrapper">
            <div className="text-wrapper">
                <h2 className="text-title">
                    Alisa - Trung tâm đào tạo tiếng Anh trẻ em 4 kỹ năng chuẩn
                    quốc tế
                </h2>
                <ul className="list-item-wrapper">
                    <li className="item-wrapper-content">
                        Alisa là trung tâm tiếng Anh trẻ em dành cho trẻ từ 3-15
                        tuổi đầu tiên tại Việt Nam sử dụng phương pháp học CLIL.
                        Phương pháp giúp trẻ phát triển tư duy và tự tin giao
                        tiếp như người bản ngữ.
                    </li>
                    <li className="item-wrapper-content">
                        <i class="bi bi-star-fill"></i>
                        100% GV bản ngữ có chứng chỉ quốc tế được đào tạo bởi
                        Giáo sư, Tiến Sỹ ngôn ngữ hàng đầu của Mỹ
                    </li>
                    <li className="item-wrapper-content">
                        <i class="bi bi-star-fill"></i>
                        Cam kết đầu ra theo chuẩn Cambridge bằng hợp đồng đào
                        tạo
                    </li>
                    <li className="item-wrapper-content">
                        <i class="bi bi-star-fill"></i>
                        Giáo trình hàng đầu của Mỹ, chuẩn hóa phương pháp học
                        CLIL...
                        <span className="Find-out-more">
                            <a href="" className="Find-out-more-link">
                            &gt;&gt; Tìm hiểu thêm
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="img-wrapper">
                <img src={logo} />
            </div>
        </div>
    );
}

export default WrapperContent;
