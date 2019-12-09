module.exports = {
  name: 'poses',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/poses',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
