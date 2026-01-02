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

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function LinkRow({ links }) {
  const getLinkContent = (link) => {
    if (link.href.includes('github.com')) {
      return <GitHubIcon className="linkIcon" />;
    }
    if (link.href.includes('linkedin.com')) {
      return <LinkedInIcon className="linkIcon" />;
    }
    return link.label;
  };

  return (
    <div className="linkRow">
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" title={l.label}>
          {getLinkContent(l)}
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

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && (hash.startsWith('#project-') || hash.startsWith('#experience-') || hash.startsWith('#education-'))) {
        const element = document.querySelector(hash);
        if (element) {
          element.classList.add('highlight');
          setTimeout(() => {
            element.classList.remove('highlight');
          }, 1500); // Match animation duration
        }
      }
    };

    // Handle initial hash if present
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Also handle clicks on search result links
    const handleClick = (e) => {
      const link = e.target.closest('.searchResultLink');
      if (link) {
        const hash = new URL(link.href).hash;
        setTimeout(() => {
          handleHashChange();
        }, 100); // Small delay to allow scroll to complete
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const [skillSearch, setSkillSearch] = useState("");
  const [expandedProjects, setExpandedProjects] = useState(new Set());
  const [expandedExperience, setExpandedExperience] = useState(new Set());
  const [expandedEducation, setExpandedEducation] = useState(new Set());
  const [skillsExpanded, setSkillsExpanded] = useState(false);

  const nav = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
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
                    <span key={i} className="nameHighlight">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </p>
            );
          })}
          <LinkRow links={profile.links} />
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
              {(skillsExpanded ? profile.skills : profile.skills.slice(0, 30)).map((skill) => (
                <button
                  key={skill}
                  className="skillTag"
                  onClick={() => setSkillSearch(skill)}
                >
                  {skill}
                </button>
              ))}
              {profile.skills.length > 30 && (
                <span
                  className="expandSkillsText"
                  onClick={() => setSkillsExpanded(!skillsExpanded)}
                >
                  {skillsExpanded ? "Compress skills" : "... Click to see all skills"}
                </span>
              )}
            </div>
          )}
        </Section>

        <Section id="projects" title="Projects">
          <div className="stack">
            {profile.projects.map((proj, idx) => {
              const isExpanded = expandedProjects.has(idx);
              return (
                <article 
                  key={proj.name} 
                  id={`project-${idx}`} 
                  className="card projectCard"
                  onClick={(e) => {
                    if (e.target.closest('a')) return;
                    const newExpanded = new Set(expandedProjects);
                    if (isExpanded) {
                      newExpanded.delete(idx);
                    } else {
                      newExpanded.add(idx);
                    }
                    setExpandedProjects(newExpanded);
                  }}
                >
                  <h3 className="cardTitle">{proj.name}</h3>
                  <div className="cardSubtitle">{proj.subtitle}</div>
                  {proj.dates && <div className="cardSubtitle">{proj.dates}</div>}

                  {isExpanded && (
                    <>
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
                    </>
                  )}

                  {proj.links?.length ? <LinkRow links={proj.links} /> : null}
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="stack">
            {profile.experience.map((job, idx) => {
              const isExpanded = expandedExperience.has(idx);
              return (
                <article 
                  key={`${job.role}-${job.company}`} 
                  id={`experience-${idx}`} 
                  className="card projectCard"
                  onClick={(e) => {
                    if (e.target.closest('a')) return;
                    const newExpanded = new Set(expandedExperience);
                    if (isExpanded) {
                      newExpanded.delete(idx);
                    } else {
                      newExpanded.add(idx);
                    }
                    setExpandedExperience(newExpanded);
                  }}
                >
                  <h3 className="cardTitle">
                    {job.role} · {job.company}
                  </h3>
                  <div className="cardSubtitle">{job.dates}</div>

                  {isExpanded && (
                    <>
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
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="stack">
            {profile.education.map((edu, idx) => {
              const isExpanded = expandedEducation.has(idx);
              return (
                <article 
                  key={`${edu.degree}-${edu.school}`} 
                  id={`education-${idx}`} 
                  className="card projectCard"
                  onClick={(e) => {
                    if (e.target.closest('a')) return;
                    const newExpanded = new Set(expandedEducation);
                    if (isExpanded) {
                      newExpanded.delete(idx);
                    } else {
                      newExpanded.add(idx);
                    }
                    setExpandedEducation(newExpanded);
                  }}
                >
                  <h3 className="cardTitle">
                    {edu.degree} · {edu.school}
                  </h3>
                  <div className="cardSubtitle">{edu.dates}</div>

                  {isExpanded && (
                    <>
                      {edu.certificates && (
                        <div className="cardSubtitle" style={{ marginTop: "8px", fontStyle: "italic" }}>
                          {edu.certificates}
                        </div>
                      )}

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
                    </>
                  )}
                </article>
              );
            })}
          </div>
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
