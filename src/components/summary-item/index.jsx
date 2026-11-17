import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  nameLink: 'hover:underline hover:text-black',
  location: 'font-light',
  jobTitle: 'uppercase',
  description: 'text-gray-600 font-light mt-2 md:w-4/5',
  tag: 'lg:whitespace-nowrap',
  highlights: 'list-disc list-outside pl-6 mt-3 mb-3 md:w-4/5',
  highlight: 'mb-2',
  divider: 'w-1/2',
};

const SummaryItem = ({
  name,
  description,
  startEnd,
  location,
  jobTitle,
  highlights,
  tags,
  link = false,
  internal = false,
}) => {
  const hasHighlights = Array.isArray(highlights) && highlights.length > 0;
  const hasTags = Array.isArray(tags) && tags.length > 0;

  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = (
      <a target="_blank" rel="noreferrer" href={link}>
        {name}
      </a>
    );
  }

  return (
    <div className={classes.wrapper}>
      <h3 className={`${classes.name} ${link ? classes.nameLink : ''}`}>
        {link ? linkContent : name}
      </h3>
      {(startEnd || location) && (
        <h4 className={hasHighlights ? 'font-semibold' : 'font-medium'}>
          {startEnd}
          {location && (
            <span className={classes.location}>
              {startEnd ? ' · ' : ''}
              {location}
            </span>
          )}
        </h4>
      )}
      {jobTitle && <h5 className={classes.jobTitle}>{jobTitle}</h5>}
      {description && <p className={classes.description}>{description}</p>}
      {hasTags && (
        <p className={classes.description}>
          {tags.map((tag, index) => (
            <React.Fragment key={tag}>
              <span className={classes.tag}>
                {tag}
                {index < tags.length - 1 && ' ·'}
              </span>{' '}
            </React.Fragment>
          ))}
        </p>
      )}
      {hasHighlights && (
        <>
          <ul className={classes.highlights}>
            {highlights.map((highlight) => (
              <li key={highlight} className={classes.highlight}>
                {highlight}
              </li>
            ))}
          </ul>
          <hr className={classes.divider} />
        </>
      )}
    </div>
  );
};

export default SummaryItem;
