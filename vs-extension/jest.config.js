/** @type {import('ts-jest').JestConfigWithTsJest} **/
// module.exports =

export default {
  moduleDirectories: [
    "node_modules",
    "src",
  ],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@apache-arrow/ts))"
  ]
};