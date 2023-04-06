import './Content.scss';

function TeacherTeam() {
    const listTeacher = [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMN88CDJvQKfsSVULsfch4vDsuDoVwqJmrO529W8LkBsNZOK9RlsZeuXmhnxU8aE50vac&usqp=CAU',
            name: 'Thầy Zander',
            position: '- Giảng viên -',
            desc: `Thầy là người Mỹ, tốt nghiệp đại học ở Anh.
             Từng là giáo viên tại Vinschool.
             Đang là giáo viên trường quốc tế MIS. Đạt chứng chỉ TESOL, TEFL... 
             và thầy đang học thạc sĩ về tâm lý học trẻ em`,
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiEi6Rr-qyHrFTwAkzz6v_XZgRc4Y2eBKnVHZQWUugFd7MkMuK3xzdHiVS0Bcq_7_vb8&usqp=CAU',
            name: 'Thầy Grant',
            position: '- Giảng viên -',
            desc: `Thầy có 6 năm giảng dạy tiếng Anh ở Thái Lan. 
            Ngày đầu đến với Alisa, thầy đã khóc vì nhớ học viên tại Thái Lan của mình. 
            Giờ đây thầy đều coi mỗi học viên như những đứa trẻ trong nhà và hết lòng giảng dạy.`,
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBdlmbXtPTd-Ak4JJQRGkGIfvwbOUVBm9-w&usqp=CAU',
            name: 'Thầy Sam',
            position: '- Giảng viên -',
            desc: `Thầy sinh ra và lớn lên tai Anh Quốc, 
            tốt nghiệp Đại Học Essex chuyên ngành về nghệ thuật và giảng dạy trẻ em. 
            Thầy được cấp 2 chứng chỉ TESOL và TEFL có giá trị trên toàn thế giới.`,
        },
        {
            img: 'http://aroma.vn/wp-content/uploads/2014/10/Giao-vien-nuoc-ngoai-day-tieng-anh1.jpg',
            name: 'Cô Stephany',
            position: '- Giảng viên -',
            desc: `Cô là người Mỹ, tốt nghiệp Đại Học Conecticut chuyên ngành về nghệ thuật và ngôn ngữ học. 
            Cô từng làm giảng viên training ngôn ngữ cho cơ quan chính phủ Mỹ và được cử đi training ngôn ngữ cho nhiều quốc gia.`,
        },
    ];

    return (
        <div className="teacher-team-content">
            <div className="title-teacher-team">
                <h2>
                    ĐỘI NGŨ <span>GIẢNG VIÊN</span>
                </h2>
            </div>
            <div className="border-content"></div>
            <div className="information-teacher">
                {listTeacher &&
                    listTeacher.length > 0 &&
                    listTeacher.map((item, index) => {
                        return (
                            <div className="info-teacher col-md-3" key={index}>
                                <div className="img-teacher">
                                    <img src={item.img} />
                                </div>
                                <div className="teacher-name">
                                    <h3>
                                        {item.name} <span>{item.position}</span>
                                    </h3>
                                </div>
                                <div className="description-teacher">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default TeacherTeam;
