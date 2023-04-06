import './Content.scss';

function ReasonContent() {
    const infoReasons = [
        {
            icon: 'bi bi-file-earmark-fill ',
            text: 'Cam kết đầu ra bằng hợp đồng đào tạo',
        },
        {
            icon: 'bi bi-flag-fill',
            text: 'Giáo viên bản ngữ có chứng chỉ quốc tế',
        },
        {
            icon: 'bi bi-mortarboard-fill ',
            text: 'Phương pháp học CLIL chuẩn Cambridge',
        },
        {
            icon: 'bi bi-people-fill ',
            text: 'Mô hình bộ 3 hỗ trợ tận tâm 24/7',
        },
        {
            icon: 'bi bi-magic',
            text: 'Giáo trình Cambridge chuẩn 4 kỹ năng',
        },
    ];

    return (
        <div className="container-reason">
            <div className="content-reason">
                <div className="title-reason">
                    <h2 className="text-title-reason">
                        TẠI SAO BẠN NÊN CHO CON HỌC TẠI ALISA NGAY?
                    </h2>
                </div>

                <div className="detail-info-reason">
                    {infoReasons &&
                        infoReasons.length > 0 &&
                        infoReasons.map((reason, index) => {
                            return (
                                <div className="info-reason col-md-6" key={index}>
                                    <div className="icon-reason">
                                        <div className="item-icon-reason">
                                            <i className={reason.icon}></i>
                                        </div>
                                    </div>
                                    <h5>{reason.text}</h5>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default ReasonContent;
