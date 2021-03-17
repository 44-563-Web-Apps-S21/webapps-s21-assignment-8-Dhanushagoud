const http = require('http')    //Pull in a useful node package


const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                //   console.log("Look for query parameter data: " + search_params.get("data"))
                const jokes = ["why  did the nurse need pen at work incase she need to draw a blood.",
                 "what kind of music do plantes like,Neptunes.",
                "dont break anybodys heart,they have only one. Break their bones,they have 206.",
                "people say nothing is impossible, but i do nothing everyday.",
                " marry a person, you should first make them use a computer with slow Internet to see who they really are.",
                " An apple a day keeps anyone away if you throw It hard enough.",
                ]
                let randomIndex = Math.floor(Math.random() * jokes.length)
                // Process the queries here
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write(`${jokes[randomIndex]}`)
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})