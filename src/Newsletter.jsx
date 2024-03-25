import './Newsletter.css';
import './Modal.css';
import Button from './Button';
import ValidatedQuestions from './ValidatedQuestions';

import { useRef, useState, useEffect } from 'react';

function Newsletter({ isLoggedIn, onLogin }) {

    const [isSubmit, setIsSubmit] = useState(false);
    useEffect(() => {
        setIsSubmit(false);
    }, []);

    const dialogRef = useRef();
    const confirmDialogRef = useRef();
    const [model, setModel] = useState('member');

    const [inputName, setInputName] = useState('');
    const [nameError, setNameError] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [inputConfirm, setInputConfirm] = useState('');
    const [confirmError, setConfirmError] = useState('');

    // Name
    const validateName = (name) => {
        if (!name) {
            setNameError('This field is required');
            return false;
        } else {
            setNameError('');
            return true;
        }
    }
    const handleNameChange = (e) => {
        setInputName(e.target.value);
    }
    const handleNameBlur = () => {
        validateName(inputName)
    };

    // Email
    const validateEmail = (email) => {
        if (email !== inputConfirm) {
            setConfirmError('This field must match the email');
        }
        if (!email) {
            setEmailError('This field is required');
            return false;
        } else if (!email.includes('@')) {
            setEmailError('Email should include a domain');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    }
    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    }
    const handleEmailBlur = () => { validateEmail(inputEmail) };

    // ConfirmEmail
    const validateConfirm = (confirmEmail) => {
        if (confirmEmail !== inputEmail) {
            setConfirmError('This field must match the email');
            return false;
        } else {
            setConfirmError('');
            return true;
        }
    }
    const handleConfirmChange = (e) => {
        setInputConfirm(e.target.value);
    }
    const handleConfirmBlur = () => { validateConfirm(inputConfirm) };

    // Phone
    const [inputPhone, setInputPhone] = useState('');
    const handlePhone = (e) => { setInputPhone(e.target.value) };

    // Select
    const [selectedOption, setSelectedOption] = useState('weekly');
    const handleSelect = (e) => { setSelectedOption(e.target.value) };

    // Filter
    const handleFilterChange = (tag) => {
        setModel(tag);
    }

    // Subscribe and register
    const subscribe = (e) => {
        e.preventDefault();
        const isNameValid = validateName(inputName);
        const isEmailValid = validateEmail(inputEmail);
        const isConfirmValid = validateConfirm(inputConfirm)

        if (isNameValid && isEmailValid && isConfirmValid) {
            confirmDialogRef.current.showModal();
            setInputName("");
            setInputEmail("");
            setInputConfirm("");
            setInputPhone("");
            setSelectedOption("weekly");

            setIsSubmit(true);
            return true;
        }

        return false;
    }

    const showModal = (e) => {
        dialogRef.current.showModal();
        setIsSubmit(false);
        setInputName("");
        setInputEmail("");
        setInputConfirm("");
        setNameError("");
        setEmailError("");
        setConfirmError("");
        e.preventDefault();
    }

    const closeModal = (e) => {
        setIsSubmit(false);
        setInputName("");
        setInputEmail("");
        setInputConfirm("");
        setNameError("");
        setEmailError("");
        setConfirmError("");
        dialogRef.current.close();
        e.preventDefault();
    }

    const submit = (e) => {
        if (subscribe(e)) {
            onLogin(inputName);
        }
    }

    const closeConfirmModal = (e) => {
        e.preventDefault();
        confirmDialogRef.current.close();
        dialogRef.current.close();
        setIsSubmit(false);
    }


    return (
        <div className="subcribe">
            <h1 className='subcribe__title'>Subscribe Our Newsletter</h1>
            <p className='title__description'>You can choose a subscription model that you prefer!</p>

            <div className="filter__container filter__container--subscribe">
                <div className="filter-item-container">
                    <Button visual='filter' type="button" status={model === 'member' && `selected`} onClick={() => handleFilterChange('member')}>Join as a Member</Button>
                    <Button visual='filter' type="button" status={model === 'direct' && `selected`} onClick={() => handleFilterChange('direct')}>Subcribe Directly</Button>
                </div>
            </div>

            <div className="subscribe__container">
                <div className={`subscribe subscribe__direct ${model === 'direct' && 'active'}`}>
                    <h2 className='subscribe__title'>Subscribe Directly</h2>
                    <p className="subscribe__content">Experience Taiwan's latest and greatest in cuisine with our monthly newsletter. Explore new restaurants, delicious dishes, and cultural stories.</p>

                    <form className="register" action="/register" method="post">
                        <ValidatedQuestions
                            inputName={inputName}
                            inputEmail={inputEmail}
                            inputConfirm={inputConfirm}
                            nameError={nameError}
                            emailError={emailError}
                            confirmError={confirmError}
                            handleNameChange={handleNameChange}
                            handleNameBlur={handleNameBlur}
                            handleEmailChange={handleEmailChange}
                            handleEmailBlur={handleEmailBlur}
                            handleConfirmChange={handleConfirmChange}
                            handleConfirmBlur={handleConfirmBlur}
                        />
                        <Button type="submit" visual="subscribe" onClick={subscribe}>Subscribe</Button>
                    </form>
                </div>

                <div className={`subscribe subscribe__member ${model === 'member' && 'active'}`}>
                    <h2 className='subscribe__title'>Join as a Member</h2>
                    <p className="subscribe__content">Enhance your culinary journey with DFT Membership. Benefits include:</p>
                    <ul className='subscribe__content subscribe__content--list'>
                        <li><span className="subscribe__content--highlight">Customized Newsletters:</span> Get weekly, monthly, and quarterly deep dives into Taiwanese food.</li>
                        <li><span className="subscribe__content--highlight">Exclusive Discord Community:</span> Share and discover food insights with fellow enthusiasts.</li>
                        <li><span className="subscribe__content--highlight">Special Event Invites:</span> Access members-only cooking classes, webinars, and meetups.</li>
                        <li><span className="subscribe__content--highlight">Early Access and Discounts:</span> Enjoy first dibs and deals on new offerings and events.</li>
                        <li><span className="subscribe__content--highlight">Members-Only Content:</span> Explore exclusive articles, expert interviews, and insider food industry insights.</li>
                    </ul>
                    <Button type="button" visual="subscribe" onClick={showModal}>Become Our VIP</Button>

                    <dialog className="modal" ref={dialogRef}>
                        <div className="modal__container">
                            <Button type="button" visual="close" otherClass="modal__button--close" onClick={closeModal}>Close</Button>
                            <h1 className='modal__title'>Become Our VIP</h1>
                            <form className="register-form register" action="submit">
                                <ValidatedQuestions
                                    inputName={inputName}
                                    inputEmail={inputEmail}
                                    inputConfirm={inputConfirm}
                                    nameError={nameError}
                                    emailError={emailError}
                                    confirmError={confirmError}
                                    handleNameChange={handleNameChange}
                                    handleNameBlur={handleNameBlur}
                                    handleEmailChange={handleEmailChange}
                                    handleEmailBlur={handleEmailBlur}
                                    handleConfirmChange={handleConfirmChange}
                                    handleConfirmBlur={handleConfirmBlur}
                                />

                                <div className="question text-question register__phone register-phone">
                                    <label htmlFor="phone">Phone Number:</label>
                                    <input className="register-confirm__phone" type="text" id="phone" value={inputPhone} onChange={handlePhone} />
                                </div>

                                <div className="question select-question register__tier">
                                    <label htmlFor="type">How often do you want to recieve newsletter: </label>
                                    <select className="select-question__options" name="type" id="type" value={selectedOption} onChange={handleSelect}>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="never">Never</option>
                                    </select>
                                </div>

                                <Button type="submit" visual="modal" onClick={submit} otherClass="modal__button--register">Submit</Button>
                                {/* {isSubmit && <span>Congrats! You have registered. Please close the window.</span>} */}
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>

            <dialog className="modal modal--confirm" ref={confirmDialogRef}>
                <div className="modal__container modal__container--confirm">
                    <h1 className='modal__title'>🎉 Congratulation</h1>
                    <p className='modal__content'>{isLoggedIn ? `You are our VIP!` : `You've subscribed our newsletter!`}</p>
                    <p className='modal__content'>Hope you'll enjoy everything here.</p>
                    <Button type="button" visual="modal" otherClass="confirm__button" onClick={closeConfirmModal}>Close</Button>
                </div>
            </dialog>

        </div>
    );
}

export default Newsletter; 