import { useEffect, useState } from 'react';
import { useCustomCursor } from './useCustomCursor';
import hammer from '../../assets/WAM_Hammer.png';
import styles from './Cursor.module.css'

export default function Cursor() {
    const cursorRef = useCustomCursor();
    const [pressed, setPressed] = useState(false);

    useEffect(() => {
        const down = () => setPressed(true);
        const up = () => setPressed(false);

        window.addEventListener('mousedown', down);
        window.addEventListener('mouseup', up);
        window.addEventListener('blur', up);

        return () => {
            window.removeEventListener('mousedown', down);
            window.removeEventListener('mouseup', up);
            window.removeEventListener('blur', up);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                pointerEvents: 'none',
                zIndex: 9999,
                willChange: 'transform',
            }}
        >
            <img
                src={hammer}
                alt=""
                className={styles.cursor}
                draggable={false}
                style={{
                    rotate: pressed ? '-15deg' : '15deg',
                    transformOrigin: '100% 100%',
                }}
            />
        </div>
    );
}
