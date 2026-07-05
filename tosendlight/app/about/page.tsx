import Image from "next/image";

export default function About() {
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
          <h1 className="text-3xl font-semibold mb-2">Joy Caminero</h1>
          <p className="text-gray-600">
            I am a (...) excited to (...). Continue reading to learn more about
            my services and credentials.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Born and raised in Puerto Rico, I always had a musical inclination.
          Once I had to decide what to do professionally, I always knew I wanted
          to work with music, but never knew WHAT.
        </p>

        <p className="text-gray-700 leading-relaxed">
          After extensive research and help from academic advisors, I chose
          Music Therapy and never looked back. Now, I practice music therapy,
          but also found a passion in teaching!
        </p>
      </section>

      {/* WHAT IS MUSIC THERAPY */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is Music Therapy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Music Therapy is (...)
        </p>
      </section>

      {/* SERVICES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Repeat this block for each service */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-1">Music Lessons</h3>
            <p className="text-gray-600 text-sm">
              Learn how to play the piano, the guitar, or enhance your vocal
              ability individually or in a group. Contact me to get a quote.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-1">Music Therapy</h3>
            <p className="text-gray-600 text-sm">
              Book a music therapy to work on (...).
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Credentials</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>B.A. Music Therapy — St. Mary of the Woods College, 2025</li>
          <li>Certification - Date</li>
          <li>Years of experience in your field</li>
        </ul>
      </section>
    </main>
  );
}
