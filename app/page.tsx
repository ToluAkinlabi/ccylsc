import PhotoCarousel from './components/PhotoCarousel';

export default function HomePage() {
  // Gallery images - replace with your actual image paths once uploaded
  const galleryImages = [
    '/images/bootcamp/mini-bootcamp-1.jpeg',
    '/images/bootcamp/mini-bootcamp-2.jpeg',
    '/images/bootcamp/mini-bootcamp-3.jpeg',
    '/images/events/un-conference-1.jpeg',
    '/images/events/un-conference-2.jpeg',
    '/images/events/un-conference-3.jpeg',
    '/images/events/un-conference-4.jpeg',
    '/images/events/un-conference-5.jpeg',
    '/images/events/un-conference-6.jpeg',
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Building Value-Driven Youth Leaders</h1>
          <p>
            A youth leadership and service initiative equipping young people ages 13-35 in Washington, 
            DC with character, civic responsibility, workforce readiness, and a commitment to community and national service.
          </p>
          <div className="hero-ctas">
            <a className="cta" href="/jobs">Explore Opportunities</a>
            <a className="cta cta-secondary" href="/about">Learn More</a>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Youth Target (Annual)</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">12</div>
              <div className="stat-label">Week Cohorts</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2-3</div>
              <div className="stat-label">Cohorts per Year</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">13-35</div>
              <div className="stat-label">Age Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* Oasis Experience Bootcamp */}
      <section className="bootcamp-section">
        <div className="container">
          <div className="bootcamp-card">
            <div className="bootcamp-badge">COMING SOON</div>
            <h2 style={{ margin: "16px 0 12px", fontSize: 40, fontWeight: 800, color: "white" }}>Oasis Next Bootcamp</h2>
            <p style={{ margin: "0 0 24px", fontSize: 20, color: "rgba(255, 255, 255, 0.95)", lineHeight: 1.6 }}>
              An intensive 3-day leadership immersion experience designed to accelerate your personal and professional growth.
            </p>
            <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "white", fontSize: 16 }}>
                <span style={{ fontSize: 24 }}>📅</span>
                <strong>January 29 - February 1, 2026</strong>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "white", fontSize: 16 }}>
                <span style={{ fontSize: 24 }}>📍</span>
                <strong>Baltimore, MD</strong>
              </div>
            </div>
            <a href="/bootcamp-registration" className="cta" style={{ background: "white", color: "var(--color-primary)" }}>
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Past Events & Bootcamps */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Our Journey in Action</h2>
          <p style={{ textAlign: 'center', fontSize: 18, color: '#666', marginBottom: 48 }}>
            See moments from our mini bootcamps and UN conference participation
          </p>
          <PhotoCarousel images={galleryImages.filter(img => img)} autoPlay={true} autoPlayInterval={5000} />
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Four Pillars</h2>
          <div className="grid">
            <div className="card value-card">
              <div className="value-icon">🏛️</div>
              <h3>Civic Leadership & Ethics</h3>
              <p>Training in ethical decision-making, servant leadership, and civic responsibility.</p>
            </div>
            <div className="card value-card">
              <div className="value-icon">💼</div>
              <h3>Workforce & Career Readiness</h3>
              <p>Professional development and exposure to career pathways across sectors.</p>
            </div>
            <div className="card value-card">
              <div className="value-icon">🤝</div>
              <h3>Community & National Service</h3>
              <p>Structured service projects delivering measurable community impact.</p>
            </div>
            <div className="card value-card">
              <div className="value-icon">💎</div>
              <h3>Faith & Character Formation</h3>
              <p>Values-based leadership emphasizing integrity and social responsibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <h3>Apply</h3>
              <p>Join a 12-week cohort and become part of our diverse leadership community.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <h3>Training</h3>
              <p>Engage in hybrid workshops covering leadership, ethics, and professional skills.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <h3>Service</h3>
              <p>Participate in structured community projects with measurable impact.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <h3>Capstone Project</h3>
              <p>Complete a leadership project addressing identified community needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="programs-section">
        <div className="container">
          <h2 className="section-title">Featured Programs</h2>
          <div className="grid programs-grid">
            <div className="card program-card" style={{ borderLeft: "4px solid #DC143C", background: "linear-gradient(135deg, rgba(220, 20, 60, 0.05) 0%, rgba(10, 102, 194, 0.05) 100%)" }}>
              <div className="program-badge" style={{ background: "#DC143C", animation: "pulse 2s infinite" }}>🔥 LIMITED SPOTS</div>
              <h3 style={{ color: "#DC143C" }}>Leadership Training Cohort</h3>
              <p style={{ fontWeight: 500 }}>12-week intensive program focused on building leadership skills, public speaking, and strategic thinking.</p>
              <p style={{ fontSize: 12, color: "#DC143C", fontWeight: 700, marginTop: 8 }}>⚡ High demand • Applications filling up fast</p>
              <a href="/cohort-application" className="cta-link" style={{ color: "#DC143C", fontWeight: 700 }}>Apply now →</a>
            </div>
            <div className="card program-card">
              <div className="program-badge">Active</div>
              <h3>SWAD Mentorship Program</h3>
              <p>Students With A Difference equips high school students from underserved backgrounds with mentorship, college prep, and personal development.</p>
              <a href="/about" className="cta-link">Learn more →</a>
            </div>
            <div className="card program-card">
              <div className="program-badge">Active</div>
              <h3>Community Service Projects</h3>
              <p>Monthly service initiatives addressing local needs in education, environment, and social justice.</p>
              <a href="/about" className="cta-link">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="grid testimonials-grid">
            <div className="card testimonial-card">
              <p className="testimonial-quote">"CC-YLSC transformed my perspective on leadership. The mentorship and service projects gave me real-world experience that prepared me for my career in public service."</p>
              <div className="testimonial-author">
                <strong>Jordan M.</strong>
                <span>Program Alumnus, 2024</span>
              </div>
            </div>
            <div className="card testimonial-card">
              <p className="testimonial-quote">"I gained confidence, skills, and lifelong connections. This program showed me how to turn my passion for community service into meaningful action."</p>
              <div className="testimonial-author">
                <strong>Aisha T.</strong>
                <span>Current Participant</span>
              </div>
            </div>
            <div className="card testimonial-card">
              <p className="testimonial-quote">"The workshops and training sessions were incredibly practical. I learned how to lead teams, manage projects, and make a real difference in my community."</p>
              <div className="testimonial-author">
                <strong>Marcus K.</strong>
                <span>Program Alumnus, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">Latest Updates</h2>
          <div className="grid news-grid">
            <div className="card news-card">
              <div className="news-date">Jan 5, 2026</div>
              <h3>New Leadership Cohort Kicks Off</h3>
              <p>We're excited to welcome 30 new participants to our Winter 2026 Leadership Training Cohort.</p>
              <a href="/about" className="cta-link">Read more →</a>
            </div>
            <div className="card news-card">
              <div className="news-date">Dec 20, 2025</div>
              <h3>Community Food Drive Success</h3>
              <p>Our December service project collected over 2,000 items for local families in need.</p>
              <a href="/about" className="cta-link">Read more →</a>
            </div>
            <div className="card news-card">
              <div className="news-date">Dec 10, 2025</div>
              <h3>Career Fair Connects Youth with Opportunities</h3>
              <p>Participants networked with 25+ organizations at our annual career exploration event.</p>
              <a href="/about" className="cta-link">Read more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="cta-section">
        <div className="container">
          <h2 className="section-title">Get Involved</h2>
          <div className="grid cta-grid">
            <div className="card cta-card">
              <h3>Join a Cohort</h3>
              <p>Apply for our 12-week leadership training cohort and develop your civic leadership skills.</p>
              <a href="/cohort-application" className="cta">Apply Now</a>
            </div>
            <div className="card cta-card">
              <h3>Explore Opportunities</h3>
              <p>View available positions in media, production, and program management.</p>
              <a href="/jobs" className="cta">View Positions</a>
            </div>
            <div className="card cta-card">
              <h3>Partner With Us</h3>
              <p>Collaborate on youth leadership initiatives and community service projects.</p>
              <a href="/contact" className="cta">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-box">
            <h2>Stay Connected</h2>
            <p>Get updates on programs, events, and opportunities delivered to your inbox.</p>
            <form className="newsletter-form" action="https://formspree.io/f/mdaanevb" method="POST">
              <input type="hidden" name="form_type" value="newsletter" />
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                required 
                className="newsletter-input"
              />
              <button type="submit" className="cta">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
