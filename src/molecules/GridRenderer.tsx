import React from "react";
import './GridRenderer.css'

interface GridRendererProps<T> {
    items: T[][];
    columns: number;
    getKey: (item: T) => React.Key;
    renderItem: (args: T) => React.ReactNode;
};

function GridRenderer<T>({ items, columns, getKey, renderItem, }: GridRendererProps<T>) {
    return (
        <div
            className="grid"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: 12,
            }}
        >
            {items.map(row => (
                row.map(item => (
                    <React.Fragment key={getKey(item)}>
                        {renderItem(item)}
                    </React.Fragment>
                ))
            ))}
        </div>
    );
}

export default GridRenderer