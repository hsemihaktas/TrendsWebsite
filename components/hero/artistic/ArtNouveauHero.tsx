export default function ArtNouveauHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center" style={{ background:'#f8f3e8' }} aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice">
          {/* Flowing botanical frame */}
          <path d="M10,10 C10,10 30,5 40,20 C50,35 45,55 30,60 C15,65 5,55 10,40 C15,25 25,20 20,10Z" fill="none" stroke="#5a8a3c" strokeWidth="1" opacity="0.6"/>
          <path d="M190,10 C190,10 170,5 160,20 C150,35 155,55 170,60 C185,65 195,55 190,40 C185,25 175,20 180,10Z" fill="none" stroke="#5a8a3c" strokeWidth="1" opacity="0.6"/>
          <path d="M10,120 C10,120 30,125 40,110 C50,95 45,75 30,70 C15,65 5,75 10,90 C15,105 25,110 20,120Z" fill="none" stroke="#5a8a3c" strokeWidth="1" opacity="0.6"/>
          <path d="M190,120 C190,120 170,125 160,110 C150,95 155,75 170,70 C185,65 195,75 190,90 C185,105 175,110 180,120Z" fill="none" stroke="#5a8a3c" strokeWidth="1" opacity="0.6"/>
          {/* Flowing vine lines */}
          <path d="M10,65 C30,55 50,70 70,60 C90,50 110,65 130,55 C150,45 170,60 190,65" fill="none" stroke="#8b6914" strokeWidth="0.8" opacity="0.5"/>
          <path d="M10,65 C30,75 50,60 70,70 C90,80 110,65 130,75 C150,85 170,70 190,65" fill="none" stroke="#8b6914" strokeWidth="0.8" opacity="0.5"/>
          {/* Flower motifs */}
          <circle cx="15" cy="65" r="4" fill="none" stroke="#8b6914" strokeWidth="1" opacity="0.5"/>
          <circle cx="100" cy="20" r="3" fill="none" stroke="#5a8a3c" strokeWidth="1" opacity="0.4"/>
          <circle cx="100" cy="110" r="3" fill="none" stroke="#5a8a3c" strokeWidth="1" opacity="0.4"/>
        </svg>

        <div className="relative z-10 text-center px-8">
          <div className="text-[9px] uppercase tracking-[0.4em] mb-2" style={{ color:'#8b6914', fontFamily:'Georgia, serif' }}>Nouveau</div>
          <div className="text-[26px] font-light" style={{ color:'#2d4a1e', fontFamily:'Georgia, serif', letterSpacing:'0.05em' }}>Art Nouveau</div>
          <div className="text-[10px] italic mt-1" style={{ color:'#8b6914', fontFamily:'Georgia, serif' }}>organic · botanical · flowing</div>
        </div>
      </div>
    </div>
  );
}
