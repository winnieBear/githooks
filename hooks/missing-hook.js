var githooks = require('../githooks.js');

require('../.githooks')(githooks);

githooks.hook('missing-hook').trigger().then(githooks.pass, githooks.error);

