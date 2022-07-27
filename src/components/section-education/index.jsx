import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ education }) => {
  if (!education.length) return null;
  
  return (
    <Section title="Education">
      {education.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
          startEnd={item.startEnd}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;
