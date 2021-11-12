import { h, onMounted, onUpdated, ref } from 'vue';

import MarkdownIt from 'markdown-it';


const props = {
  anchor: {
    type: Object,
    default: () => ({})
  },
  breaks: {
    type: Boolean,
    default: false
  },
  emoji: {
    type: Object,
    default: () => ({})
  },
  highlight: {
    type: Object,
    default: () => ({})
  },
  html: {
    type: Boolean,
    default: false
  },
  langPrefix: {
    type: String,
    default: 'language-'
  },
  linkify: {
    type: Boolean,
    default: false
  },
  plugins: {
    type: Array,
    default: () => []
  },
  quotes: {
    type: String,
    default: '“”‘’'
  },
  source: {
    type: String,
    default: ''
  },
  tasklists: {
    type: Object,
    default: () => ({})
  },
  toc: {
    type: Object,
    default: () => ({})
  },
  typographer: {
    type: Boolean,
    default: false
  },
  xhtmlOut: {
    type: Boolean,
    default: false
  }
};

export default {
  name: 'markdown-it',
  props,
  setup(props: any) {
    const md = ref();
    const renderMarkdown = () => {
      let markdown = new MarkdownIt()
        .set({
          breaks: props.breaks,
          html: props.html,
          langPrefix: props.langPrefix,
          linkify: props.linkify,
          quotes: props.quotes,
          typographer: props.typographer,
          xhtmlOut: props.xhtmlOut
        });

      md.value = markdown.render(props.source);
    };

    onMounted(() => renderMarkdown());
    onUpdated(() => renderMarkdown());

    return () => h('div', { innerHTML: md.value });
  }
};
