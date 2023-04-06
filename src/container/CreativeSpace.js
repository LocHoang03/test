import './Content.scss';

function CreativeSpace() {
    const listImgCreative = [
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuerUl6Lp1k84mT8sda_BzFxvk_uhritK2Fw&usqp=CAU`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7zTqxnZK7LDrz710H_atcqn-5homouWh6A&usqp=CAU`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteU_Z_ubYoX20gkvkmQzmkcsS37hjP8kR6Q&usqp=CAU`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuerUl6Lp1k84mT8sda_BzFxvk_uhritK2Fw&usqp=CAU`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7zTqxnZK7LDrz710H_atcqn-5homouWh6A&usqp=CAU`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteU_Z_ubYoX20gkvkmQzmkcsS37hjP8kR6Q&usqp=CAU`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuerUl6Lp1k84mT8sda_BzFxvk_uhritK2Fw&usqp=CAU`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7zTqxnZK7LDrz710H_atcqn-5homouWh6A&usqp=CAU`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteU_Z_ubYoX20gkvkmQzmkcsS37hjP8kR6Q&usqp=CAU`,
    ];

    return (
        <div className="creative-content">
            <div className="title-creative">
                <h2>
                    KHÔNG GIAN HỌC TẬP SÁNG TẠO <span>TẠI ALISA</span>
                </h2>
            </div>
            <div className="border-content"></div>
            <div className="img-creative">
                {listImgCreative &&
                    listImgCreative.length > 0 &&
                    listImgCreative.map((img, index) => {
                        return (
                            <div
                                className="item-img-creative col-md-4"
                                key={index}
                            >
                                <img src={img} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default CreativeSpace;
