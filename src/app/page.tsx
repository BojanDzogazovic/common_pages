import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div className="font-sans items-center justify-items-center">
      <Navbar />
      <div
        className="hero justify-center items-center text-center bg-sky-300"
        style={{ marginX: "100%" }}
      >
        <p className="pt-40 pb-20 text-2xl font-bold text-sky-950">
          Hero section
        </p>
        <button className="mb-25 bg-sky-950 px-5 py-3 text-white font-bold">
          CTA
        </button>
      </div>
    </div>
  );
}
