import { Link } from 'gatsby';
import React from 'react';

import profileImg from '../../images/profile.jpg';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-[150px]',
  image: 'rounded-full transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  separator: 'hidden md:inline',
  location: 'block md:inline',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link: 'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const { name, description, location, github, linkedin } = metadata;

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={name} />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{name}</Link>
        </h1>
        <p className={classes.description}>
          {description}
          {description && location && (
            <span className={classes.separator}> · </span>
          )}
          {location && <span className={classes.location}>{location}</span>}
        </p>
        <ul className={classes.list}>
          {github && (
            <li className={classes.item}>
              <a
                target="_blank"
                rel="noreferrer"
                className={classes.link}
                href={github}
              >
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a
                target="_blank"
                rel="noreferrer"
                className={classes.link}
                href={linkedin}
              >
                LinkedIn
              </a>
            </li>
          )}
          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
