import { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import clsx from 'clsx';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import { GiCheckMark } from 'react-icons/gi';
import { VscError } from 'react-icons/vsc';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/ext-language_tools';
import styles from './Code.module.scss';
function Code({ height, text, inputText = undefined, outExpected, link }) {
    const [inputCode, setInputCode] = useState('');
    const [finish, setFinish] = useState(0);
    const [code, setCode] = useState(text);
    const [output, setOutput] = useState('');
    const [error, setError] = useState();
    const [zoom, setZoom] = useState(false);

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
                if (mes.includes('error') || mes.includes('Exception')) {
                    setOutput();
                    setError(mes);
                    setFinish(1);
                } else {
                    if (mes === outExpected) {
                        setFinish(2);
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
        setFinish(0);
        setError();
        setOutput();
    };
    const handleScale = () => {
        setZoom(!zoom);
    };
    useEffect(() => {
        handleInput();
    }, []);
    return (
        <div
            className={clsx({
                [styles.zoom]: zoom,
                [styles.notZoom]: !zoom,
            })}
        >
            <header className={styles.headerCode}>
                <div>
                    <MdOutlineZoomOutMap className={styles.iconScale} onClick={handleScale}></MdOutlineZoomOutMap>
                    <select>
                        <option>Java</option>
                    </select>
                </div>
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

            <div
                className={styles.testcase}
                style={zoom ? { height: `${height - 400}px` } : { height: `${height - 400 - 48}px` }}
            >
                <h3>
                    TEST CASE:
                    {finish === 2 ? (
                        <GiCheckMark style={{ color: 'green', fontSize: '20px', fontWeight: '600' }}></GiCheckMark>
                    ) : (
                        <></>
                    )}
                    {finish === 1 ? (
                        <VscError style={{ color: 'red', fontSize: '20px', fontWeight: '600' }}></VscError>
                    ) : (
                        <></>
                    )}
                </h3>
                <div>
                    <span>input :</span> <p>{inputText}</p>
                </div>
                <div>
                    <span>Expected output: </span>
                    {outExpected ? (
                        outExpected.split('\r\n').map((ele, index) => {
                            return <p key={index}>{ele}</p>;
                        })
                    ) : (
                        <></>
                    )}
                </div>
                <div>
                    <span>Programing output: </span>
                    {output ? (
                        output.split('\r\n').map((ele, index) => {
                            return <p key={index}>{ele}</p>;
                        })
                    ) : (
                        <></>
                    )}
                </div>
                <div>
                    <span>Message:</span> <p className={styles.error}>{error}</p>
                </div>
            </div>
            {finish === 2 ? (
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
        </div>
    );
}

export default Code;
