import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionCommunity = ({ community, title }) => {
  if (!community.length) return null;

  return (
    <Section title={title || 'Speaking & Community'}>
      {community.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionCommunity;
