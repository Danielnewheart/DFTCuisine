function ValidatedQuestions({ inputName, inputEmail, inputConfirm, nameError, emailError, confirmError, handleNameChange, handleNameBlur, handleEmailChange, handleEmailBlur, handleConfirmChange, handleConfirmBlur }) {

    return (
        <>
            <div className="question text-question register__name register-name">
                <label htmlFor="name">Name: <span className='required-text'>(Required*)</span></label>
                {nameError && <span className="register__error register-name__error">{nameError}</span>}
                <input
                    className="register-name__input"
                    type="text"
                    name="name"
                    id="name"
                    value={inputName}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                />
            </div>

            <div className="question text-question register__email register-email">
                <label htmlFor="email">Email: <span className='required-text'>(Required*)</span></label>
                {emailError && <span className="register__error egister-email__error">{emailError}</span>}
                <input
                    className="register-email__input"
                    type="text"
                    name="email"
                    id="email"
                    value={inputEmail}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                />
            </div>

            <div className="question text-question register__confirm register-confirm">
                <label htmlFor="confirm">Confirm Email: <span className='required-text'>(Required*)</span></label>
                {confirmError && <span className="register__error register-name__error">{confirmError}</span>}
                <input
                    className="register-confirm__input"
                    type="text"
                    name="confirm"
                    id="confirm"
                    value={inputConfirm}
                    onChange={handleConfirmChange}
                    onBlur={handleConfirmBlur}
                />
            </div>
        </>
    )
}

export default ValidatedQuestions;