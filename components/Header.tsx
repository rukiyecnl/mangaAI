export default function Header() {
    return (
        <nav className="
      sticky top-0 z-50
      backdrop-blur-md bg-white/70
      border-b border-slate-200
      shadow-sm
    ">
            <div className="max-w-7xl px-8 h-16 flex items-center">

                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="
                        w-9 h-9 rounded-xl
                        bg-gradient-to-r from-pink-400 to-orange-400
                        flex items-center justify-center
                        text-white font-bold
                    ">
                        M
                    </div>

                    <span className="font-semibold tracking-wide text-slate-700">
                        Manga AI
                    </span>
                </div>

            </div>
        </nav>
    );
}
