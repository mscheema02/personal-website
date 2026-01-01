import { useEffect, useMemo, useState } from "react";
import { profile } from "./content";

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="sectionTitle">{title}</h2>
      <div className="sectionBody">{children}</div>
    </section>
  );
}

function LinkRow({ links }) {
  return (
    <div className="linkRow">
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateFavicon = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
        favicon.href = isDark ? "/favicon_black/favicon.ico" : "/favicon_white/favicon.ico";
      }
    };

    updateFavicon();
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateFavicon);
    return () => mediaQuery.removeEventListener('change', updateFavicon);
  }, []);

  const [skillSearch, setSkillSearch] = useState("");

  const nav = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" }
    ],
    []
  );

  const searchText = skillSearch.toLowerCase().trim();
  const filteredProjects = searchText
    ? profile.projects.filter((proj) => {
        const searchableText = [
          proj.name,
          proj.subtitle,
          ...proj.bullets,
          ...(proj.skills || [])
        ].join(" ").toLowerCase();
        return searchableText.includes(searchText);
      })
    : [];

  const filteredExperience = searchText
    ? profile.experience.filter((job) => {
        const searchableText = [
          job.role,
          job.company,
          ...job.bullets,
          ...(job.skills || [])
        ].join(" ").toLowerCase();
        return searchableText.includes(searchText);
      })
    : [];

  const filteredEducation = searchText
    ? (profile.education || []).filter((edu) => {
        const searchableText = [
          edu.degree,
          edu.school,
          ...edu.bullets,
          ...(edu.skills || [])
        ].join(" ").toLowerCase();
        return searchableText.includes(searchText);
      })
    : [];

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <img 
            className="logo" 
            src={theme === "dark" ? "/favicon_black/android-chrome-512x512.png" : "/favicon_white/android-chrome-512x512.png"} 
            alt="Logo" 
          />
          <div className="brandText">
            <div className="name">{profile.name}</div>
            <div className="meta">
              {profile.title}  {profile.location}
            </div>
          </div>
        </div>

        <nav className="nav">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
          <button
            className="themeBtn"
            type="button"
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </nav>
      </header>

      <main className="main">
        <Section id="about" title="About">
          {profile.about.map((p) => {
            const parts = p.split(/(Manvir Singh Cheema)/);
            return (
              <p key={p}>
                {parts.map((part, i) =>
                  part === "Manvir Singh Cheema" ? (
                    <span key={i} className="nameHighlight">{part}</span>
                  ) : (
                    part
                  )
                )}
              </p>
            );
          })}
          <LinkRow links={profile.links} />
        </Section>

        <Section id="projects" title="Projects">
          <div className="stack">
            {profile.projects.map((proj, idx) => (
              <article key={proj.name} id={`project-${idx}`} className="card">
                <h3 className="cardTitle">{proj.name}</h3>
                <div className="cardSubtitle">{proj.subtitle}</div>

                <ul className="bullets">
                  {proj.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {proj.skills?.length > 0 && (
                  <div className="itemSkills">
                    {proj.skills.map((skill) => (
                      <span key={skill} className="itemSkillTag">{skill}</span>
                    ))}
                  </div>
                )}

                {proj.links?.length ? <LinkRow links={proj.links} /> : null}
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="stack">
            {profile.experience.map((job, idx) => (
              <article key={`${job.role}-${job.company}`} id={`experience-${idx}`} className="card">
                <h3 className="cardTitle">
                  {job.role} · {job.company}
                </h3>
                <div className="cardSubtitle">{job.dates}</div>

                <ul className="bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {job.skills?.length > 0 && (
                  <div className="itemSkills">
                    {job.skills.map((skill) => (
                      <span key={skill} className="itemSkillTag">{skill}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="stack">
            {profile.education.map((edu, idx) => (
              <article key={`${edu.degree}-${edu.school}`} id={`education-${idx}`} className="card">
                <h3 className="cardTitle">
                  {edu.degree} · {edu.school}
                </h3>
                <div className="cardSubtitle">{edu.dates}</div>

                <ul className="bullets">
                  {edu.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {edu.skills?.length > 0 && (
                  <div className="itemSkills">
                    {edu.skills.map((skill) => (
                      <span key={skill} className="itemSkillTag">{skill}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="skillSearch">
            <input
              type="text"
              className="skillInput"
              placeholder="Search for a skill..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
            />
          </div>
          
          {skillSearch && (
            <>
              {filteredProjects.length > 0 && (
                <div className="searchResults">
                  <h3 className="cardTitle" style={{ marginBottom: "12px" }}>Matching Projects</h3>
                  <ul className="searchResultList">
                    {filteredProjects.map((proj, idx) => {
                      const projectIndex = profile.projects.findIndex(p => p.name === proj.name);
                      return (
                        <li key={proj.name}>
                          <a href={`#project-${projectIndex}`} className="searchResultLink">
                            {proj.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {filteredExperience.length > 0 && (
                <div className="searchResults">
                  <h3 className="cardTitle" style={{ marginBottom: "12px" }}>Matching Experience</h3>
                  <ul className="searchResultList">
                    {filteredExperience.map((job) => {
                      const expIndex = profile.experience.findIndex(e => e.role === job.role && e.company === job.company);
                      return (
                        <li key={`${job.role}-${job.company}`}>
                          <a href={`#experience-${expIndex}`} className="searchResultLink">
                            {job.role} · {job.company}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {filteredEducation.length > 0 && (
                <div className="searchResults">
                  <h3 className="cardTitle" style={{ marginBottom: "12px" }}>Matching Education</h3>
                  <ul className="searchResultList">
                    {filteredEducation.map((edu) => {
                      const eduIndex = profile.education.findIndex(e => e.degree === edu.degree && e.school === edu.school);
                      return (
                        <li key={`${edu.degree}-${edu.school}`}>
                          <a href={`#education-${eduIndex}`} className="searchResultLink">
                            {edu.degree} · {edu.school}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {filteredProjects.length === 0 && filteredExperience.length === 0 && filteredEducation.length === 0 && (
                <p style={{ marginTop: "24px", color: "var(--muted)" }}>
                  No projects, experience, or education found matching "{skillSearch}"
                </p>
              )}
            </>
          )}

          {!skillSearch && (
            <div className="skillTags">
              {profile.skills.map((skill) => (
                <button
                  key={skill}
                  className="skillTag"
                  onClick={() => setSkillSearch(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          )}
        </Section>

        <Section id="contact" title="Contact">
          <p>
            Email:{" "}
            <a href={`mailto:${profile.email}`} className="mono">
              {profile.email}
            </a>
          </p>
        </Section>

        <footer className="footer">
          <span className="muted">© {new Date().getFullYear()} {profile.name}</span>
        </footer>
      </main>
    </div>
  );
}
