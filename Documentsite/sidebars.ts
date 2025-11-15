import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'category',
      label: '基本的な用語基礎知識集',
      items: [
        {
          type: 'doc',
          id: 'getting-started/token-guide',
        },
        {
          type: 'doc',
          id: 'getting-started/developer-mode',
        },
        {
          type: 'doc',
          id: 'getting-started/glossary',
        },
      ],
    },
    {
      type: 'category',
      label: 'ツールの使い方',
      items: [
        {
          type: 'doc',
          id: 'tools/dm-spam',
        },
        {
          type: 'doc',
          id: 'tools/group-spam',
        },
        {
          type: 'doc',
          id: 'tools/joiner',
        },
        {
          type: 'doc',
          id: 'tools/raid',
        },
        {
          type: 'doc',
          id: 'tools/reaction-spam',
        },
        {
          type: 'doc',
          id: 'tools/set-status',
        },
        {
          type: 'doc',
          id: 'tools/slash-command-auto',
        },
        {
          type: 'doc',
          id: 'tools/token-checker',
        },
        {
          type: 'doc',
          id: 'tools/webhook-spam',
        },
      ],
    },
    {
      type: 'category',
      label: 'わからない人向け',
      items: [
        {
          type: 'doc',
          id: 'notes/humeiten',
        },
      ],
    },
  ],
};

export default sidebars;
