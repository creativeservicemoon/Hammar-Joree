import { useState } from 'react'

const copy = {
  Hindi: {
    tagline: 'अपना समाज, अपनी पहचान, अपना जीवनसाथी!',
    intro: 'अपने समुदाय में सम्मान, भरोसे और समझदारी के साथ जीवनसाथी की तलाश शुरू करें।',
    join: 'जल्द शुरू होगा',
    explore: 'समुदाय देखें',
    about: 'हमार जोड़ी के बारे में',
    aboutText: 'हमार जोड़ी एक Community & Life Partner Platform है, जहां वयस्क सदस्य अपनी पसंद और सहमति के आधार पर परिचय बना सकेंगे।',
    how: 'कैसे काम करेगा',
    steps: ['अपना प्रोफाइल बनाएं', 'समुदाय और पसंद चुनें', 'प्रोफाइल देखें और रुचि भेजें', 'दोनों की सहमति के बाद ही चैट शुरू करें'],
    safety: 'सुरक्षा सबसे पहले',
    safetyText: 'यह प्लेटफॉर्म केवल 18 वर्ष या उससे अधिक आयु के लोगों के लिए होगा। प्रोफाइल मॉडरेशन, Block/Report और गोपनीयता नियंत्रण विकास का जरूरी हिस्सा हैं।',
    footer: 'सम्मान • सहमति • गोपनीयता'
  },
  Bhojpuri: {
    tagline: 'आपन समाज, आपन पहचान, आपन जीवनसाथी!',
    intro: 'आपन समुदाय में भरोसा, सम्मान आ समझदारी के साथ जीवनसाथी खोजे के शुरुआत करीं।',
    join: 'जल्द शुरू होई',
    explore: 'समुदाय देखीं',
    about: 'हमार जोड़ी के बारे में',
    aboutText: 'हमार जोड़ी एगो Community & Life Partner Platform बा, जहां वयस्क सदस्य आपन पसंद आ सहमति से परिचय बना सकिहें।',
    how: 'ई कइसे काम करी',
    steps: ['आपन प्रोफाइल बनाईं', 'समुदाय आ पसंद चुनीं', 'प्रोफाइल देखीं आ रुचि भेजीं', 'दूनो के सहमति के बादे चैट शुरू होई'],
    safety: 'सुरक्षा सबसे पहिले',
    safetyText: 'ई प्लेटफॉर्म खाली 18 साल या ओकरा से ऊपर के लोग खातिर होई। प्रोफाइल जांच, Block/Report आ गोपनीयता जरूरी रही।',
    footer: 'सम्मान • सहमति • गोपनीयता'
  },
  English: {
    tagline: 'Your community. Your identity. Your life partner.',
    intro: 'Begin your search for a compatible life partner with respect, trust and thoughtful connections.',
    join: 'Coming soon',
    explore: 'Explore communities',
    about: 'About Hammar Joree',
    aboutText: 'Hammar Joree is a Community & Life Partner Platform where adults can create introductions based on their preferences and mutual consent.',
    how: 'How it will work',
    steps: ['Create your profile', 'Choose your community and preferences', 'Discover profiles and express interest', 'Private chat opens only after a mutual match'],
    safety: 'Safety comes first',
    safetyText: 'The platform is intended for adults aged 18+. Profile moderation, Block/Report tools and privacy controls are essential parts of development.',
    footer: 'Respect • Consent • Privacy'
  }
}

const communities = ['कनौजिया • Kanaujia', 'मोगाहिया • Mogahia', 'बेलौवर • Belouvar', 'रजक • Rajak']

export default function App() {
  const [language, setLanguage] = useState('Hindi')
  const t = copy[language]
  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Hammar Joree home">
          <span className="brand-mark">हJ</span>
          <span><strong>हमार जोड़ी</strong><small>HAMMAR JOREE</small></span>
        </a>
        <select aria-label="Select language" value={language} onChange={e => setLanguage(e.target.value)}>
          <option>Hindi</option><option>Bhojpuri</option><option>English</option>
        </select>
      </header>

      <main>
        <section className="hero">
          <div className="eyebrow">COMMUNITY & LIFE PARTNER PLATFORM</div>
          <h1>हमार जोड़ी</h1>
          <h2>{t.tagline}</h2>
          <p>{t.intro}</p>
          <div className="actions">
            <span className="button primary" aria-disabled="true">{t.join}</span>
            <a className="button secondary" href="#communities">{t.explore}</a>
          </div>
          <div className="hero-note">18+ only · Respect · Consent · Privacy</div>
        </section>

        <section className="section" id="about">
          <div className="section-kicker">OUR PURPOSE</div>
          <h2>{t.about}</h2>
          <p>{t.aboutText}</p>
        </section>

        <section className="section communities" id="communities">
          <div className="section-kicker">COMMUNITY CONNECTIONS</div>
          <h2>समुदाय / Communities</h2>
          <p>समुदाय का चयन स्वैच्छिक होगा। सभी सदस्यों के साथ समान सम्मान और निष्पक्ष व्यवहार रखा जाएगा।</p>
          <div className="community-grid">
            {communities.map(item => <div className="community-card" key={item}><span className="dot" />{item}</div>)}
          </div>
        </section>

        <section className="section steps">
          <div className="section-kicker">SIMPLE & RESPECTFUL</div>
          <h2>{t.how}</h2>
          <div className="step-grid">
            {t.steps.map((step, i) => <div className="step-card" key={step}><span>{String(i + 1).padStart(2, '0')}</span><p>{step}</p></div>)}
          </div>
        </section>

        <section className="safety">
          <div className="shield">✓</div>
          <div><h2>{t.safety}</h2><p>{t.safetyText}</p></div>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark">हJ</span><span><strong>हमार जोड़ी</strong><small>HAMMAR JOREE</small></span></div>
        <p>{t.footer}</p>
        <small>© {new Date().getFullYear()} Hammar Joree. All rights reserved.</small>
      </footer>
    </div>
  )
}
