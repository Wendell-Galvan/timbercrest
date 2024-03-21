import React from "react";

const page = () => {
  const style = {
    backgroundImage: "url(/images/services.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 0.8,
  };

  return (
    <section className="h-screen w-screen bg-slate-300">
      <div className="flex h-1/3 w-screen" style={style}>
        <h1 className="m-auto text-white text-6xl font-bold font-serif tracking-wider drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Services
        </h1>
      </div>
    </section>
  );
};

export default page;
