let url = require('url');
let fs = require('fs');

html = {
    render(path, response) {
        fs.readFile(path, null, function (error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('file not found');
            } else {
                response.write(data);
            }
            response.end();
        });
    }
}

module.exports = {
    handleRequest(request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
 
        let path = url.parse(request.url).pathname;
        
        switch (path) {
            case '/':
                html.render('./list-users.html', response);
                break;
            case '/listusers':
                html.render('./list-users.html', response);
                break;
            case '/adduser':
                html.render('./add-user.html', response);
                break;
            default:
                 html.render('./404.html', response);
                break;
        }
    }
}