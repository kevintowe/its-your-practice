module.exports = {
  name: 'feature-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
