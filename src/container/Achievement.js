import './Content.scss';

function Achievement() {
    const listAchie = [
        {
            icon: 'bi bi-trophy-fill',
            number: '6',
            text: 'Năm kinh nghiệm',
        },
        {
            icon: 'bi bi-mortarboard-fill',
            number: '15250',
            text: 'Học viên theo học',
        },
        {
            icon: 'bi bi-hourglass-bottom',
            number: '649',
            text: 'Sự kiện đã tổ chức',
        },
        {
            icon: 'bi bi-clock-fill',
            number: '934',
            text: 'Lớp học đã tổ chức',
        },
    ];
    return (
        <div className="container-achievement">
            <div className="achievement-content">
                {listAchie &&
                    listAchie.length > 0 &&
                    listAchie.map((achie, index) => {
                        return (
                            <div
                                className="item-achievement col-md-3"
                                key={index}
                            >
                                <div className="icon-achievement">
                                    <span>
                                        <i className={achie.icon}></i>
                                    </span>
                                </div>
                                <div className="info-achievement">
                                    <div className="number-achie">
                                        <h2>{achie.number}</h2>
                                    </div>
                                    <div className="text-achie">
                                        <p>{achie.text}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Achievement;
