import { CheckCircle, Star, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Home() {

  const features = [{"title": "Integrazione Completa", "description": "Collegamento diretto con AliExpress e Amazon per semplificare la ricerca e l'importazione di prodotti.", "icon": "link"}, {"title": "Automatizzazione delle Spedizioni", "description": "Monitoraggio automatico per informare gli acquirenti e migliorare la reputazione del venditore.", "icon": "truck"}, {"title": "Gestione Fornitori", "description": "Comunicazione automatica per gestire ordini e aggiornamenti di stock.", "icon": "users"}, {"title": "Controllo totale su inventario e spedizioni", "description": "Massimizza la redditivit\u00e0 e ottieni un supporto clienti dedicato per un'esperienza senza problemi.", "icon": "chart"}];
  const testimonials = [{"quote": "PlatinoDrop ha rivoluzionato il mio business di dropshipping. Semplice da usare e altamente efficace.", "author": "Laura Smith", "company": "Ecommerce Solutions Inc.", "role": "CEO"}, {"quote": "Consiglio PlatinoDrop a tutti coloro che vogliono fare dropshipping su eBay. Risparmio di tempo e guadagni garantiti.", "author": "Marco Rossi", "company": "Digital Trends Ltd.", "role": "Founder"}, {"quote": "Grazie a PlatinoDrop ho triplicato le mie vendite e ridotto i reclami. Un vero alleato per ogni venditore online.", "author": "Giulia Bianchi", "company": "Ecommerce Success Co.", "role": "Operations Manager"}];
  const pricing = [{"name": "Base", "price": "$29.99/mese", "description": "Per gli aspiranti imprenditori online che vogliono avviare un business di dropshipping.", "features": ["Integrazione Completa", "Automatizzazione delle Spedizioni"], "cta": "Prova Gratis", "popular": false}, {"name": "Pro", "price": "$49.99/mese", "description": "Per i venditori esperti che cercano un'automatizzazione avanzata nel dropshipping.", "features": ["Gestione Fornitori", "Controllo totale su inventario e spedizioni"], "cta": "Prova Gratis", "popular": true}, {"name": "Enterprise", "price": "Contattaci per un preventivo personalizzato", "description": "Soluzione su misura per le esigenze di grandi aziende e rivenditori online.", "features": ["Integrazione Completa", "Automatizzazione delle Spedizioni", "Gestione Fornitori"], "cta": "Contattaci", "popular": false}];
  const title = "dropshippingebay";
  const hero_headline = "Automatizza il tuo dropshipping su eBay";
  const hero_subheadline = "Gestisci fornitori, inventario e spedizioni in modo semplice e efficiente con PlatinoDrop. Massimizza le vendite e riduci i reclami.";
  const hero_cta_primary = "Ottieni PlatinoDrop";
  const hero_cta_secondary = "Scopri di più";
  const cta_headline = "Ottimizza il tuo dropshipping oggi stesso!";
  const cta_subheadline = "Inizia a massimizzare le vendite e a ridurre i reclami con PlatinoDrop. Scopri come possiamo aiutarti.";
  const cta_button = "Prova Gratis";
  const footer_tagline = "PlatinoDrop - La tua soluzione per il dropshipping su eBay";
  const footer_company_info = "© 2023 PlatinoDrop. Tutti i diritti riservati.";

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            {title}
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium hover:underline">
              Funzionalità
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:underline">
              Testimonianze
            </a>
            <a href="#pricing" className="text-sm font-medium hover:underline">
              Prezzi
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Accedi</Button>
            <Button>Registrati</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {hero_headline}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {hero_subheadline}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">{hero_cta_primary}</Button>
                <Button size="lg" variant="outline">{hero_cta_secondary}</Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="Hero Image"
                width="550"
                height="450"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Funzionalità Principali
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Scopri cosa rende {title} la soluzione perfetta per le tue esigenze.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {features.map((feature) => (
              <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-blue-50 rounded-full">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Cosa Dicono i Nostri Clienti
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Testimonianze di chi utilizza {title} ogni giorno.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {testimonials.map((testimonial) => (
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-sm text-gray-500">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Piani e Prezzi
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Scegli il piano più adatto alle tue esigenze.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {pricing.map((plan) => (
              <div className={`flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm ${plan.popular ? 'relative' : ''}`}>
                {plan.popular && <div className="absolute -top-3 right-6 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">Popolare</div>}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </div>
                <p className="text-3xl font-bold">{plan.price}</p>
                <ul className="grid gap-2 py-4">
                  {plan.features.map((feature) => (
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">{plan.cta}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {cta_headline}
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {cta_subheadline}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                {cta_button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="text-lg font-medium">{footer_tagline}</p>
              <p className="text-sm text-gray-300">
                {footer_company_info}
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-sm hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm hover:underline">Termini di Servizio</a>
              <a href="#" className="text-sm hover:underline">Contatti</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
