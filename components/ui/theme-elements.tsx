export function GlobalThemeBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-50">
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[60%] h-[80%] bg-blue-200/50 blur-[150px] rounded-full"></div>
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-100/50 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-[20%] left-0 w-full h-[30%] bg-blue-100/50 blur-[100px]"></div>
        </div>
    );
}

export function HeroGridBackground() {
    return (
        <div
            className="absolute inset-0 opacity-[0.4] pointer-events-none"
            style={{
                backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }}
        ></div>
    );
}
