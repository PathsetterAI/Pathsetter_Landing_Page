import React from 'react'

export default function ShaderBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
      {/* Mesh spheres */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#00bf99]/20 to-transparent blur-[120px] animate-blob" />
      <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#00bf99]/10 to-[#090d16]/10 blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-[20%] left-[20%] w-[55%] h-[55%] rounded-full bg-gradient-to-br from-[#00bf99]/15 to-transparent blur-[130px] animate-blob animation-delay-4000" />
      
      {/* Modern subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  )
}
