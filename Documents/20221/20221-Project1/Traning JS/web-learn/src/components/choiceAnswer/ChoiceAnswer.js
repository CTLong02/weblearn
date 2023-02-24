import { useState } from 'react';
import { ImLoop2 } from 'react-icons/im';
import { GiNextButton } from 'react-icons/gi';
import clsx from 'clsx';
import styles from './ChoiceAnswer.module.scss';
function ChoiceAnswer({ contentAnswers, ans, link }) {
    const [ansChoice, setAnsChoice] = useState();
    const [finish, setFinish] = useState(false);
    const [correct, setCorrect] = useState(0);
    const handleReset = () => {
        setCorrect(0);
        setAnsChoice();
        setFinish(false);
    };
    const handleAnswer = (index) => {
        setAnsChoice(index);
        setCorrect(0);
        setFinish(false);
    };
    const handleSubmit = () => {
        if (ansChoice === ans) {
            setCorrect(1);
            setFinish(true);
        } else {
            setCorrect(2);
        }
    };
    const handleNext = () => {};
    const handleChange = () => {};
    console.log(correct);
    return (
        <div className={styles.choice}>
            <header className={styles.headerChoice}>
                <button className={styles.btnReset} onClick={() => handleReset()}>
                    <ImLoop2 style={{ marginRight: '4px' }} />
                    Reset
                </button>
            </header>
            <div className={styles.choiceAnswer}>
                <ul className={styles.listAnswer}>
                    {contentAnswers.map((contentAnswer, index) => {
                        return (
                            <li
                                className={clsx(styles.answer, {
                                    [styles.incorrect]: correct === 2 && ansChoice === index + 1,
                                    [styles.correct]: correct === 1 && ansChoice === index + 1,
                                })}
                                key={index}
                                onClick={() => handleAnswer(index + 1)}
                            >
                                <input
                                    type={'radio'}
                                    value={index + 1}
                                    name={`answer`}
                                    checked={ansChoice === index + 1}
                                />
                                <span>{contentAnswer}</span>
                            </li>
                        );
                    })}
                </ul>
                {!finish ? (
                    <button className={styles.btnSubmit} onClick={() => handleSubmit()}>
                        Submit
                        <GiNextButton style={{ width: '18px', height: '18px', marginLeft: '4px' }}></GiNextButton>
                    </button>
                ) : (
                    <a href={link}>
                        <button className={styles.btnNext} onClick={() => handleNext()}>
                            Next
                            <GiNextButton style={{ width: '18px', height: '18px', marginLeft: '4px' }}></GiNextButton>
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
}

export default ChoiceAnswer;
