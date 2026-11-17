import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

// A skill group lists its tags in `items`; a plain `description` also works.
const SectionSkills = ({ skills }) => {
  return (
    <Section title="Skills">
      {skills.map((skill) => (
        <SummaryItem
          key={skill.name}
          name={skill.name}
          description={skill.description}
          tags={skill.items}
        />
      ))}
    </Section>
  );
};

export default SectionSkills;
