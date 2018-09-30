module.exports = {
    'extends': 'airbnb',
    'rules': {
        'comma-dangle': [2, 'never'],
        'indent': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent-props': [2, 4],
        'eol-last': [2, 'never'],
        'class-methods-use-this': 0,
        'import/prefer-default-export': 0
    },
    globals: {
        document: true,
        window: true
    }
};