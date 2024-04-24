const config = {
  branches: ['main', {name: 'next', channel: 'channel-${name}'}],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/git", {
      "assets": ["*.sh", "package.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    '@semantic-release/github',
    ["@semantic-release/exec", {
      "verifyReleaseCmd": "bash welcome.sh ${nextRelease.version}",
      "verifyReleaseCmd": "echo ${nextRelease.version} > release.txt",
      "generateNotesCmd": "git log -1 --pretty=%B >> release.txt"
    }]    
  ]
};

module.exports = config;
