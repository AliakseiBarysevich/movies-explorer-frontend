import React from 'react';
import './SubmitButton.css';

function SubmitButton({
    isValid,
    isFetching,
    buttonText
}) {
    return (
        <button
            className={
                !isValid
                    ? 'submit-button submit-button_disabled'
                    : 'submit-button'
            }
            disabled={!isValid || isFetching ? true : false}
            type='submit'>
            {isFetching ? 'Загрузка...' : buttonText}
        </button>
    )
};

export default SubmitButton;
