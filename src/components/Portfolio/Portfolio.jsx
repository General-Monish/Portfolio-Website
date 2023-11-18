import React from 'react';
import './Portfolio.css';
import Game1 from '../../asset/Game1.png';
import Certificate from '../../asset/Certificate.jpg'
import website from '../../asset/website.png'
import runner from '../../asset/Runner.png'


const Portfolio = () => {
  // Array of portfolio items
  const portfolioItems = [
    {
      image: Game1,
      title: 'Giant Survival Game',
      githubLink: 'https://github.com',
      demoLink: 'https://general-m.itch.io/giant-survival'
    },

    {
      image: Certificate,
      title: 'Certifications',
      githubLink: 'https://github.com',
      demoLink: 'https://drive.google.com/drive/folders/1Xu8YwoitU5WgZTbiKwH5wwcd9CAI5TcS'
    },

    {
      image: website,
      title: 'Portfolio Website ',
      githubLink: 'https://github.com',
      demoLink: 'https://mohammadmonis.netlify.app'
    },

    {
      image: runner,
      title: '2D Action Game',
      githubLink: 'https://github.com/General-Monish/The-Runner.git',
      demoLink: 'https://general-m.itch.io/the-runner'
    },

    {
      image: Game1,
      title: 'Giant Survival Game',
      githubLink: 'https://github.com',
      demoLink: 'https://general-m.itch.io/giant-survival'
    },

    {
      image: Game1,
      title: 'Giant Survival Game',
      githubLink: 'https://github.com',
      demoLink: 'https://general-m.itch.io/giant-survival'
    },
    // Add more portfolio items here
  ];

  return (
    <section id='portfolio'>
      <h5>MY Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems.map((item, index) => (
          <article className='portfolio__item' key={index}>
            <div className="portfolio__item-image">
              <img src={item.image} alt="Giant Survival Game" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.githubLink} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
              <a href={item.demoLink} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>View Live</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
