import './Content.scss';
import logo from '../img/img-program';

function ProgramStudy() {
    const infoProgram = [
        {
            logo: logo,
            title: 'KHÓA EARLY HAPPY SEED',
            age: 'Độ tuổi',
            ageNumber: '3 - 4',
            quantity: 'Sĩ số',
            quantityNumber: '10-16',
        },
        {
            logo: logo,
            title: 'KHÓA EARLY SEED',
            age: 'Độ tuổi',
            ageNumber: '3 - 4',
            quantity: 'Sĩ số',
            quantityNumber: '10-16',
        },
        {
            logo: logo,
            title: 'KHÓA GREEN TREE',
            age: 'Độ tuổi',
            ageNumber: '3 - 4',
            quantity: 'Sĩ số',
            quantityNumber: '10-16',
        },
        {
            logo: logo,
            title: 'KHÓA BLOOMING',
            age: 'Độ tuổi',
            ageNumber: '3 - 4',
            quantity: 'Sĩ số',
            quantityNumber: '10-16',
        },
    ];

    return (
        <div className="content-program-study">
            <div className="title-program">
                <h2>
                    CHƯƠNG TRÌNH HỌC <span>TẠI ALISA</span>
                </h2>
            </div>
            <div className="border-content"></div>
            <div className="information-program">
                {infoProgram &&
                    infoProgram.length > 0 &&
                    infoProgram.map((info, index) => {
                        return (
                            <div className="info-program" key={index}>
                                <div className="img-program">
                                    <img src={info.logo} />
                                </div>
                                <div className="title-info-program">
                                    <h2>{info.title}</h2>
                                </div>
                                <div className="title-2-info-program">
                                    <div className="info-text-program col-md-4 col-4">
                                        <p className="text-info-program-1">
                                            {info.age}
                                            <br />
                                            <span>{info.ageNumber}</span>
                                        </p>
                                    </div>
                                    <div className="info-text-program col-md-4 col-4">
                                        <p className="text-info-program-2 ">
                                            {info.quantity} <br />
                                            <span>{info.quantityNumber}</span>
                                        </p>
                                    </div>
                                    <div className="icon-program col-md-4 col-4">
                                        <span className="big-icon">
                                            <i class="bi bi-chevron-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default ProgramStudy;
