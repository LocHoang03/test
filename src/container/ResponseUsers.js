import './Content.scss';

function ResponseUsers() {
    return (
        <div className="response-users">
            <div className="space-120px"></div>
            <div className="content-res-users">
                <div className="title-res-users">
                    <h2>
                        PHẢN HỒI CỦA PHỤ HUYNH <span> VÀ HỌC SINH</span>
                    </h2>
                </div>
                <div className="border-content"></div>
                <div className="video-res-users">
                    <div className="video-res-user-child">
                        <iframe
                            width="585px"
                            height="330px"
                            src="https://www.youtube.com/embed/07yg2yD2RZw"
                            title="Giới Thiệu về Trung Tâm Ngoại Ngữ NewSky | Khóa học tiếng Anh, Hàn, Trung, Nhật"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                        <h5>Phụ huynh tham dự khai trương Alisa Trung Hòa</h5>
                    </div>
                    <div className="video-res-user-child">
                        <iframe
                            width="585px"
                            height="330px"
                            src="https://www.youtube.com/embed/07yg2yD2RZw"
                            title="Giới Thiệu về Trung Tâm Ngoại Ngữ NewSky | Khóa học tiếng Anh, Hàn, Trung, Nhật"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                        <h5>Cảm nhận của phụ huynh bé Trung Dũng 5 tuổi</h5>
                    </div>
                </div>
                <div className="response-see-more">
                    <a>XEM THÊM &gt;</a>
                </div>
            </div>
        </div>
    );
}

export default ResponseUsers;
