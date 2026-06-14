import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PROMOS = [
  {
    title: "Маникюр + педикюр",
    discount: "−25%",
    old: "2 200 ₽",
    now: "1 650 ₽",
    desc: "Комплекс «всё включено»: классический маникюр и педикюр с гель-лаком за одно посещение.",
    code: "DUO25",
    until: "до 31 августа",
    emoji: "🌸",
    featured: true,
  },
  {
    title: "Приведи подругу",
    discount: "−500 ₽",
    old: "",
    now: "−500 ₽ каждой",
    desc: "Запишитесь вдвоём — и обе получите скидку 500 рублей на любую услугу.",
    code: "FRIEND",
    until: "весь сезон",
    emoji: "💕",
    featured: false,
  },
  {
    title: "Дизайн в подарок",
    discount: "0 ₽",
    old: "от 200 ₽",
    now: "Бесплатно",
    desc: "Дизайн двух ногтей в подарок при заказе покрытия гель-лаком.",
    code: "ARTGIFT",
    until: "до 15 сентября",
    emoji: "✨",
    featured: false,
  },
  {
    title: "Утренний тариф",
    discount: "−20%",
    old: "",
    now: "−20% на всё",
    desc: "Скидка на любые услуги при записи на время с 10:00 до 12:00 в будни.",
    code: "MORNING",
    until: "по будням",
    emoji: "☀️",
    featured: false,
  },
];

export default function Promo() {
  return (
    <div className="min-h-screen bg-cream font-body">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-beige-dark/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-light tracking-widest text-foreground">
            Lunaré
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-body font-light text-muted-foreground hover:text-rose transition-colors"
          >
            <Icon name="ArrowLeft" size={16} /> На главную
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-light/40 via-cream to-beige/60" />
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-rose-light/30 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-beige-dark/30">
            <Icon name="Gift" size={14} className="text-rose" />
            <span className="text-xs font-body text-muted-foreground tracking-wider uppercase">Сезонные предложения</span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-foreground leading-tight mb-6">
            Акции <em className="text-rose not-italic">сезона</em>
          </h1>
          <p className="font-body text-muted-foreground font-light text-lg max-w-xl mx-auto">
            Дарим красоту по приятным ценам. Назовите промокод при записи — и скидка ваша.
          </p>
        </div>
      </section>

      {/* PROMOS */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {PROMOS.map((promo, i) => (
            <div
              key={promo.code}
              className={`relative p-8 rounded-3xl border hover-lift animate-fade-in overflow-hidden ${
                promo.featured
                  ? "md:col-span-2 bg-rose text-white border-rose"
                  : "bg-white border-beige-dark/30"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="text-4xl mb-4">{promo.emoji}</div>
                  <h3 className={`font-display text-3xl font-normal mb-3 ${promo.featured ? "text-white" : "text-foreground"}`}>
                    {promo.title}
                  </h3>
                  <p className={`font-body text-sm leading-relaxed mb-6 max-w-md ${promo.featured ? "text-white/80" : "text-muted-foreground"}`}>
                    {promo.desc}
                  </p>

                  <div className="flex items-end gap-3 mb-6">
                    {promo.old && (
                      <span className={`font-body text-sm line-through ${promo.featured ? "text-white/50" : "text-muted-foreground/50"}`}>
                        {promo.old}
                      </span>
                    )}
                    <span className={`font-display text-3xl font-light ${promo.featured ? "text-white" : "text-rose"}`}>
                      {promo.now}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-body ${
                      promo.featured ? "bg-white/20 text-white" : "bg-rose-light/50 text-rose-dark"
                    }`}>
                      <Icon name="Tag" size={14} /> Промокод: <strong className="tracking-wider">{promo.code}</strong>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-body ${promo.featured ? "text-white/70" : "text-muted-foreground"}`}>
                      <Icon name="Clock" size={13} /> {promo.until}
                    </div>
                  </div>
                </div>

                <div className={`hidden sm:flex flex-col items-center justify-center w-24 h-24 rounded-2xl flex-shrink-0 ${
                  promo.featured ? "bg-white/15" : "bg-rose-light/40"
                }`}>
                  <span className={`font-display text-3xl font-light ${promo.featured ? "text-white" : "text-rose"}`}>
                    {promo.discount}
                  </span>
                </div>
              </div>

              <Link
                to="/#booking"
                className={`mt-6 inline-flex items-center justify-center gap-2 font-body font-normal px-7 py-3.5 rounded-full text-sm transition-all ${
                  promo.featured
                    ? "bg-white text-rose hover:bg-cream"
                    : "bg-rose text-white hover:bg-rose-dark"
                }`}
              >
                Записаться по акции <Icon name="ArrowRight" size={15} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 text-center border border-beige-dark/20 shadow-sm">
            <div className="text-4xl mb-4">💅</div>
            <h2 className="font-display text-4xl font-light text-foreground mb-4">Не нашли подходящую акцию?</h2>
            <p className="font-body text-muted-foreground font-light mb-8">
              Напишите нам — подберём индивидуальное предложение под ваш запрос.
            </p>
            <Link
              to="/#booking"
              className="inline-flex items-center gap-2 bg-rose text-white font-body font-normal px-8 py-4 rounded-full hover:bg-rose-dark transition-all hover:shadow-lg hover:shadow-rose/20"
            >
              Записаться
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/">
            <div className="font-display text-2xl font-light tracking-widest text-white mb-1">Lunaré</div>
            <div className="font-body text-xs text-white/40">Студия маникюра · Новосибирск</div>
          </Link>
          <div className="flex items-center gap-6 text-xs font-body text-white/40">
            <Link to="/" className="hover:text-white/70 transition-colors">Главная</Link>
            <Link to="/promo" className="hover:text-white/70 transition-colors">Акции</Link>
            <Link to="/#booking" className="hover:text-white/70 transition-colors">Запись</Link>
          </div>
          <div className="font-body text-xs text-white/30">© 2025 Lunaré</div>
        </div>
      </footer>
    </div>
  );
}
