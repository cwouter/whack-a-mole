interface ViewportProps {
    width: number,
    height: number,
    children: React.ReactNode
}

function Viewport({ width, height, children }: ViewportProps) {
    return (
        <div style={{ width, height }} className="viewport">
            {children}
        </div>
    )
}

export default Viewport