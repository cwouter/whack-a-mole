import { useEffect, useRef } from 'react';

export function useCustomCursor() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        let x = 0;
        let y = 0;
        let tx = 0;
        let ty = 0;

        const speed = 1;

        const onMouseMove = (e: MouseEvent) => {
            tx = e.clientX;
            ty = e.clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            const t = e.touches[0];
            if (t) {
                tx = t.clientX;
                ty = t.clientY;
            }
        };

        let rafId = 0;
        const loop = () => {
            x += (tx - x) * speed;
            y += (ty - y) * speed;

            el.style.transform = `translate(${x}px, ${y}px)`;

            rafId = requestAnimationFrame(loop);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchmove', onTouchMove, { passive: true });

        rafId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return wrapperRef;
}
