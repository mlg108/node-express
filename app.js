'use strict';


const { flaschenpost } = require ('flaschenpost');

const { getApi } = require ('./lib/getApi')

const http = require ('http');

const { processenv } = require ('processenv')

const logger = flaschenpost.getLogger();

const api = getApi();

const server = http.createServer(api);

const port = processenv('PORT', 3_000);

server.listen(port, () => {
    logger.info ('Server started. \n', { port });
    // logger.info ('Server started. \n',  port );
    // logger.info ('Server started. \n');
});

