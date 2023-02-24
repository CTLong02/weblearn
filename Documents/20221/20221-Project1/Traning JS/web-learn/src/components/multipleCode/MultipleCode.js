import { useEffect, useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { VscAdd } from 'react-icons/vsc';
import AceEditor from 'react-ace';
import clsx from 'clsx';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/ext-language_tools';
import styles from './MultipleCode.module.scss';

function MultipleCode({ height, testcases }) {
    const [width, setWidth] = useState(window.innerWidth * 0.6);
    const [count, setCount] = useState(1);
    const [current, setCurrent] = useState(1);
    const [arrayFile, setArrayFile] = useState([
        {
            code: '',
            name: 'new-file-1',
            id: 1,
            edit: false,
        },
    ]);
    const [finishCount, setFinishCount] = useState(0);
    const handleRepair = (idFile) => {
        const arrayNew = arrayFile.map((ele, index) => {
            if (ele.id === idFile) {
                return {
                    code: ele.code,
                    name: ele.name,
                    id: ele.id,
                    edit: !ele.edit,
                };
            } else {
                return ele;
            }
        });
        setArrayFile([...arrayNew]);
    };
    const handleDelete = (idFile) => {
        let indexFile = 0;
        const arrayNew = arrayFile.filter((ele) => {
            return ele.id !== idFile;
        });
        arrayFile.forEach((ele, index) => {
            if (ele.id === idFile) {
                indexFile = index;
            }
        });
        if (indexFile === 0) {
            if (arrayNew.length > 0) {
                setCurrent(arrayNew[0].id);
                setArrayFile([...arrayNew]);
            }
        } else {
            setCurrent(arrayNew[indexFile - 1].id);
            setArrayFile([...arrayNew]);
        }
    };
    const handleAdd = () => {
        setArrayFile([
            ...arrayFile,
            {
                code: '',
                name: `new-file-${count + 1}`,
                id: count + 1,
                edit: false,
            },
        ]);
        setCount(count + 1);
        setCurrent(count + 1);
    };
    const handleChangFile = (idFile) => {
        setCurrent(idFile);
    };
    const handleEdit = (value, idFile) => {
        const arrayNew = arrayFile.map((ele, index) => {
            if (ele.id === idFile) {
                return {
                    code: ele.code,
                    name: value,
                    id: idFile,
                    edit: true,
                };
            } else {
                return ele;
            }
        });
        setArrayFile([...arrayNew]);
    };
    const handleBlurEdit = (idFile) => {
        const arrayNew = arrayFile.map((ele, index) => {
            if (ele.id === idFile) {
                return {
                    code: ele.code,
                    name: ele.name,
                    id: ele.id,
                    edit: false,
                };
            } else {
                return ele;
            }
        });
        setArrayFile([...arrayNew]);
    };

    const handleChange = (text, idFile) => {
        const arrayNew = arrayFile.map((ele, index) => {
            if (ele.id === idFile) {
                return {
                    code: text,
                    name: ele.name,
                    id: ele.id,
                    edit: ele.edit,
                };
            } else {
                return ele;
            }
        });
        setArrayFile([...arrayNew]);
    };
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth * 0.6);
    });
    return (
        <>
            <div className={styles.headerCode}>
                <div className={styles.options}>
                    <select>
                        <option>Java</option>
                    </select>
                    <div>Reset</div>
                </div>
                <div className={styles.files}>
                    {arrayFile.map((file) => {
                        return (
                            <div
                                key={file.id}
                                className={clsx(styles.file, {
                                    [styles.active]: current === file.id,
                                })}
                            >
                                {file.edit ? (
                                    <input
                                        type={'text'}
                                        value={file.name}
                                        onChange={(e) => handleEdit(e.target.value, file.id)}
                                        onBlur={() => handleBlurEdit(file.id)}
                                    ></input>
                                ) : (
                                    <span onClick={() => handleChangFile(file.id)}>{file.name}</span>
                                )}
                                {current === file.id ? (
                                    <>
                                        <BsPencil
                                            className={styles.repair}
                                            onClick={() => handleRepair(file.id)}
                                        ></BsPencil>
                                        <AiOutlineClose
                                            className={styles.delete}
                                            onClick={() => handleDelete(file.id)}
                                        ></AiOutlineClose>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        );
                    })}
                    <div className={styles.add} onClick={handleAdd}>
                        <VscAdd></VscAdd>
                    </div>
                </div>
            </div>
            {arrayFile.map((file) => {
                if (file.id === current) {
                    return (
                        <AceEditor
                            key={file.id}
                            mode="java"
                            theme="dracula"
                            name={styles.board}
                            fontSize={16}
                            style={{
                                height: `${
                                    height - Math.ceil(arrayFile.length / Math.floor(width / 150)) * 40 - 208
                                }px `,
                            }}
                            showPrintMargin={true}
                            showGutter={true}
                            value={file.code}
                            highlightActiveLine={true}
                            onChange={(e) => handleChange(e, file.id)}
                            setOptions={{
                                enableBasicAutocompletion: false,
                                enableLiveAutocompletion: false,
                                enableSnippets: false,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                        />
                    );
                }
            })}
            <div className={styles.tescase}>
                <h3>
                    TestCase:{' '}
                    <span>
                        {finishCount} / {testcases.length}
                    </span>
                </h3>
                <ul>
                    {testcases.map((testcase, index) => {
                        return (
                            <li>
                                {index + 1}.{testcase}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default MultipleCode;
