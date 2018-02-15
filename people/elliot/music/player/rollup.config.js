import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/waveplayer.min.js',
            format: 'cjs',
            sourcemap: true
        },
        plugins: [
            eslint(),
            babel({
                exclude: 'node_modules/**',
                plugins: ['external-helpers', 'transform-runtime'],
                runtimeHelpers: true
            }),
            commonjs(),
            resolve({
                jsnext: true,
                customResolveOptions: {
                    moduleDirectory: 'node_modules'
                }
            }),
            uglify()
        ]
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/waveplayer.js',
            format: 'cjs'
        },
        plugins: [
            eslint(),
            babel({
                exclude: 'node_modules/**',
                plugins: ['external-helpers', 'transform-runtime'],
                runtimeHelpers: true
            }),
            commonjs(),
            resolve({
                jsnext: true,
                customResolveOptions: {
                    moduleDirectory: 'node_modules'
                }
            })
        ]
    }
];
