import './Content.scss';
import { useState } from 'react';
import {
    handleFormEmail,
    handleFormPhone,
    handleErrorButton,
} from '../Handle/HandleFormError';

function FormSignUp() {
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleOnchangeFullname = (e) => {
        setFullname(e.target.value);
    };
    const handleOnchangePhone = (e) => {
        setPhone(e.target.value);
    };
    const handleOnchangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleOnchangeAge = (e) => {
        setAge(e.target.value);
    };

    const ErrorPhone = (e) => {
        handleFormPhone(e);
    };

    const ErrorEmail = (e) => {
        handleFormEmail(e);
    };

    const handleButtonSignUp = (e) => {
        e.preventDefault();
        handleErrorButton(e);
    };

    return (
        <div className="container-register-for-consultation">
            <div className="space-100px"></div>
            <div className="register-for-consultation">
                <div className="title-advise">
                    <h2>ĐĂNG KÝ NHẬN TƯ VẤN MIỄN PHÍ</h2>
                </div>
                <div className="second-title-advise">
                    <p>
                        (Đăng ký ngay để được tư vấn về học phí, chương trình
                        học trung tâm tiếng anh trẻ em Alisa)
                    </p>
                </div>
                <div className="video-form-sign-up">
                    <div className="video-sign-up col-md-6">
                        <iframe
                            width="585px"
                            height="330px"
                            src="https://www.youtube.com/embed/07yg2yD2RZw"
                            title="Giới Thiệu về Trung Tâm Ngoại Ngữ NewSky | Khóa học tiếng Anh, Hàn, Trung, Nhật"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="form-sign-up col-md-6">
                        <form method="post" action="" id="form-1">
                            <div className="form-signup-group">
                                <input
                                    id="fullname"
                                    type="text"
                                    placeholder="Họ tên anh/chị"
                                    size="40"
                                    value={fullname}
                                    onChange={(event) =>
                                        handleOnchangeFullname(event)
                                    }
                                />
                                <span className="form-message"></span>
                            </div>
                            <div className="form-signup-group">
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Số điện thoại"
                                    value={phone}
                                    onChange={(event) =>
                                        handleOnchangePhone(event)
                                    }
                                    onBlur={(event) => ErrorPhone(event)}
                                />
                                <span className="form-message"></span>
                            </div>
                            <div className="form-signup-group">
                                <input
                                    id="email"
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(event) =>
                                        handleOnchangeEmail(event)
                                    }
                                    onBlur={(event) => ErrorEmail(event)}
                                />
                                <span className="form-message"></span>
                            </div>
                            <div className="form-signup-group">
                                <input
                                    id="age"
                                    type="text"
                                    placeholder="Tuổi của bé"
                                    value={age}
                                    onChange={(event) =>
                                        handleOnchangeAge(event)
                                    }
                                />
                                <span className="form-message"></span>
                            </div>
                            <div className="btn-signup-form">
                                <button
                                    id="btn-signup"
                                    onClick={(e) => handleButtonSignUp(e)}
                                >
                                    ĐĂNG KÝ
                                </button>
                                <span className="form-message" ></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormSignUp;
