"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LandingHeader() {
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];

  // State for the search form
  const [pickupPlace, setPickupPlace] = useState("Tirana");
  const [pickupDate, setPickupDate] = useState(today);
  const [pickupTime, setPickupTime] = useState("09:00");
  const [returnDate, setReturnDate] = useState(today);
  const [returnTime, setReturnTime] = useState("09:00");
  const [hasError, setHasError] = useState(false);

  // Multi-language state
  const [language, setLanguage] = useState("en");
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  // Detect browser language on mount
  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (["en", "sq", "it", "de"].includes(browserLang)) {
      setLanguage(browserLang);
    }
  }, []);

  // Translation dictionary
  const translations = {
    en: {
      landingTitle: "Rent4Paws - Albania's Purr-fect Drive!",
      landingIntro:
        "Rev up your engines and get ready for an adventure with Rent4Paws, Albania's coolest car rental service where every ride you take helps paws in need! We're not just about getting you from A to B; we're about making a difference for our four-legged friends roaming the beautiful streets of Albania.",
      tileCruise: "Cruise with a Cause",
      tileCruiseDesc:
        "Rent one of our fabulous cars, and part of your fee goes straight to helping Albania's stray cats and dogs. From spay/neuter programs to vaccinations, your drive helps them thrive!",
      tileWheels: "Wheels of Fun",
      tileWheelsDesc:
        "Choose from our fleet of fun, funky, and fully equipped vehicles. Whether you're heading to the beaches of Vlorë or exploring the ancient streets of Berat, do it with style and a smile, knowing you're making a positive impact.",
      tilePawsome: "Pawsome Perks",
      tilePawsomeDesc:
        "Snap a selfie with your rented ride and a local furry friend, and share it with us for a chance to win discounts on your next Albanian adventure! We love seeing our community come together for a good cause.",
      tileTransparent: "Transparent Tail-wagging",
      tileTransparentDesc:
        "We keep it real - you'll see exactly where your rental euros are going. From supporting local shelters to street feeding programs, every leu counts!",
      tileJoin: "Join the Paw Party",
      tileJoinDesc:
        "Become part of a community that loves animals and adventures. We host events, clean-ups, and adoption drives where you can meet your next four-legged travel buddy!",
      tileBooking: "Booking is a Breeze",
      tileBookingDesc:
        "With our easy-peasy booking system, you'll be on your way in no time. Select your dream car, pick your dates, and off you go, making both memories and a difference.",
      searchButton: "Search",
      formCity: "City",
      formPickupDate: "Pickup Date",
      formPickupTime: "Pickup Time",
      formReturnDate: "Return Date",
      formReturnTime: "Return Time",
      errorReturnValidation: "Return date and time must be after pickup date and time.",
      footerText: "Rent4Paws. All rights reserved."
    },
    sq: {
      landingTitle: "Rent4Paws - Drejtimi Perfekt për Albaninë!",
      landingIntro:
        "Shpejtoni motorët dhe përgatituni për një aventurë me Rent4Paws, shërbimi më i mirë i marrjes me qira auto në Shqipëri, ku çdo udhëtim ndihmon kafshët që kanë nevojë! Ne nuk bëjmë vetëm që t'ju çojmë nga A në B; ne bëjmë ndryshim për miqtë tanë me katër këmbë që shëtitin rrugët e bukura të Shqipërisë.",
      tileCruise: "Udhëtoni me një Arsye",
      tileCruiseDesc:
        "Merrni një nga makinat tona fantastike, dhe një pjesë e tarifës tuaj shkon direkt për ndihmën e maceve dhe qenve të paqarta në Shqipëri. Nga programet e sterilizimit te vaksinimet, udhëtimi juaj i ndihmon t'i ndihmojë ata të zhvillohen!",
      tileWheels: "Rrotat e Argëtimit",
      tileWheelsDesc:
        "Zgjidhni nga flota jonë e makinave argëtuese, të zbukuruara dhe të pajisura plotësisht. Qoftë nëse po shkon drejt plazheve të Vlorës ose eksploroni rrugët e lashta të Beratit, bëje me stil dhe buzëqeshje, duke ditur që po bëni një ndikim pozitiv.",
      tilePawsome: "Avantazhet e Kafshëve",
      tilePawsomeDesc:
        "Bëni një selfie me makinën tuaj të marrjes dhe një shok të rrallë lokal, dhe shpërndajeni atë për një mundësi të fitoni zbritje për aventurën tuaj të ardhshme në Shqipëri! Ne e duam kur komuniteti ynë bashkohet për një kauzë të mirë.",
      tileTransparent: "Transparenca e Plotë",
      tileTransparentDesc:
        "Ne mbajmë gjithçka në qarta - do të shihni saktësisht se ku po shkojnë eurot tuaja. Nga mbështetja e strehimeve lokale te programet e të ushqyerit në rrugë, secili lek numërohet!",
      tileJoin: "Bashkohuni me Partinë e Kafshëve",
      tileJoinDesc:
        "Bëhuni pjesë e një komuniteti që dashuron kafshët dhe aventurat. Ne organizojmë evente, pastrime dhe drive për adoptim ku mund të takoni shokun tuaj të ardhshëm me katër këmbë!",
      tileBooking: "Rezervimi është i Lehtë",
      tileBookingDesc:
        "Me sistemin tonë të thjeshtë të rezervimit, do të jeni në rrugë në një çast. Zgjidhni makinën tuaj të ëndrrave, zgjidhni datat tuaja, dhe nisni në rrugë, duke krijuar kujtime dhe ndryshime.",
      searchButton: "Kërko",
      formCity: "Qyteti",
      formPickupDate: "Data e marrjes",
      formPickupTime: "Ora e marrjes",
      formReturnDate: "Data e kthimit",
      formReturnTime: "Ora e kthimit",
      errorReturnValidation: "Data dhe ora e kthimit duhet të jenë pas datës dhe orës së marrjes.",
      footerText: "Rent4Paws. Të drejtat e rezervuara."
    },
    it: {
      landingTitle: "Rent4Paws - Il viaggio perfetto in Albania!",
      landingIntro:
        "Accendete i motori e preparatevi per un'avventura con Rent4Paws, il servizio di noleggio auto più cool in Albania, dove ogni viaggio aiuta gli animali bisognosi! Non si tratta solo di portarvi da A a B; facciamo la differenza per i nostri amici a quattro zampe che vagano per le bellissime strade dell'Albania.",
      tileCruise: "Viaggia con una Causa",
      tileCruiseDesc:
        "Noleggia una delle nostre auto favolose e parte della tua tariffa va direttamente ad aiutare i gatti e i cani randagi in Albania. Dai programmi di sterilizzazione alle vaccinazioni, il tuo viaggio li aiuta a prosperare!",
      tileWheels: "Ruote di Divertimento",
      tileWheelsDesc:
        "Scegli dalla nostra flotta di veicoli divertenti, eccentrici e completamente attrezzati. Che tu stia andando verso le spiagge di Vlora o esplorando le antiche strade di Berat, fallo con stile e un sorriso, sapendo di fare un impatto positivo.",
      tilePawsome: "Vantaggi Eccezionali",
      tilePawsomeDesc:
        "Scatta un selfie con la tua auto a noleggio e un amico peloso locale, e condividilo con noi per avere la possibilità di vincere sconti sulla tua prossima avventura albanese! Amiamo vedere la nostra comunità unirsi per una buona causa.",
      tileTransparent: "Trasparenza Totale",
      tileTransparentDesc:
        "Siamo sinceri - vedrai esattamente dove vanno i tuoi euro di noleggio. Dal supporto dei rifugi locali ai programmi di alimentazione in strada, ogni euro conta!",
      tileJoin: "Unisciti alla Festa",
      tileJoinDesc:
        "Diventa parte di una comunità che ama gli animali e le avventure. Organizziamo eventi, pulizie e drive per l'adozione dove puoi incontrare il tuo prossimo amico a quattro zampe!",
      tileBooking: "Il Noleggio è Facile",
      tileBookingDesc:
        "Con il nostro sistema di prenotazione facile come bere un bicchiere d'acqua, sarai in viaggio in un attimo. Seleziona la tua auto dei sogni, scegli le tue date e parti, creando sia ricordi che differenze.",
      searchButton: "Cerca",
      formCity: "Città",
      formPickupDate: "Data di ritiro",
      formPickupTime: "Ora di ritiro",
      formReturnDate: "Data di ritorno",
      formReturnTime: "Ora di ritorno",
      errorReturnValidation: "La data e l'ora di ritorno devono essere dopo la data e l'ora di ritiro.",
      footerText: "Rent4Paws. Tutti i diritti sono riservati."
    },
    de: {
      landingTitle: "Rent4Paws – Albaniens perfekter Drive!",
      landingIntro:
        "Starten Sie Ihre Motoren und machen Sie sich bereit für ein Abenteuer mit Rent4Paws, Albaniens coolstem Autovermietungsservice, bei dem jede Fahrt hilfsbedürftigen Tieren zugutekommt! Wir bringen Sie nicht nur von A nach B; wir machen einen Unterschied für unsere vierbeinigen Freunde, die durch die schönen Straßen Albaniens streifen.",
      tileCruise: "Fahren mit einem Zweck",
      tileCruiseDesc:
        "Mieten Sie eines unserer fantastischen Autos, und ein Teil Ihrer Gebühr fließt direkt in die Hilfe für Albaniens streunende Katzen und Hunde. Von Kastrationsprogrammen bis hin zu Impfungen – Ihre Fahrt hilft ihnen, aufzublühen!",
      tileWheels: "Spaß auf Rädern",
      tileWheelsDesc:
        "Wählen Sie aus unserer Flotte von spaßigen, coolen und voll ausgestatteten Fahrzeugen. Ob Sie zu den Stränden von Vlora fahren oder die antiken Straßen von Berat erkunden, tun Sie es mit Stil und einem Lächeln, in dem Wissen, dass Sie einen positiven Unterschied machen.",
      tilePawsome: "Tierische Extras",
      tilePawsomeDesc:
        "Machen Sie ein Selfie mit Ihrem gemieteten Wagen und einem lokalen pelzigen Freund und teilen Sie es mit uns, um die Chance auf Rabatte für Ihr nächstes albanisches Abenteuer zu erhalten! Wir freuen uns, wenn unsere Gemeinschaft zusammenkommt, um Gutes zu tun.",
      tileTransparent: "Transparenter Service",
      tileTransparentDesc:
        "Wir halten alles offen – Sie sehen genau, wo Ihre Mietgelder hingehen. Von der Unterstützung lokaler Tierheime bis hin zu Straßenfütterungsprogrammen zählt jeder Euro!",
      tileJoin: "Schließen Sie sich der Party an",
      tileJoinDesc:
        "Werden Sie Teil einer Gemeinschaft, die Tiere und Abenteuer liebt. Wir veranstalten Events, Säuberungsaktionen und Vermittlungsfahrten, bei denen Sie Ihren nächsten vierbeinigen Freund treffen können!",
      tileBooking: "Buchung leicht gemacht",
      tileBookingDesc:
        "Mit unserem kinderleichten Buchungssystem sind Sie in kürzester Zeit unterwegs. Wählen Sie Ihr Traumauto, buchen Sie Ihre Daten und legen Sie los, während Sie Erinnerungen schaffen und einen Unterschied machen.",
      searchButton: "Suchen",
      formCity: "Stadt",
      formPickupDate: "Abholdatum",
      formPickupTime: "Abholzeit",
      formReturnDate: "Rückgabedatum",
      formReturnTime: "Rückgabezeit",
      errorReturnValidation: "Das Rückfahrdatum und die Rückfahrzeit müssen nach dem Abholzeitpunkt liegen.",
      footerText: "Rent4Paws. Alle Rechte vorbehalten."
    }
  };

  const t = translations[language] || translations.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine date and time for pickup and return
    const pickupDateTime = new Date(`${pickupDate}T${pickupTime}`);
    const returnDateTime = new Date(`${returnDate}T${returnTime}`);

    // Validate that the return datetime is after the pickup datetime
    if (returnDateTime <= pickupDateTime) {
      setHasError(true);
      return;
    }

    // Clear error and proceed with the search
    setHasError(false);
    router.push(
      `/search?pickupPlace=${encodeURIComponent(pickupPlace)}&pickupDate=${pickupDate}&pickupTime=${pickupTime}&returnDate=${returnDate}&returnTime=${returnTime}`
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gradient-to-b from-blue-500 to-blue-100">
        {/* Navbar */}
        <nav className="w-full bg-blue-400 shadow-md py-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/icon.png"
                  alt="Rent4Paws Logo"
                  width={100}
                  height={100}
                  className="object-contain cursor-pointer"
                />
              </Link>
              <Link href="/">
                <span className="ml-4 text-2xl font-bold text-white cursor-pointer">
                  Rent4Paws
                </span>
              </Link>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="text-lg font-semibold text-white hover:text-blue-200 cursor-pointer focus:outline-none"
              >
                🌐 {language.toUpperCase()}
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 bg-white rounded shadow-lg">
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setShowLangDropdown(false);
                    }}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("sq");
                      setShowLangDropdown(false);
                    }}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Shqip
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("it");
                      setShowLangDropdown(false);
                    }}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Italiano
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("de");
                      setShowLangDropdown(false);
                    }}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Deutsch
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Search Form Section */}
        <div className="max-w-4xl mx-auto mt-8 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-md shadow-md flex flex-col md:flex-row md:items-center gap-4"
          >
            <div className="flex-1 md:max-w-[150px]">
              <label htmlFor="pickup-place" className="block font-semibold text-gray-700 mb-1">{t.formCity}</label>
              <select
                id="pickup-place"
                value={pickupPlace}
                onChange={(e) => setPickupPlace(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              >
                <option value="Tirana">Tirana</option>
                <option value="Durres">Durres</option>
                <option value="Vlore">Vlore</option>
                <option value="Berat">Berat</option>
                <option value="Saranda">Saranda</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="pickup-date" className="block font-semibold text-gray-700 mb-1">{t.formPickupDate}</label>
              <input
                type="date"
                id="pickup-date"
                value={pickupDate}
                min={today}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="pickup-time" className="block font-semibold text-gray-700 mb-1">{t.formPickupTime}</label>
              <input
                type="time"
                id="pickup-time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="return-date" className="block font-semibold text-gray-700 mb-1">{t.formReturnDate}</label>
              <input
                type="date"
                id="return-date"
                value={returnDate}
                min={today}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="return-time" className="block font-semibold text-gray-700 mb-1">{t.formReturnTime}</label>
              <input
                type="time"
                id="return-time"
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                min={pickupDate === returnDate ? pickupTime : undefined}
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {t.searchButton}
              </button>
            </div>
          </form>
          {hasError && (
            <div className="mt-2 mx-auto max-w-4xl">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">{t.errorReturnValidation}</strong>
              </div>
            </div>
          )}
        </div>

        {/* Description Section */}
        <section className="max-w-6xl mx-auto mt-12 px-4">
          {/* Intro Card */}
          <div className="bg-white p-6 rounded-md shadow-md flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <Image
                src="/logo.png"
                alt="Rent4Paws Logo"
                width={500}
                height={500}
                className="mx-auto object-contain"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-500 mb-4">
                {t.landingTitle}
              </h2>
              <p className="text-lg text-gray-800">{t.landingIntro}</p>
            </div>
          </div>

          {/* Tiles Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <h3 className="font-bold text-lg text-blue-500">{t.tileCruise}</h3>
              <p className="text-gray-800 text-sm">{t.tileCruiseDesc}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <h3 className="font-bold text-lg text-blue-500">{t.tileWheels}</h3>
              <p className="text-gray-800 text-sm">{t.tileWheelsDesc}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <h3 className="font-bold text-lg text-blue-500">{t.tilePawsome}</h3>
              <p className="text-gray-800 text-sm">{t.tilePawsomeDesc}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <h3 className="font-bold text-lg text-blue-500">{t.tileTransparent}</h3>
              <p className="text-gray-800 text-sm">{t.tileTransparentDesc}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <h3 className="font-bold text-lg text-blue-500">{t.tileJoin}</h3>
              <p className="text-gray-800 text-sm">{t.tileJoinDesc}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <h3 className="font-bold text-lg text-blue-500">{t.tileBooking}</h3>
              <p className="text-gray-800 text-sm">{t.tileBookingDesc}</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {t.footerText}
          </p>
        </div>
      </footer>
    </div>
  );
} 