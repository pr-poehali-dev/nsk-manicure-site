import { useState } from "react";
import Icon from "@/components/ui/icon";

const MASTERS = [
  {
    id: 1,
    name: "Анна Соколова",
    title: "Топ-мастер",
    experience: "7 лет опыта",
    emoji: "✨",
    speciality: "Гель-лак, дизайн",
  },
  {
    id: 2,
    name: "Мария Петрова",
    title: "Арт-мастер",
    experience: "5 лет опыта",
    emoji: "🌸",
    speciality: "Nail-art, акрил",
  },
  {
    id: 3,
    name: "Екатерина Лис",
    title: "Мастер",
    experience: "3 года опыта",
    emoji: "💅",
    speciality: "Маникюр, педикюр",
  },
];

const SERVICES = [
  { name: "Классический маникюр", price: "800 ₽", duration: "60 мин", icon: "Sparkles" },
  { name: "Гель-лак", price: "1 200 ₽", duration: "90 мин", icon: "Gem" },
  { name: "Наращивание ногтей", price: "2 500 ₽", duration: "120 мин", icon: "Star" },
  { name: "Дизайн ногтей", price: "от 200 ₽", duration: "30 мин", icon: "Palette" },
  { name: "Педикюр классический", price: "1 000 ₽", duration: "75 мин", icon: "Flower2" },
  { name: "Педикюр с гель-лаком", price: "1 500 ₽", duration: "100 мин", icon: "Heart" },
];

const REVIEWS = [
  {
    name: "Диана К.",
    text: "Обожаю эту студию! Анна делает невероятный дизайн, всегда предлагает что-то новое. Держится больше 3 недель без сколов.",
    rating: 5,
    date: "Май 2025",
  },
  {
    name: "Ольга Р.",
    text: "Записалась через сайт — очень удобно! Пришла, всё готово. Мастер Мария настоящий профессионал, руки как картинка.",
    rating: 5,
    date: "Апрель 2025",
  },
  {
    name: "Светлана М.",
    text: "Чистота, уют, приятная атмосфера. Цены адекватные, качество высокое. Теперь только сюда!",
    rating: 5,
    date: "Март 2025",
  },
];

const GALLERY_IMAGES = [
  "https://cdn.poehali.dev/projects/687183f0-6f1a-4aa2-931d-dab6d66ac2df/files/418c66fe-3470-417c-bc15-f63a633ca170.jpg",
  "https://cdn.poehali.dev/projects/687183f0-6f1a-4aa2-931d-dab6d66ac2df/files/03599470-4e9f-4d86-8b38-6aee32de5cd7.jpg",
  "https://cdn.poehali.dev/projects/687183f0-6f1a-4aa2-931d-dab6d66ac2df/files/28d4fb97-7ef1-453b-a310-1acc397d5219.jpg",
  "https://cdn.poehali.dev/projects/687183f0-6f1a-4aa2-931d-dab6d66ac2df/files/418c66fe-3470-417c-bc15-f63a633ca170.jpg",
  "https://cdn.poehali.dev/projects/687183f0-6f1a-4aa2-931d-dab6d66ac2df/files/28d4fb97-7ef1-453b-a310-1acc397d5219.jpg",
  "https://cdn.poehali.dev/projects/687183f0-6f1a-4aa2-931d-dab6d66ac2df/files/03599470-4e9f-4d86-8b38-6aee32de5cd7.jpg",
];

const WEEK_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const TIME_SLOTS: Record<number, Record<string, boolean>> = {
  1: { "10:00": true, "11:30": false, "13:00": true, "14:30": true, "16:00": false, "17:30": true, "19:00": true },
  2: { "10:00": false, "11:30": true, "13:00": false, "14:30": true, "16:00": true, "17:30": false, "19:00": true },
  3: { "10:00": true, "11:30": true, "13:00": true, "14:30": false, "16:00": true, "17:30": true, "19:00": false },
};

