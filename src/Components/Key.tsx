import * as React from 'react';

interface Props {
    method: (e:React.MouseEvent<HTMLButtonElement>)=> void,
    children: string,
    className?: string
}

const Key: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={props.className}>
            <button
                type='button'
                onClick={(e) => props.method(e)}
            >
            {props.children}
            </button>
        </div>
    )
};
export default Key;