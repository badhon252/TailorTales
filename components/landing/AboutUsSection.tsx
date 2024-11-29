export default function AboutUsSection() {
  return (
    <section
      className="py-20 bg-black min-h-screen flex items-center"
      style={{
        background:
          "radial-gradient(circle,rgb(31, 0, 134) 30%, rgb(27, 1, 112) 50%, rgba(0,0,0,1) 80%",
      }}
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="font-heading text-4xl md:text-6xl font-bold my-12 text-white">
          About <span className="">TailorTales</span>
        </h2>
        <p className="text-2xl max-w-2xl mx-auto text-gray-300 rounded-lg  p-6">
          Helping small businesses tell big stories with the power of AI.
          We&quot;re on a mission to revolutionize content creation and empower
          brands to connect with their audience like never before.
        </p>
      </div>
    </section>
  );
}
