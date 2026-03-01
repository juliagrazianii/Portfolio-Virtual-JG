export default function Contact({ contactLinks }) {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="font-heading text-4xl font-bold mb-4 text-[#5A5A5A]">
          Vamos Conversar?
        </h2>

        <p className="text-lg text-[#7A7A7A] mb-10">
          Adoraria ouvir sobre seu projeto!
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {contactLinks.map(link => {
            const isEmail = link.url.includes("@")
            const href = isEmail
              ? `mailto:${link.url}`
              : link.url.startsWith("http")
              ? link.url
              : `https://${link.url}`

            return (
              <a
                key={link.id}
                href={href}
                target={isEmail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
              >
                <h3 className="font-semibold mb-2 text-[#5A5A5A]">
                  {link.name}
                </h3>
                <p className="text-[#7A7A7A] break-words">
                  {link.url}
                </p>
              </a>
            )
          })}

        </div>
      </div>
    </section>
  )
}