export default function Index() {
  const [selectedMaster, setSelectedMaster] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentSlots = selectedMaster ? TIME_SLOTS[selectedMaster] : null;

  const days = WEEK_DAYS.map((d, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return { label: d, date: date.getDate(), active: i === selectedDay };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream font-body">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-beige-dark/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display text-2xl font-light tracking-widest text-foreground">
            Lunaré
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-body font-light text-muted-foreground">
            <a href="#services" className="hover:text-rose transition-colors">Услуги</a>
            <a href="#gallery" className="hover:text-rose transition-colors">Работы</a>
            <a href="#masters" className="hover:text-rose transition-colors">Мастера</a>
            <a href="#reviews" className="hover:text-rose transition-colors">Отзывы</a>
            <a href="#booking" className="hover:text-rose transition-colors">Контакты</a>
          </div>
          <a
            href="#booking"
            className="hidden md:inline-flex bg-rose text-white text-sm font-body font-normal px-5 py-2.5 rounded-full hover:bg-rose-dark transition-colors"
          >
            Записаться
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name="Menu" size={22} className="text-foreground" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-beige-dark/30 px-6 py-4 flex flex-col gap-4 text-sm">
            {(["services","gallery","masters","reviews","booking"] as const).map((s, i) => (
              <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)} className="text-foreground/70 hover:text-rose">
                {["Услуги","Работы","Мастера","Отзывы","Контакты"][i]}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-light/40 via-cream to-beige/60" />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-rose-light/30 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-beige-dark/40 blur-2xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-beige-dark/30">
              <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
              <span className="text-xs font-body text-muted-foreground tracking-wider uppercase">Новосибирск · Запись онлайн</span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl font-light text-foreground leading-tight mb-6">
              Искусство<br />
              <em className="text-rose not-italic">красивых</em><br />
              ногтей
            </h1>

            <p className="font-body text-muted-foreground font-light text-lg leading-relaxed mb-10 max-w-md">
              Студия маникюра с профессиональными мастерами. Онлайн-расписание, удобная запись, результат который восхищает.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-rose text-white font-body font-normal px-8 py-4 rounded-full hover:bg-rose-dark transition-all hover:shadow-lg hover:shadow-rose/20"
              >
                Записаться
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/70 backdrop-blur-sm text-foreground font-body font-normal px-8 py-4 rounded-full border border-beige-dark/40 hover:bg-white transition-colors"
              >
                Узнать цены
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-12 border-t border-beige-dark/30">
              {([["500+", "Клиентов"], ["7", "Лет опыта"], ["3", "Мастера"]] as const).map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-light text-foreground">{n}</div>
                  <div className="font-body text-xs text-muted-foreground mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block animate-fade-in delay-300">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-rose-light/40" />
              <img
                src={GALLERY_IMAGES[0]}
                alt="Маникюр"
                className="relative rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-beige-dark/20">
                <div className="font-display text-sm text-muted-foreground mb-1">Следующая запись</div>
                <div className="font-body text-lg font-medium text-foreground">Сегодня 14:30</div>
                <div className="font-body text-xs text-rose mt-1">2 места свободно ✨</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={20} className="text-muted-foreground/50" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-body tracking-widest uppercase text-rose mb-4">Прайс-лист</div>
            <h2 className="font-display text-5xl font-light text-foreground">Наши услуги</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <div
                key={service.name}
                className="group p-7 rounded-2xl border border-beige-dark/30 hover-lift bg-cream/50 hover:bg-rose-light/20 transition-colors animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center mb-5">
                  <Icon name={service.icon as "Star"} size={18} className="text-rose-dark" fallback="Star" />
                </div>
                <h3 className="font-display text-xl font-normal text-foreground mb-2">{service.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-5">⏱ {service.duration}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-light text-rose">{service.price}</span>
                  <a href="#booking" className="text-xs font-body text-muted-foreground hover:text-rose transition-colors flex items-center gap-1">
                    Записаться <Icon name="ArrowRight" size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-body tracking-widest uppercase text-rose mb-4">Портфолио</div>
            <h2 className="font-display text-5xl font-light text-foreground">Наши работы</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`group overflow-hidden rounded-2xl hover-lift ${i === 0 ? "row-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt={`Работа ${i + 1}`}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${i === 0 ? "h-full" : "aspect-square"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTERS */}
      <section id="masters" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-body tracking-widest uppercase text-rose mb-4">Команда</div>
            <h2 className="font-display text-5xl font-light text-foreground">Наши мастера</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MASTERS.map((master, i) => (
              <div
                key={master.id}
                className={`group text-center p-10 rounded-3xl border-2 cursor-pointer transition-all duration-300 animate-fade-in ${
                  selectedMaster === master.id
                    ? "border-rose bg-rose-light/30 shadow-lg shadow-rose/10"
                    : "border-beige-dark/30 bg-cream/30 hover:border-rose/40 hover:bg-rose-light/10"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
                onClick={() => {
                  setSelectedMaster(master.id);
                  setSelectedTime(null);
                  document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="text-5xl mb-5">{master.emoji}</div>
                <div className="inline-flex items-center gap-1.5 bg-rose-light/60 rounded-full px-3 py-1 mb-4">
                  <span className="text-xs font-body text-rose-dark">{master.title}</span>
                </div>
                <h3 className="font-display text-2xl font-normal text-foreground mb-1">{master.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-2">{master.experience}</p>
                <p className="font-body text-xs text-rose/70">{master.speciality}</p>

                {selectedMaster === master.id && (
                  <div className="mt-5 text-xs font-body text-rose flex items-center justify-center gap-1">
                    <Icon name="CheckCircle" size={14} /> Выбран
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs font-body tracking-widest uppercase text-rose mb-4">Онлайн-расписание</div>
            <h2 className="font-display text-4xl font-light text-foreground">
              {selectedMaster
                ? `Расписание — ${MASTERS.find(m => m.id === selectedMaster)?.name}`
                : "Выберите мастера выше"}
            </h2>
          </div>

          {selectedMaster && (
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-beige-dark/20 animate-scale-in">
              <div className="grid grid-cols-7 gap-2 mb-8">
                {days.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => { setSelectedDay(i); setSelectedTime(null); }}
                    className={`flex flex-col items-center py-3 px-1 rounded-xl transition-all ${
                      d.active
                        ? "bg-rose text-white shadow-sm shadow-rose/30"
                        : "hover:bg-rose-light/40 text-muted-foreground"
                    }`}
                  >
                    <span className="text-xs font-body mb-1">{d.label}</span>
                    <span className={`font-display text-lg ${d.active ? "text-white" : "text-foreground"}`}>{d.date}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {currentSlots && Object.entries(currentSlots).map(([time, available]) => (
                  <button
                    key={time}
                    disabled={!available}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-xl text-sm font-body transition-all ${
                      !available
                        ? "bg-muted text-muted-foreground/40 cursor-not-allowed line-through"
                        : selectedTime === time
                          ? "bg-rose text-white shadow-sm shadow-rose/30"
                          : "bg-beige hover:bg-rose-light/50 text-foreground hover:text-rose-dark"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {selectedTime && (
                <div className="mt-6 p-4 bg-rose-light/30 rounded-2xl flex items-center justify-between animate-fade-in">
                  <div>
                    <div className="font-body text-sm text-muted-foreground">Выбрано время</div>
                    <div className="font-display text-xl text-foreground">
                      {days[selectedDay]?.label} {days[selectedDay]?.date} · {selectedTime}
                    </div>
                  </div>
                  <a
                    href="#booking"
                    className="bg-rose text-white text-sm font-body px-5 py-2.5 rounded-full hover:bg-rose-dark transition-colors"
                  >
                    Продолжить
                  </a>
                </div>
              )}
            </div>
          )}

          {!selectedMaster && (
            <div className="text-center py-12 text-muted-foreground/50">
              <div className="text-4xl mb-3">💅</div>
              <p className="font-body text-sm">Нажмите на карточку мастера, чтобы увидеть расписание</p>
            </div>
          )}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-body tracking-widest uppercase text-rose mb-4">Мнения клиентов</div>
            <h2 className="font-display text-5xl font-light text-foreground">Отзывы</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-cream border border-beige-dark/20 hover-lift animate-fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-rose text-lg">★</span>
                  ))}
                </div>
                <p className="font-body text-foreground/80 text-sm leading-relaxed mb-6 italic">
                  «{review.text}»
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-body font-medium text-foreground text-sm">{review.name}</span>
                  <span className="font-body text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-body tracking-widest uppercase text-rose mb-4">Онлайн-запись</div>
              <h2 className="font-display text-5xl font-light text-foreground mb-6">Запишитесь<br />к нам</h2>
              <p className="font-body text-muted-foreground font-light leading-relaxed mb-10">
                Выберите мастера и удобное время. Мы подтвердим запись в течение 15 минут.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={16} className="text-rose-dark" />
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium text-foreground">Адрес</div>
                    <div className="font-body text-sm text-muted-foreground">ул. Ленина 42, офис 301, Новосибирск</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={16} className="text-rose-dark" />
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium text-foreground">Часы работы</div>
                    <div className="font-body text-sm text-muted-foreground">Ежедневно с 10:00 до 20:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={16} className="text-rose-dark" />
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium text-foreground">Телефон</div>
                    <div className="font-body text-sm text-muted-foreground">+7 (383) 000-00-00</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl overflow-hidden h-52 bg-beige border border-beige-dark/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <div className="font-body text-sm text-muted-foreground">Карта — ул. Ленина 42</div>
                  <div className="font-body text-xs text-muted-foreground/60 mt-1">Новосибирск</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-beige-dark/20">
              {submitted ? (
                <div className="text-center py-10 animate-scale-in">
                  <div className="text-5xl mb-5">🌸</div>
                  <h3 className="font-display text-3xl font-light text-foreground mb-3">Спасибо!</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    Ваша заявка принята. Мы свяжемся с вами в течение 15 минут для подтверждения.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", service: "", comment: "" }); }}
                    className="mt-8 font-body text-sm text-rose hover:text-rose-dark transition-colors"
                  >
                    Записаться ещё раз
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Ваше имя</label>
                    <input
                      required
                      type="text"
                      placeholder="Как вас зовут?"
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full font-body text-sm bg-cream rounded-xl px-4 py-3.5 border border-beige-dark/40 outline-none focus:border-rose transition-colors placeholder:text-muted-foreground/40"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Телефон</label>
                    <input
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full font-body text-sm bg-cream rounded-xl px-4 py-3.5 border border-beige-dark/40 outline-none focus:border-rose transition-colors placeholder:text-muted-foreground/40"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Мастер</label>
                    <select
                      value={selectedMaster ?? ""}
                      onChange={e => setSelectedMaster(Number(e.target.value) || null)}
                      className="w-full font-body text-sm bg-cream rounded-xl px-4 py-3.5 border border-beige-dark/40 outline-none focus:border-rose transition-colors text-foreground"
                    >
                      <option value="">Любой мастер</option>
                      {MASTERS.map(m => (
                        <option key={m.id} value={m.id}>{m.name} — {m.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Услуга</label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                      className="w-full font-body text-sm bg-cream rounded-xl px-4 py-3.5 border border-beige-dark/40 outline-none focus:border-rose transition-colors text-foreground"
                    >
                      <option value="">Выберите услугу</option>
                      {SERVICES.map(s => (
                        <option key={s.name} value={s.name}>{s.name} — {s.price}</option>
                      ))}
                    </select>
                  </div>
                  {selectedTime && (
                    <div className="bg-rose-light/30 rounded-xl px-4 py-3 text-sm font-body text-rose-dark">
                      ✨ Выбранное время: {days[selectedDay]?.label} {days[selectedDay]?.date} · {selectedTime}
                    </div>
                  )}
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Комментарий</label>
                    <textarea
                      rows={3}
                      placeholder="Пожелания или вопросы..."
                      value={formData.comment}
                      onChange={e => setFormData(p => ({ ...p, comment: e.target.value }))}
                      className="w-full font-body text-sm bg-cream rounded-xl px-4 py-3.5 border border-beige-dark/40 outline-none focus:border-rose transition-colors resize-none placeholder:text-muted-foreground/40"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-rose text-white font-body font-normal py-4 rounded-full hover:bg-rose-dark transition-all hover:shadow-lg hover:shadow-rose/20 text-sm"
                  >
                    Записаться
                  </button>
                  <p className="font-body text-xs text-center text-muted-foreground/60">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-2xl font-light tracking-widest text-white mb-1">Lunaré</div>
            <div className="font-body text-xs text-white/40">Студия маникюра · Новосибирск</div>
          </div>
          <div className="flex items-center gap-6 text-xs font-body text-white/40">
            <a href="#services" className="hover:text-white/70 transition-colors">Услуги</a>
            <a href="#masters" className="hover:text-white/70 transition-colors">Мастера</a>
            <a href="#booking" className="hover:text-white/70 transition-colors">Запись</a>
          </div>
          <div className="font-body text-xs text-white/30">© 2025 Lunaré</div>
        </div>
      </footer>
    </div>
  );
}
