import React from 'react';

import Section from '../section';

const SectionLeadership = ({ leadership }) => {
  return (
    <Section title="Leadership Philosophy">
      <div className="mb-6 md:w-4/5">
        <p>{leadership}</p>
      </div>
    </Section>
  );
};

export default SectionLeadership;
