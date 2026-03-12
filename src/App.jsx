import './App.css'

export default function App() {
  const products = [
    {
      name: "Finger Lime Giallo",
      note: "Per piatti marini, crudi, ostriche e contrasti vegetali.",
      image: "/boala-giallo.png",
    },
    {
      name: "Finger Lime Rosso",
      note: "Per note più scenografiche, plating eleganti e signature dishes.",
      image: "/boala-rosso.png",
    },
    {
      name: "Finger Lime Salmone",
      note: "Per menu degustazione, aperitivi creativi e pairing contemporanei.",
      image: "/boala-salmone.png",
    },
  ];

  const pillars = [
    "Creare desiderio, non semplice disponibilità.",
    "Raccontare l’origine del prodotto come esperienza e mito.",
    "Riservare l’accesso a chef e locali selezionati.",
    "Trasformare ogni utilizzo in un gesto di prestigio.",
  ];

  const ritualSteps = [
    {
      n: "01",
      t: "Il dono",
      d: "La box si apre come una reliquia contemporanea: non si offre un campione, si consegna un privilegio.",
    },
    {
      n: "02",
      t: "La rivelazione",
      d: "Il vasetto appare al centro, freddo, ordinato, silenzioso. Il gesto precede la parola.",
    },
    {
      n: "03",
      t: "L’assaggio",
      d: "Poche perle, un cucchiaino, un istante. La sorpresa deve essere immediata, netta, memorabile.",
    },
    {
      n: "04",
      t: "La prenotazione",
      d: "L’incontro non chiude una vendita: apre una selezione. Chi entra, entra per primo.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,120,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-200/80">
                Boalà / Finger Lime Italia
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
                L’estasi del gusto non è per tutti.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                Boalà trasforma il finger lime in un simbolo di esclusività gastronomica:
                perle agrumate naturali, luminose, rare, pensate per chef, ristoranti e
                cocktail bar che vogliono firmare esperienze memorabili.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contatti"
                  className="rounded-full bg-amber-200 px-6 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
                >
                  Richiedi un incontro
                </a>
                <a
                  href="#rituale"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-neutral-900/40"
                >
                  Scopri il rituale
                </a>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[2rem] border border-white/10 bg-neutral-900/40 p-4 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="rounded-[1.5rem] border border-amber-200/20 bg-neutral-900 p-8">
                  <div className="mb-10 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">
                        Boalà
                      </p>
                      <p className="mt-2 text-2xl font-semibold">Ritual Box</p>
                    </div>
                    <div className="rounded-full border border-amber-200/30 px-3 py-1 text-xs text-amber-100">
                      max 12°C
                    </div>
                  </div>

                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-5">
                    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5 text-center text-sm text-neutral-300">
                      Cucchiaino rituale
                    </div>

                    <div className="rounded-[1.75rem] border border-amber-200/30 bg-gradient-to-b from-neutral-800 to-neutral-950 p-6 text-center shadow-lg shadow-amber-200/10">
                      <div className="mx-auto mb-3 h-24 w-24 rounded-full border-4 border-amber-200/40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),rgba(30,30,30,1))]" />
                      <p className="text-sm uppercase tracking-[0.25em] text-amber-100/70">
                        Vasetto
                      </p>
                      <p className="mt-1 text-base">Finger Lime Pearls</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5 text-center text-sm text-neutral-300">
                      Pinzetta chef
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-neutral-900 p-5">
                    <div className="flex items-center justify-between text-sm text-neutral-400">
                      <span>Comparto refrigerante</span>
                      <span>ghiaccio / ice pack</span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-2xl border border-cyan-200/20 bg-yellow-100" />
                      <div className="h-16 rounded-2xl border border-cyan-200/20 bg-yellow-100" />
                      <div className="h-16 rounded-2xl border border-cyan-200/20 bg-yellow-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-200/70">Mito</p>
              <p className="mt-3 text-neutral-300">
                Non un semplice agrume, ma un ingrediente da raccontare, ricordare e desiderare.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-200/70">Esclusività</p>
              <p className="mt-3 text-neutral-300">
                Nessuna diffusione indiscriminata, nessuna banalizzazione, nessun accesso per tutti.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-200/70">Privilegio</p>
              <p className="mt-3 text-neutral-300">
                Ogni chef che lo scopre entra in un cerchio ristretto, selezionato e memorabile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/70">Il concetto</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Non un ingrediente. Un accesso.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Le perle di finger lime esplodono in bocca con freschezza, acidità e luminosità
              visiva. Ma il vero posizionamento Boalà è più profondo: non vendere un prodotto,
              bensì costruire un immaginario fatto di attesa, gesto, privilegio e racconto.
            </p>
          </div>

          <div className="grid gap-4">
            {pillars.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6">
                <p className="text-base leading-7 text-neutral-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rituale" className="border-y border-white/10 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/70">La liturgia</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Ogni incontro con uno chef diventa un rito.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {ritualSteps.map((step) => (
              <div key={step.n} className="rounded-[1.75rem] border border-white/10 bg-neutral-900 p-6">
                <p className="text-sm tracking-[0.3em] text-amber-200/60">{step.n}</p>
                <h3 className="mt-4 text-2xl font-medium">{step.t}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/70">Le varianti</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Una firma visiva per ogni creazione.
            </h2>
          </div>
          <p className="max-w-xl text-neutral-400">
            Tre espressioni di finger lime, pensate per la cucina d’autore, la mixology e il plating contemporaneo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group rounded-[2rem] border border-white/10 bg-neutral-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:bg-neutral-900/70 hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="mb-6 flex h-72 w-full items-center justify-center rounded-[1.5rem] border border-amber-200/15 bg-neutral-900/80 p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[250px] w-[250px] object-contain transition duration-300 group-hover:scale-[1.04]"
                />
              </div>

              <h3 className="text-2xl font-medium">{product.name}</h3>
              <p className="mt-3 leading-7 text-neutral-400">{product.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-neutral-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/70">Esclusività</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Non disponibile per tutti. Destinato a pochi.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Nessun e-commerce, nessuna presenza diffusa, nessuna banalizzazione. Boalà entra nei luoghi giusti
              attraverso relazioni, presentazioni, prenotazioni e storytelling. È un ingrediente che si merita.
            </p>
          </div>

          <div className="rounded-[2rem] border border-amber-200/15 bg-black p-8 shadow-2xl shadow-black/50">
            <p className="text-2xl font-medium leading-10 text-neutral-100">
              “Quando lasciamo un campione, ci aspettiamo un racconto.
              Quando chiediamo un incontro, non stiamo vendendo: stiamo selezionando.”
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-neutral-900/40 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/70">Per gli chef</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Non chiediamo una vendita. Cerchiamo una visione.
            </h2>
            <p className="mt-6 leading-8 text-neutral-300">
              Ogni presentazione privata è pensata per lasciare un’impressione precisa:
              rarità, estetica, gesto, racconto. Il finger lime diventa parte del linguaggio dello chef,
              non una semplice aggiunta al piatto.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/70">Il privilegio</p>
            <p className="mt-6 text-2xl leading-10 text-neutral-100">
              Accesso limitato, distribuzione selettiva, racconto condiviso:
              è così che un ingrediente smette di essere un prodotto e diventa un segno distintivo.
            </p>
          </div>
        </div>
      </section>

      <section id="contatti" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/70">Contatti</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Richiedi una presentazione privata.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-neutral-400">
              Compila il form per ricevere informazioni, richiedere un incontro o prenotare una presentazione Boalà dedicata al tuo ristorante, cocktail bar o progetto gastronomico.
            </p>
          </div>

          <form
  action="https://formsubmit.co/operativo@mdcsrl.eu"
  method="post"
  encType="text/plain"
  className="rounded-[2rem] border border-white/10 bg-neutral-900/40 p-6 md:p-8"
>
  <div className="grid gap-5">

    <input
      name="Nome"
      className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-neutral-500"
      placeholder="Nome e cognome"
      required
    />

    <input
      name="Contatto"
      className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-neutral-500"
      placeholder="Email o telefono"
      required
    />

    <textarea
      name="Messaggio"
      rows={5}
      className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-neutral-500"
      placeholder="Raccontaci il tuo locale o il tipo di esperienza che vuoi creare"
    />

    <button
      type="submit"
      className="rounded-full bg-amber-200 px-6 py-4 text-sm font-medium text-neutral-950 transition hover:scale-[1.01]"
    >
      Invia richiesta
    </button>

    <a
      href="https://wa.me/393428446995"
      target="_blank"
      className="text-center rounded-full border border-white/20 px-6 py-4 text-sm hover:bg-white/10 transition"
    >
      Contattaci su WhatsApp
    </a>

  </div>
</form>
        </div>
      </section>
    </div>
  );
}