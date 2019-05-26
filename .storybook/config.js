import requireContext from 'require-context.macro';
import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import '../src/assets/css/tailwind.css'
import '../src/App.scss';

const req = requireContext('../src/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs)
configure(loadStories, module);
