"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


export default function Page() {

  const [petals, setPetals] = useState<any[]>([]);
  const [sparkles, setSparkles] = useState<any[]>([]);
  const [showIntro, setShowIntro] = useState(true);
  const [clickFlowers, setClickFlowers] = useState<
  { id: number; x: number; y: number }[]
>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 8,
      }))
    );

    setSparkles(
      Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
      }))
    );
    const timer = setTimeout(() => {
        setShowIntro(false);
      }, 5800);
      
      return () => clearTimeout(timer);
  }, []);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
  
    const flower = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  
    setClickFlowers((prev) => [...prev, flower]);
  
    setTimeout(() => {
      setClickFlowers((prev) =>
        prev.filter((f) => f.id !== flower.id)
      );
    }, 1200);
  };
  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
       <motion.div
       key="intro"
       className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br from-[#CFC7B5] via-[#DDD6C7] to-[#ECE6D9] flex items-center justify-center"
       initial={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 1.2 }}
     >
     
       {/* Background Glow */}
     
       <div className="absolute h-[700px] w-[700px] rounded-full bg-yellow-400/20 blur-[220px]" />
     
       <div className="absolute h-[350px] w-[350px] rounded-full bg-orange-200/20 blur-[120px]" />
     
       {/* Top Text */}
     
       <motion.p
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
         className="absolute top-16 tracking-[8px] uppercase text-[#5B4730] font-semibold text-lg"
       >
         सगाई समारोह
       </motion.p>
     
       {/* Om */}
     
       <motion.div
         initial={{
           opacity: 0,
           scale: .5,
         }}
         animate={{
           opacity: 1,
           scale: 1,
         }}
         transition={{
           duration: 1.2,
         }}
         className="absolute top-32"
       >
     
         <div className="
text-[70px]
sm:text-[90px]
md:text-[120px]
text-[#8A642F] drop-shadow-[0_0_25px_rgba(212,175,55,.35)]
">
     
           🕉️
     
         </div>
     
       </motion.div>
       {/* Sanskrit Mantra */}

       <div className="mt-28 sm:mt-32 md:mt-36 flex flex-col items-center px-4">

<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: .8 }}
  className="
text-2xl
sm:text-3xl
md:text-5xl
font-semibold
text-[#6B4F2A]
tracking-[3px]
text-center
px-5
"
>
  श्री गणेशाय नमः
</motion.h1>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.4 }}
  className="mt-8 sm:mt-10 md:mt-12 space-y-2 sm:space-y-3 md:space-y-4 text-center"
>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="
text-lg
sm:text-2xl
md:text-3xl
text-[#5B4730]
text-center
px-6
"
  >
    वक्रतुण्ड महाकाय
  </motion.p>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.8 }}
    className="
text-lg
sm:text-2xl
md:text-3xl
text-[#5B4730]
text-center
px-6
"
  >
    सूर्यकोटि समप्रभ।
  </motion.p>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2.1 }}
    className="
text-lg
sm:text-2xl
md:text-3xl
text-[#5B4730]
text-center
px-6
"
  >
    निर्विघ्नं कुरु मे देव
  </motion.p>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2.4 }}
    className="
    text-lg
    sm:text-2xl
    md:text-3xl
  text-[#5B4730]
    text-center
    px-6
    "
  >
    सर्वकार्येषु सर्वदा॥
  </motion.p>

</motion.div>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2.8 }}
  className="mt-12 max-w-2xl text-center text-lg tracking-[3px] text-[#6A5740]"
>
  With the divine blessings of Lord Ganesha,
  we warmly invite you to celebrate
  the beginning of a beautiful journey.
</motion.p>

</div>
{/* Royal Divider */}

<motion.div
  initial={{ opacity: 0, scaleX: 0 }}
  animate={{
    opacity: 1,
    scaleX: 1,
  }}
  transition={{
    delay: 3,
    duration: 1,
  }}
  className="mt-12 h-[2px] w-[420px] bg-gradient-to-r from-transparent via-[#7A5B2E] to-transparent"
/>

{/* Blessing */}

<motion.p
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
  }}
  transition={{
    delay: 3.2,
  }}
  className="mt-8 text-center text-[#7A5D32] tracking-[8px] uppercase"
>

  Together With Their Families

</motion.p>

{/* Golden Shine */}

<motion.div
  className="absolute inset-0 pointer-events-none"
  initial={{
    x: "-100%",
  }}
  animate={{
    x: "120%",
  }}
  transition={{
    delay: 3.3,
    duration: 1.8,
    ease: "easeInOut",
  }}
