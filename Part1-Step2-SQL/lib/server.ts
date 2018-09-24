import server from './app'

const PORT = process.env.PORT || 5001;
server.listen(PORT, function () {
    console.log("Express server listening on port " + PORT);
});