// import PropTypes from 'prop-types'
import { useState } from 'react'
export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'
    if (status === 'success') {
        return <h1>Thats right answer</h1>
    }
    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('success')
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }
    function handleTextareaChange(e) {
        setAnswer(e.target.value)
    }
    return (
        <>
            <h2>City Quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    disabled={
                        status === 'submitting'
                    }
                    onChange={handleTextareaChange}
                />
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {
                    error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    )
}

function submitForm(answer){
    //Pretend it's hitting the network
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError =  answer.toLowerCase() !== 'lima'
            if (shouldError){
                reject(new Error('Good guess but a wrong answer. Try again!'))
            } else {
                resolve()
            }
        })
    }, 1500)
}
// Form.propTypes = {
//     status: PropTypes.string.isRequired
// }