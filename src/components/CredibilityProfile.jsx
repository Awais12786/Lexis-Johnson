import LexisImage from "../assets/Lexis1.jpg";

export default function CredibilityProfile() {
  return (
    <section className="py-32 max-w-[1440px] mx-auto px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden flex justify-center items-center">
          <img
            alt="Lexis Johnson"
            className="w-full h-full object-cover"
            src={LexisImage}
          />
        </div>
        <div>
          <h2 className="font-display-lg text-4xl text-secondary-fixed mb-6">
            54 Years. 55,000 Conversations. One System.
          </h2>
          <p className="font-body-lg font-light leading-[1.6em] text-on-surface-variant">
            Lexis Johnson is the fifth generation in her family trained to read
            these cycles, and the first to put that work into software. 54 years
            of lineage, 55,000 recorded conversations, and one definitive
            system.
          </p>
        </div>
      </div>
    </section>
  );
}
