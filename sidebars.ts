import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    'getting-started',
    {
      type: 'category',
      label: 'Backend',
      items: [
        'backend/getting-started',
        {
          type: 'category',
          label: 'Architecture',
          items: [
            'backend/architecture/overview',
            'backend/architecture/services',
            'backend/architecture/workflow',
            'backend/architecture/security',
            'architecture/diagrams',
          ],
        },
        {
          type: 'category',
          label: 'Services',
          items: [
            'backend/services/core',
            'backend/services/article',
            'backend/services/prompt-studio',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Frontend',
      items: [
        'frontend/getting-started',
        {
          type: 'category',
          label: 'Platform Overview',
          items: [
            'frontend/platform-overview/introduction',
          ],
        },
        {
          type: 'category',
          label: 'Web3 Authentication',
          items: [
            'frontend/web3-authentication/overview',
            'frontend/web3-authentication/quick-start',
          ],
        },
        {
          type: 'category',
          label: 'User Interface',
          items: [
            'frontend/ui-components/overview',
            'frontend/ui-components/mathematical-formulas',
          ],
        },
        {
          type: 'category',
          label: 'Content Generation',
          items: [
            'frontend/content-generation/overview',
            'frontend/content-generation/hitl-workflow',
          ],
        },
        {
          type: 'category',
          label: 'Development',
          items: [
            'frontend/development/setup',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
