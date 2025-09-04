import React, { useMemo } from "react";
import styles from './GridRenderer.module.css'

type WithRowCol<T> = T & { r: number, c: number }

interface GridRendererProps<T> {
    className?: string,
    items: T[];
    columns: number;
    getKey: (item: T) => React.Key;
    renderItem: (args: T) => React.ReactNode;
};

function GridRenderer<T>({ items, columns, getKey, renderItem, className }: GridRendererProps<T>) {
    const gridItems = useMemo(() => {
        return Object
            .keys(items)
            .map((idx: string) => {
                const idxNum = Number(idx)
                return {
                    ...items[idxNum],
                    r: Math.floor(idxNum / columns),
                    c: idxNum % (columns),
                } as WithRowCol<T>
            })
    }, [items, columns])

    return (
        <div
            className={styles.grid + (className ? ' ' + className : '')}
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
        >
            {gridItems.map(item => (
                <React.Fragment key={getKey(item)}>
                    {renderItem(item)}
                </React.Fragment>
            ))}
        </div>
    );
}

export default GridRenderer