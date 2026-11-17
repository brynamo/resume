import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6 md:w-4/5">
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
