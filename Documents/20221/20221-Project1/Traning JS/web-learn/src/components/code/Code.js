import { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/ext-language_tools';
import styles from './Code.module.scss';
function Code({ height, text, inputText = undefined, outExpected, link }) {
    const [inputCode, setInputCode] = useState('');
    const [finish, setFinish] = useState(false);
    const [code, setCode] = useState(text);
    const [output, setOutput] = useState('');
    const [error, setError] = useState();

    const handleSubmit = () => {
        fetch('http://localhost:3000/compiler', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code,
                input: inputCode,
            }),
        })
            .then((res) => res.text())
            .then((mes) => {
                if (mes.includes('error')) {
                    setOutput();
                    setError(mes);
                } else {
                    if (mes === outExpected.slice(1, outExpected.length - 1)) {
                        setFinish(true);
                    }
                    setOutput(mes);
                    setError();
                }
            })
            .catch((err) => {
                setError(err);
            });
    };
    const handleInput = () => {
        let array = [];
        let copyArray = [];
        if (inputText) {
            array = inputText.split(',');
            array.forEach((ele, index) => {
                if (ele.includes('"')) {
                    copyArray[index] = ele.slice(1, ele.length - 1);
                } else {
                    copyArray[index] = array[index];
                }
            });
        }
        setInputCode(copyArray.join('\n'));
    };
    const handleReset = () => {
        setCode(text);
        setFinish(false);
        setError();
        setOutput();
    };
    useEffect(() => {
        handleInput();
    }, []);
    return (
        <>
            <header className={styles.headerCode}>
                <select>
                    <option>Java</option>
                </select>
                <div className={styles.reset} onClick={() => handleReset()}>
                    Reset
                </div>
            </header>
            <div className={styles.editor} id={styles.editor}>
                <AceEditor
                    mode="java"
                    theme="dracula"
                    name={styles.board}
                    fontSize={16}
                    showPrintMargin={true}
                    showGutter={true}
                    value={code}
                    highlightActiveLine={true}
                    onChange={(e) => setCode(e)}
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2,
                    }}
                />
            </div>

            <div className={styles.testcase} style={{ height: `${height - 400 - 48}px` }}>
                <h3>TEST CASE:</h3>
                <div>
                    input : <span>{inputText}</span>
                </div>
                <div>
                    Expected output: <span>{outExpected}</span>
                </div>
                <div>
                    Programing output: <span>{output}</span>
                </div>
                <div>
                    Message: <span className={styles.error}>{error}</span>
                </div>
            </div>
            {finish ? (
                <a href={link}>
                    <div className={styles.btnNext}>Next</div>
                </a>
            ) : (
                <></>
            )}
            <div className={styles.Submmit}>
                <button className={styles.btnSubmit} onClick={() => handleSubmit()}>
                    Run
                </button>
            </div>
        </>
    );
}

export default Code;
