module.exports = {
  name: 'sequences',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/sequences',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
