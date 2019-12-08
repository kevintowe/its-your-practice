module.exports = {
  name: 'its-your-practice',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/its-your-practice',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