>

  <div
    className="h-full w-[220px] rotate-[20deg]"
    style={{
      background:
        "linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent)",
      filter: "blur(10px)",
    }}
  />

</motion.div>

{/* Decorative Corners */}

<div className="absolute left-10 top-10 text-[70px] text-yellow-400/20">
  ❀
</div>

<div className="absolute right-10 top-10 rotate-180 text-[70px] text-yellow-400/20">
  ❀
</div>

<div className="absolute bottom-10 left-10 rotate-90 text-[70px] text-yellow-400/20">
  ❀
</div>

<div className="absolute bottom-10 right-10 -rotate-90 text-[70px] text-yellow-400/20">
  ❀
</div>
</motion.div>
      ) : (
        <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#DDD9C8] via-[#D0CAB5] to-[#C1B89D]">

      {/* Background Glow */}

      <div
  className="
absolute
left-1/2
top-10
h-[350px]
w-[350px]
sm:h-[450px]
sm:w-[450px]
md:h-[700px]
md:w-[700px]
-translate-x-1/2
rounded-full
bg-yellow-400/12
blur-[170px]
md:blur-[240px]
"
/>
<div
  className="
absolute
bottom-0
left-1/2
h-[500px]
w-[500px]
-translate-x-1/2
rounded-full
bg-yellow-500/8
blur-[170px]
"
/>

      {/* Sparkles */}

      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-yellow-600/70"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: 3,
            height: 3,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: s.delay,
          }}
        />
      ))}

      {/* Petals */}

      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="
absolute
text-base
sm:text-xl
md:text-2xl
"
          style={{
            left: `${p.left}%`,
            top: -40,
          }}
          animate={{
            y: ["0vh", "120vh"],
            rotate: [0, 360],
            x: [0, 30, -30, 20],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: p.duration,
            delay: p.delay,
          }}
        >
          {["🌸", "✨", "🌺", "🤍"][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}

      {/* Invitation */}

      <div
  onClick={handleClick}
  className="
relative
z-10
flex
justify-center
px-2
sm:px-4
md:px-8
pt-3
pb-24
md:py-20
cursor-pointer
"
>

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.02,
          }}
          className="
relative
w-[96vw]
sm:w-[92vw]
md:w-[850px]
lg:w-[900px]
max-w-[900px]
"
        >
            <div
  className="
absolute
inset-0
scale-95
rounded-[30px]
bg-yellow-400/20
blur-3xl
"
/>

<Image
  src="/invitation.png"
  alt="Engagement Invitation"
  width={900}
  height={1600}
  priority
  className="
relative
z-10
w-full
h-auto
rounded-2xl
md:rounded-[30px]
shadow-[0_35px_90px_rgba(0,0,0,.18)]
"
/>
{clickFlowers.map((flower) => (
  <div
    key={flower.id}
    className="pointer-events-none absolute"
    style={{
      left: flower.x,
      top: flower.y,
    }}
  >
    {Array.from({ length: 10 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-xl"
        initial={{
          x: 0,
          y: 0,
          opacity: 1,
          scale: 0.4,
        }}
        animate={{
          x: Math.cos((i / 10) * Math.PI * 2) * 80,
          y: Math.sin((i / 10) * Math.PI * 2) * 80,
          opacity: 0,
          scale: 1.3,
          rotate: 360,
        }}
        transition={{
          duration: 1.1,
          ease: "easeOut",
        }}
      >
        🌸
      </motion.div>
    ))}
  </div>
))}
        </motion.div>

      </div>

      {/* Floating Button */}

      <motion.a
        href="https://www.google.com/maps/search/?api=1&query=87+Milestone,+Jaipur-Delhi+Expy,+Kathuwas,+Haryana+123401"
        target="_blank"
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: .95,
        }}
        className="
        fixed
        bottom-10
        md:bottom-8
        left-1/2
        z-[9999]
        -translate-x-1/2
        rounded-full
        bg-gradient-to-r
        from-[#D4AF37]
to-[#F2D16B]
        px-5
        sm:px-8
        py-3
        sm:py-4
        text-sm
        sm:text-base
        font-bold
        text-black
        shadow-[0_0_30px_rgba(255,215,0,.5)]
        "
      >
        📍 Get Directions
      </motion.a>

      </main>
    )}
  </AnimatePresence>
  );
}
