import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryItem
          key={`${item.name}-${item.jobTitle}-${item.startEnd}`}
          name={item.name}
          jobTitle={item.jobTitle}
          startEnd={item.startEnd}
          location={item.location}
          description={item.description}
          highlights={item.highlights}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
