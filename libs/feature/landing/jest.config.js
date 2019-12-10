module.exports = {
  name: 'feature-landing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/landing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
