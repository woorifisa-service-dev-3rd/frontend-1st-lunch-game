import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    {
        languageOptions: { globals: globals.browser },
        rules: {
            'semi': ['error', 'always'], 
            'quotes': ['error', 'single'],
            'max-len' : ['error', { 'code': 120 }], // 한 줄의 최대 글자수 설정
            'indent': ['error', 4], // 탭 너비 조절
            'comma-dangle': ['error', 'only-multiline'], // 객체, 배열 등에서 마지막 항목 뒤에 , 사용 (es5와 비슷한 설정)
            'arrow-parens': ['error', 'always'], // 화살표 함수 매개변수 1개일 때 ()로 감싸주기
        }
    },
    pluginJs.configs.recommended,
];