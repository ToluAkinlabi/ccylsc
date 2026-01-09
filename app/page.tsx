export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Building Values-Driven Youth Leaders</h1>
          <p>
            The Capital City Youth Leadership & Service Corps (CC-YLSC) equips young people in
            Washington, DC with character, civic responsibility, workforce readiness, and a
            service orientation.
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
              <div className="stat-number">500+</div>
              <div className="stat-label">Youth Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Programs Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Service Hours</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Four Pillars</h2>
          <div className="grid">
            <div className="card value-card">
              <div className="value-icon">💎</div>
              <h3>Character</h3>
              <p>Values-centered development that builds integrity and resilience.</p>
            </div>
            <div className="card value-card">
              <div className="value-icon">🏛️</div>
              <h3>Civic Responsibility</h3>
              <p>Preparing youth to serve communities and strengthen democracy.</p>
            </div>
            <div className="card value-card">
              <div className="value-icon">💼</div>
              <h3>Workforce Readiness</h3>
              <p>Practical skills, mentorship, and pathways into public service careers.</p>
            </div>
            <div className="card value-card">
              <div className="value-icon">🤝</div>
              <h3>Service Orientation</h3>
              <p>Hands-on projects that cultivate empathy, initiative, and teamwork.</p>
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
              <p>Submit your application and join our diverse community of aspiring leaders.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <h3>Training</h3>
              <p>Participate in workshops, mentorship sessions, and leadership development programs.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <h3>Service</h3>
              <p>Engage in meaningful community projects and hands-on service experiences.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <h3>Career Pathways</h3>
              <p>Access opportunities in public service, networking, and professional growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="programs-section">
        <div className="container">
          <h2 className="section-title">Featured Programs</h2>
          <div className="grid programs-grid">
            <div className="card program-card">
              <div className="program-badge">Active</div>
              <h3>Leadership Training Cohort</h3>
              <p>10-week intensive program focused on building leadership skills, public speaking, and strategic thinking.</p>
              <a href="/about" className="cta-link">Learn more →</a>
            </div>
            <div className="card program-card">
              <div className="program-badge">Active</div>
              <h3>Community Service Projects</h3>
              <p>Monthly service initiatives addressing local needs in education, environment, and social justice.</p>
              <a href="/about" className="cta-link">Learn more →</a>
            </div>
            <div className="card program-card">
              <div className="program-badge">Starting Soon</div>
              <h3>Career Mentorship Program</h3>
              <p>One-on-one mentorship with professionals in government, nonprofit, and public service sectors.</p>
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
              <h3>Join a Program</h3>
              <p>Apply for our leadership training, mentorship, or service programs.</p>
              <a href="/jobs" className="cta">Apply Now</a>
            </div>
            <div className="card cta-card">
              <h3>Become a Mentor</h3>
              <p>Share your expertise and guide the next generation of leaders.</p>
              <a href="/contact" className="cta">Volunteer</a>
            </div>
            <div className="card cta-card">
              <h3>Support Our Mission</h3>
              <p>Help us expand our reach and impact in the DC community.</p>
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
