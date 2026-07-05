import Image from "next/image";

export default function Booking() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {/* HERO / INTRO */}
      <section className="flex flex-col sm:flex-row items-center gap-6 mb-12">
        <Image
          src="/images/profile-photo.jpg"
          alt="Joynelis Caminero Santiago"
          width={160}
          height={160}
          className="rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-semibold mb-2">Your Name</h1>
          <p className="text-gray-600">
            Short one-line tagline about who you are and what you do.
          </p>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Credentials</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Your degree / certification — Institution, Year</li>
          <li>Relevant license or accreditation</li>
          <li>Years of experience in your field</li>
        </ul>
      </section>

      {/* JOURNEY */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
        <p className="text-gray-700 leading-relaxed">
          Write your story here — how you got started, what drives you, and what
          makes your approach different. This can be 2-3 paragraphs; break it
          into multiple &lt;p&gt; tags for readability.
        </p>
      </section>

      {/* SERVICES */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Repeat this block for each service */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-1">Service Name</h3>
            <p className="text-gray-600 text-sm">
              Short description of what this service includes.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-1">Another Service</h3>
            <p className="text-gray-600 text-sm">
              Short description of what this service includes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
