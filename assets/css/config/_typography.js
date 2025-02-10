module.exports = {
  DEFAULT: {
    css: {

      '--tw-prose-links': '#001483', // Custom link color
      '--tw-prose-links-underline': 'underline', // Optional underline
      'a': {
        'color': 'var(--tw-prose-links)',
        'text-decoration': 'var(--tw-prose-links-underline)',
        '&:hover': {
          'color': 'var(--tw-prose-links-hover)',},},



      h2: {
        fontSize: '1rem',
        fontWeight: '700',
        lineHeight: '1.5rem',
        '@media (min-width: 768px)': {
          fontSize: '1.75rem',
          fontWeight: '600',
          lineHeight: '1.75rem',
        }
      },
      h3: {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        fontWeight: '600',
      },
      p: {
        marginBottom: '1rem',
        marginTop: '0'
      },
    },
  },
}