import fs from 'fs'

const TEST_DATA_DIR = "./tests/testData"

export const sampleManifests = {
  helloBlockstack: {
    name: "Hello, Blockstack",
    short_name: "Hello, Blockstack",
    start_url: "https://helloblockstack.com",
    display: "standalone",
    background_color: "#fff",
    description: "A simple app demonstrating how to log in with Blockstack.",
    icons: [
      {
        src: "https://raw.githubusercontent.com/blockstack/blockstack-portal/master/app/images/app-hello-blockstack.png",
        sizes: "192x192",
        type: "image/png"
      }
    ]
  }
}

export const sampleNameRecords = {
  ryan: JSON.parse(fs.readFileSync(TEST_DATA_DIR + '/name-records/ryan.json')),
}

export const sampleProfiles = {
  balloonDog: JSON.parse(fs.readFileSync(TEST_DATA_DIR + '/profiles/balloonDog.json')),
  naval: JSON.parse(fs.readFileSync(TEST_DATA_DIR + '/profiles/naval.json')),
  ryan: JSON.parse(fs.readFileSync(TEST_DATA_DIR + '/profiles/ryan.json')),
  larry: JSON.parse(fs.readFileSync(TEST_DATA_DIR + '/profiles/larry.json')),
  google: JSON.parse(fs.readFileSync(TEST_DATA_DIR + '/profiles/google.json')),
  navalLegacy: JSON.parse(fs.readFileSync(TEST_DATA_DIR + '/profiles/naval-legacy.json'))
}

export const sampleTokenFiles = {
  ryan_apr20: {
    url: "https://blockstack.s3.amazonaws.com/ryan_apr20.id",
    body: JSON.parse(fs.readFileSync(TEST_DATA_DIR + '/token-files/ryan_apr20.json'))
  },
  ryan: {
    url: "https://blockstack.s3.amazonaws.com/ryan.id",
    body: JSON.parse(fs.readFileSync(TEST_DATA_DIR + '/token-files/ryan.json'), 'utf8')
  }
}

export const sampleProofs = {
  naval: JSON.parse(fs.readFileSync(TEST_DATA_DIR + '/profiles/naval.proofs.json')),
  larry: JSON.parse(fs.readFileSync(TEST_DATA_DIR + '/profiles/larry.proofs.json'))
}

export const sampleVerifications = {
  naval: {
    facebook: {
      url: "https://www.facebook.com/navalr/posts/10152190734077261",
      body: fs.readFileSync(TEST_DATA_DIR + '/profiles/naval.verification.facebook.html','utf8')
    },
    github: {
      url: "https://gist.github.com/navalr/f31a74054f859ec0ac6a",
      body: fs.readFileSync(TEST_DATA_DIR + '/profiles/naval.verification.github.html','utf8')
    },
    twitter: {
      url: "https://twitter.com/naval/status/486609266212499456",
      body: fs.readFileSync(TEST_DATA_DIR + '/profiles/naval.verification.twitter.html','utf8')
    }
  },
  larry: {
    facebook: {
      url: "https://www.facebook.com/larrysalibra/posts/10100341028448093",
      body: fs.readFileSync(TEST_DATA_DIR + '/profiles/larry.verification.facebook.html','utf8')
    }
  }
}